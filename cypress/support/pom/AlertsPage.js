class AlertsPage {

    constructor() {
        cy.fixture('strings.json').then((data) => {
            this.data = data
        })
    }

    getAlertButtonLink() {
        return cy.get('#alertButton')
    }

    getConfirmButtonLink() {
        return cy.get('#confirmButton')
    }

    getPromptButtonLink() {
        return cy.get('#promtButton')
    }

    getConfirmBoxResultLink() {
        return cy.get('#confirmResult')
    }

    getPromptResultLink() {
        return cy.get('#promptResult')
    }

    getTimerAlertButton() {
        return cy.get('#timerAlertButton')
    }

    validatePromptResultText() {
        this.getPromptResultLink().should(($p) => {
            expect($p.first()).to.contain(this.data.promptBoxResult)
        })
    }

    validateConfirmBoxOKResultText() {
        this.getConfirmBoxResultLink().should(($p) => {
            expect($p.first()).to.contain(this.data.confirmBoxResultOK)
        })
    }

    validateConfirmBoxCancelResultText() {
        this.getConfirmBoxResultLink().should(($p) => {
            expect($p.first()).to.contain(this.data.confirmBoxResultCancel)
        })
    }

    clickConfirmButtonAndOK() {
        this.getConfirmButtonLink().click()
        cy.on('window:confirm', (str) => {
            // expect(str).to.equal('Do you confirm action?')
            expect(str).to.equal(this.data.confirmMessage)
        })
        cy.on('window:confirm', () => true)
    }

    clickConfirmButtonAndCancel() {
        this.getConfirmButtonLink().click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(this.data.confirmMessage)
        })
        cy.on('window:confirm', () => false)
    }

    clickAlertButtonAndAssert() {
        this.getAlertButtonLink().click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.alertMessage)
        })
        cy.on('window:confirm', () => true)
    }

    clickTimerAlertButton() {
        this.getTimerAlertButton().click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(this.data.timerAlertMessage)
        })
        cy.on('window:confirm', () => true)
    }

    clickPromptButton() {
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns(this.data.promptAlertInput)
            //cy.contains('Click for JS Prompt').click()
            this.getPromptButtonLink().click()
        })
    }
}

export default AlertsPage;