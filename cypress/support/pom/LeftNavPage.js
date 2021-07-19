class LeftNavPage {

    getUploadDownloadLink() {
        return cy.contains('Upload and Download')
    }

    getAlertFrmWinLink() {
        return cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text')
    }

    getWebTablesLink() {
        return cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text')
    }

    getAlertsLink() {
        return cy.get(':nth-child(3) > .element-list > .menu-list > #item-1 > .text')
    }

    getModelDialogLink() {
        return cy.get(':nth-child(3) > .element-list > .menu-list > #item-4 > .text')
    }

    getDatePickerLink() {
        return cy.get(':nth-child(4) > .element-list > .menu-list > #item-2 > .text')
    }

    clickWebTablesLink() {
        this.getWebTablesLink().click()
    }

    clickModelDialogLink() {
        this.getModelDialogLink().click()
    }

    clickUploadDownloadLink() {
        this.getUploadDownloadLink().click()
    }

    clickAlertFrmWinLink() {
        this.getAlertFrmWinLink().click()
    }

    clickAlertsLink() {
        this.getAlertsLink().click()
    }

    clickDatePickerLink() {
        this.getDatePickerLink().click()
    }
}

export default LeftNavPage;