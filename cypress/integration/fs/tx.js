/// <reference types="Cypress" />
import BaseTest from '../../support/pom/BaseTest'
import DatePickerPage from '../../support/pom/DatePickerPage'
import HomePage from '../../support/pom/HomePage'
import LeftNavPage from '../../support/pom/LeftNavPage'
import UploadDownloadPage from '../../support/pom/uploadDownloadPage'

describe('Demo QA Testing', () => {

  beforeEach(() => {
    const baseTest = new BaseTest()
    baseTest.openHomePage()
  })

  it('Upload File Test', () => {
    const filePath = 'files/example.json'
    const homePage = new HomePage()
    const leftNavPage = new LeftNavPage()
    const uploaddownloadPage = new UploadDownloadPage()
    const datePickerPage = new DatePickerPage()

    homePage.clickWidgetsLink()
    leftNavPage.clickDatePickerLink()
    datePickerPage.clickDatePicker()
    cy.get('#datePickerMonthYear > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__month').each(($el, index, $list) => {
      console.log($el.siblings.length)
    })
  })
})