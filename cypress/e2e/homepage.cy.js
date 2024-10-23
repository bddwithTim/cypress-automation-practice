import HomePage from "../support/pages/HomePage";

describe("Landing Page", () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it.skip("should fill out the form", () => {
    HomePage.form.fillName("John Doe");
    HomePage.form.fillEmail("john.doe@example.com");
    HomePage.form.fillPhone("1234567890");
    HomePage.form.fillAddress("123 Test St, Test City, 12345");
    HomePage.form.selectGender("Male");
    HomePage.form.selectDays(["Sunday", "Monday"]);
    HomePage.form.selectCountry("Japan");
    HomePage.form.selectColors(["Red", "Green"]);
    HomePage.form.setDate("2023-12-31");
  });

  it.skip("performs search functionality and displays results", () => {
    HomePage.search.searchFor("Cypress");
    HomePage.search.validateSearchResults();
  });

  it.skip("performs dynamic button click", () => {
    HomePage.dynamicButton.clickDynamicButton("Start");
    HomePage.dynamicButton.waitForButtonStateChange("Stop");

    // click the stop button
    HomePage.dynamicButton.clickDynamicButton("Stop");
    HomePage.dynamicButton.waitForButtonStateChange("Start");

    // click the new tab button
    HomePage.dynamicButton.clickNewTabButton();
  });

  it.skip("performs alerts and popups", () => {
    HomePage.alertsAndPopups.clickSimpleAlertButton();
    HomePage.alertsAndPopups.clickConfirmationAlertButton("OK");
    HomePage.alertsAndPopups.clickPromptAlertButton("Cancel");
  });

  it.skip("performs drag and drop", () => {
    HomePage.dragAndDrop.dragDraggableElementToDroppableElement();
  });

  it("performs slider functionality", () => {
    HomePage.slider.moveFirstSliderToPrice(0);
  });
});
