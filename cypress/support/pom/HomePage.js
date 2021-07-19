class HomePage {

    getElementsLink() {
        return cy.contains('Elements')
    }

    getAlertsFrmLink() {
        return cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5')
    }

    getWidgetsLink() {
        return cy.get(':nth-child(4) > :nth-child(1) > .card-body > h5')
    }

    clickElementsLink() {
        this.getElementsLink().click()
    }

    clickAlertsFrmLink() {
        this.getAlertsFrmLink().click()
    }

    clickWidgetsLink() {
        this.getWidgetsLink().click()
    }
}

export default HomePage;