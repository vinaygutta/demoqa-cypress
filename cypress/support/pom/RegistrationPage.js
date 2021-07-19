class RegistrationPage {

    getFirstNameTextBoxLink() {
        return cy.get('#firstName')
    }

    getLastNameTextBoxLink() {
        return cy.get('#lastName')
    }

    getEmailTextBoxLink() {
        return cy.get('#userEmail')
    }

    getAgeTextBoxLink() {
        return cy.get('#age')
    }

    getSalaryTextBoxLink() {
        return cy.get('#salary')
    }

    getDepartmentTextBoxLink() {
        return cy.get('#department')
    }

    getSubmitButtonLink() {
        return cy.get('#submit')
    }

    fillSubmitNewRegistration() {
        const faker = require("faker")

        this.getFirstNameTextBoxLink().type(faker.name.firstName())
        this.getLastNameTextBoxLink().type(faker.name.lastName())
        this.getEmailTextBoxLink().type(faker.internet.email())
        this.getAgeTextBoxLink().type(faker.datatype.number(120))
        this.getSalaryTextBoxLink().type(faker.datatype.number(50000))
        this.getDepartmentTextBoxLink().type(faker.company.companyName())
        this.getSubmitButtonLink().click()
    }
}

export default RegistrationPage;