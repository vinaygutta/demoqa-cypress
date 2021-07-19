class UploadDownloadPage {

    constructor() {
        cy.fixture('strings.json').then((data) => {
            this.data = data
        })
    }

    getChooseFileButton() {
        return cy.get('#uploadFile')
    }

    getFilePathText(){
        return cy.get('#uploadedFilePath')
    }

    validateFilePathText() {
        this.getFilePathText().should(($p) => {
            expect($p.first()).to.contain(this.data.filePathText)
        })
    }

    clickAndChooseFile(filePath) {
        this.getChooseFileButton().attachFile(filePath)
    }
}

export default UploadDownloadPage;