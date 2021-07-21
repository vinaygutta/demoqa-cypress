// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import '@applitools/eyes-cypress/commands'

import './commands'
import addContext from "mochawesome/addContext";

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "failed") {
        const specName = Cypress.spec.name
        const specTitle = runnable.parent.title
        const testTitle = test.title
        const screenshot = "screenshots/"+specName+"/"+specTitle+" -- "+testTitle+" (failed).png";
        addContext({ test }, screenshot);
    }
});