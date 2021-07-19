class ModelDialogPage {

    getSmallModelButton() {
        return cy.get('#showSmallModal')
    }

    getLargeModelButton() {
        return cy.get('#showLargeModal')
    }

    clickSmallModelButton() {
        this.getSmallModelButton().click()
    }

    clickLargeModelButton() {
        this.getLargeModelButton().click()
    }
}

export default ModelDialogPage;