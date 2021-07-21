/// <reference types="Cypress" />
import AlertsPage from '../../support/pom/AlertsPage'
import BaseTest from '../../support/base/BaseTest'
import HomePage from '../../support/pom/HomePage'
import LeftNavPage from '../../support/pom/LeftNavPage'
import ModelDialogPage from '../../support/pom/ModelDialogPage'
import SmallModelPage from '../../support/pom/SmallModelPage'

describe('Alerts Win Frames Testing', () => {

  beforeEach(() => {
    const baseTest = new BaseTest()
    baseTest.openHomePage()
  })

  it('Alert Test', () => {
    const homePage = new HomePage()
    const leftNavPage = new LeftNavPage()
    const alertsPage = new AlertsPage()

    homePage.clickAlertsFrmLink()
    leftNavPage.clickAlertsLink()
    alertsPage.clickAlertButtonAndAssert()
  })

  it('Timed Alert Test', () => {
    const homePage = new HomePage()
    const leftNavPage = new LeftNavPage()
    const alertsPage = new AlertsPage()

    homePage.clickAlertsFrmLink()
    leftNavPage.clickAlertsLink()
    alertsPage.clickTimerAlertButton()
  })

  it('Confirm Box Alert Test - Click OK', () => {
    const homePage = new HomePage()
    const leftNavPage = new LeftNavPage()
    const alertsPage = new AlertsPage()

    homePage.clickAlertsFrmLink()
    leftNavPage.clickAlertsLink()
    alertsPage.clickConfirmButtonAndOK()
    alertsPage.validateConfirmBoxOKResultText()
  })

  it('Confirm Box Alert Test - Click Cancel', () => {
    const homePage = new HomePage()
    const leftNavPage = new LeftNavPage()
    const alertsPage = new AlertsPage()

    homePage.clickAlertsFrmLink()
    leftNavPage.clickAlertsLink()
    alertsPage.clickConfirmButtonAndCancel()
    alertsPage.validateConfirmBoxCancelResultText()
  })

  it('Prompt button Test', () => {
    const homePage = new HomePage()
    const leftNavPage = new LeftNavPage()
    const alertsPage = new AlertsPage()

    homePage.clickAlertsFrmLink()
    leftNavPage.clickAlertsLink()
    alertsPage.clickPromptButton()
    alertsPage.validatePromptResultText()
  })

  it('Small Model Test', () => {
    const homePage = new HomePage()
    const leftNavPage = new LeftNavPage()
    const alertsPage = new AlertsPage()
    const modelDialogPage = new ModelDialogPage()
    const smallModelPage = new SmallModelPage()

    homePage.clickAlertsFrmLink()
    leftNavPage.clickModelDialogLink()
    modelDialogPage.clickSmallModelButton()
    smallModelPage.validateSmallModelBodyText()
    smallModelPage.clickSmallModelCloseButton()
  })
})