/// <reference types="Cypress" />
import BaseTest from '../../support/pom/BaseTest'
import HomePage from '../../support/pom/HomePage'
import LeftNavPage from '../../support/pom/LeftNavPage'
import RegistrationPage from '../../support/pom/RegistrationPage'
import UploadDownloadPage from '../../support/pom/uploadDownloadPage'
import WebTablesPage from '../../support/pom/WebTablesPage'

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

    homePage.clickElementsLink()
    leftNavPage.clickUploadDownloadLink()
    uploaddownloadPage.clickAndChooseFile(filePath)
    uploaddownloadPage.validateFilePathText()
  })

  it('Check mandatory fields highilited in color on web table', () => {
    const homePage = new HomePage()
    const leftNavPage = new LeftNavPage()
    const webTablesPage = new WebTablesPage()
    const registrationPage = new RegistrationPage()

    homePage.clickElementsLink()
    leftNavPage.clickWebTablesLink()
    webTablesPage.clickAddNewRecordButton()
    registrationPage.fillSubmitNewRegistration()
  })
})