class WebTablesPage {

    getAddNewRecordButton() {
        return cy.get('#addNewRecordButton')
    }

    clickAddNewRecordButton() {
        this.getAddNewRecordButton().click()
    }
}

export default WebTablesPage;