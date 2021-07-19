class BaseTest {

    openHomePage() {
        if (Cypress.env('platform') == 'dev') {
            cy.visit('https://demoqa.com')
        }
    }
}

export default BaseTest;