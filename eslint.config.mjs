import js from "@eslint/js";
import cypressPlugin from "eslint-plugin-cypress";

export default [
    js.configs.recommended,
    {
        ignores: ["**/cypress/results/**"],
    },
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                cy: "readonly",
                Cypress: "readonly",
                describe: "readonly",
                it: "readonly",
                beforeEach: "readonly",
                expect: "readonly",
            },
        },
        plugins: {
            cypress: cypressPlugin,
        },
        rules: {
            ...cypressPlugin.configs.recommended.rules,
            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "cypress/no-assigning-return-values": "error",
            "cypress/no-unnecessary-waiting": "warn",
            "cypress/assertion-before-screenshot": "warn",
            "cypress/no-force": "warn",
            "cypress/no-async-tests": "error",
            "cypress/no-pause": "error",
        },
    },
];
