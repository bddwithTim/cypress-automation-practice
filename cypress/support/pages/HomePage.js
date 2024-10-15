import "@4tw/cypress-drag-drop";
import "cypress-real-events/support";

class FormSection {
  elements = {
    nameField: () => cy.get("#name"),
    emailField: () => cy.get("#email"),
    phoneField: () => cy.get("#phone"),
    addressField: () => cy.get("#textarea"),
    genderMale: () => cy.get("#male"),
    genderFemale: () => cy.get("#female"),
    dayCheckbox: (day) => cy.get(`input#${day.toLowerCase()}.form-check-input`),
    countryDropdown: () => cy.get("#country"),
    colorsDropdown: () => cy.get("#colors"),
    dateField: () => cy.get("#datepicker"),
    submitButton: () => cy.get("#submit"),
  };

  fillName(name) {
    this.elements.nameField().type(name);
  }

  fillEmail(email) {
    this.elements.emailField().type(email);
  }

  fillPhone(phone) {
    this.elements.phoneField().type(phone);
  }

  fillAddress(address) {
    this.elements.addressField().type(address);
  }

  selectGender(gender) {
    if (gender.toLowerCase() === "male") {
      this.elements.genderMale().check();
    } else if (gender.toLowerCase() === "female") {
      this.elements.genderFemale().check();
    }
  }

  selectDays(days) {
    days.forEach((day) => {
      this.elements.dayCheckbox(day).check();
    });
  }

  selectCountry(country) {
    this.elements.countryDropdown().select(country);
  }

  selectColors(colors) {
    colors.forEach((color) => {
      this.elements.colorsDropdown().select(color);
    });
  }

  setDate(date) {
    this.elements.dateField().type(date);
  }

  submitForm() {
    this.elements.submitButton().click();
  }
}

class SearchSection {
  elements = {
    searchInput: () => cy.get(".wikipedia-input-box"),
    searchButton: () => cy.get(".wikipedia-search-button"),
    searchResults: () => cy.get(".wikipedia-search-results"),
  };

  searchFor(text) {
    this.elements.searchInput().type(text);
    this.elements.searchButton().click();
  }

  validateSearchResults() {
    this.elements.searchResults().should("be.visible");
  }
}

class DynamicButtonSection {
  elements = {
    startButton: () => cy.get("button.start"),
    stopButton: () => cy.get("button.stop"),
    newTabButton: () => cy.contains("button", "New Tab"),
  };

  clickDynamicButton(state) {
    if (state !== "Start" && state !== "Stop") {
      throw new Error("Invalid state. Use 'Start' or 'Stop'.");
    }

    const currentState = state.toLowerCase();
    const nextState = currentState === "start" ? "stop" : "start";

    // Click the current state button
    this.elements[`${currentState}Button`]().click();

    // Wait for the button to change to the next state
    cy.get(`button.${nextState}`).should("exist").and("be.visible");

    // Additional assertion to ensure the text has changed
    cy.get(`button.${nextState}`).should(
      "have.text",
      nextState.toUpperCase() === "STOP" ? "STOP" : "START",
    );
  }

  waitForButtonStateChange(state) {
    const expectedState = state.toLowerCase();
    cy.log(`Expected state: ${expectedState}`);
    cy.get(`button.${expectedState}`).should("exist").and("be.visible");
  }

  // click the new tab button
  clickNewTabButton() {
    // Remove the target attribute to prevent opening in a new tab
    this.elements.newTabButton().invoke("removeAttr", "target").click();

    // Validate that the URL has changed to the expected one
    cy.url().should("satisfy", (url) => {
      return (
        url.includes("https://demo.opencart.com/") ||
        url.includes("testautomationpractice.blogspot.com")
      );
    });

    // Optionally, you can add more assertions here to verify the new page content
  }
}

class AlertsAndPopupsSection {
  elements = {
    simpleAlertButton: () => cy.contains("button", "Simple Alert"),
    confirmationAlertButton: () => cy.contains("button", "Confirmation Alert"),
    promptAlertButton: () => cy.contains("button", "Prompt Alert"),
    confirmationMessage: () => cy.get("p#demo"),
  };

  clickSimpleAlertButton() {
    this.elements.simpleAlertButton().click();
    // validate the alert is displayed
    cy.on("window:alert", (text) => {
      expect(text).to.equal("I am an alert box!");
    });
  }

  clickConfirmationAlertButton(button) {
    if (button !== "OK" && button !== "Cancel") {
      throw new Error("Invalid button. Use 'OK' or 'Cancel'.");
    }
    this.elements.confirmationAlertButton().click();
    cy.on("window:confirm", (text) => {
      expect(text).to.equal("Press a button!");
      // simulate clicking the specified button
      return button === "OK";
    });
    this.elements
      .confirmationMessage()
      .should("have.text", `You pressed ${button}!`);
  }

  clickPromptAlertButton(button) {
    if (button !== "OK" && button !== "Cancel") {
      throw new Error("Invalid button. Use 'OK' or 'Cancel'.");
    }
    this.elements.promptAlertButton().click();
    cy.on("window:prompt", (text) => {
      expect(text).to.equal("Please enter your name:");
      return button === "OK";
    });

    const expectedMessage =
      button === "OK"
        ? "Hello Harry Potter! How are you today?"
        : "User cancelled the prompt.";

    this.elements.confirmationMessage().should("have.text", expectedMessage);
  }
}

class DragAndDropSection {
  elements = {
    draggableElement: () => cy.get("div#draggable"),
    droppableElement: () => cy.get("div#droppable"),
  };

  dragDraggableElementToDroppableElement() {
    this.elements.draggableElement().drag("div#droppable", { force: true });
    this.elements.droppableElement().should("contain", "Dropped!");
  }
}

class SliderSection {
  elements = {
    sliderHandle: () => cy.get("#slider .ui-slider-handle"),
    slider: () => cy.get("#slider"),
  };

  moveSliderTo(targetPercentage) {
    if (targetPercentage < 0 || targetPercentage > 100) {
      throw new Error(
        `Target percentage ${targetPercentage} is out of range (0-100)`,
      );
    }

    this.elements.slider().then(($slider) => {
      const sliderWidth = $slider.width();
      const targetPixels = (targetPercentage / 100) * sliderWidth;

      this.elements.sliderHandle().drag("#slider", {
        force: true,
        target: { x: targetPixels, y: 0 },
      });
    });

    // Verify the slider moved to the correct position (with some tolerance)
    this.getCurrentSliderValue().should("be.closeTo", targetPercentage, 2);
  }

  getCurrentSliderValue() {
    return this.elements
      .sliderHandle()
      .invoke("attr", "style")
      .then((style) => {
        const match = style.match(/left:\s*([\d.]+)%/);
        return match ? parseFloat(match[1]) : null;
      });
  }
}

class ResizableSection {
  elements = {
    resizableElement: () => cy.get("div#resizable"),
    resizeHandle: () => cy.get("div#resizable .ui-resizable-se"),
  };

  resizeElementBy(offsetX, offsetY) {
    this.elements
      .resizeHandle()
      .scrollIntoView()
      .should("be.visible")
      .realMouseDown({ position: "bottomRight" })
      .realMouseMove(offsetX, offsetY, { position: "bottomRight" })
      .realMouseUp({ position: "bottomRight" });
  }

  // Assert new element size (default 132px + offset)
  assertElementResizedBy(expectedOffsetX, expectedOffsetY, tolerance = 5) {
    this.elements.resizableElement().then(($el) => {
      const rect = $el[0].getBoundingClientRect();
      expect(rect.width).to.be.closeTo(expectedOffsetX + 132, tolerance);
      expect(rect.height).to.be.closeTo(expectedOffsetY + 132, tolerance);
    });
  }
}

class HomePage {
  constructor() {
    this.form = new FormSection();
    this.search = new SearchSection();
    this.dynamicButton = new DynamicButtonSection();
    this.alertsAndPopups = new AlertsAndPopupsSection();
    this.dragAndDrop = new DragAndDropSection();
    this.slider = new SliderSection();
    this.resizable = new ResizableSection();
  }

  visit() {
    cy.visit("/");
  }
}

export default new HomePage();
