class SmallModelPage {

    constructor() {
        cy.fixture('strings.json').then((data) => {
            this.data = data
        })
    }

    getSmallModelBodyTextLink() {
        return cy.get('.modal-body')
    }

    getSmallModelCloseButton() {
        return cy.get('#closeSmallModal')
    }

    clickSmallModelCloseButton() {
        this.getSmallModelCloseButton().click()
    }

    validateSmallModelBodyText() {
        this.getSmallModelBodyTextLink().should(($p) => {
            expect($p.first()).to.contain(this.data.smallModelText)
        })
    }
}

export default SmallModelPage;