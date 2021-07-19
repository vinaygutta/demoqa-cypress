class DatePickerPage {

    getSelectDatePicker() {
        return cy.get('#datePickerMonthYearInput')
    }

    clickDatePicker() {
        this.getSelectDatePicker().click()
    }
}

export default DatePickerPage;