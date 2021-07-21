/// <reference types="@applitools/eyes-cypress" />

class EyesUtil {

    appEyesOpen(aName) {
        cy.eyesOpen({
            appName: aName,
          })
    }

    appEyesCheck(tagName) {
        cy.eyesCheckWindow({
            tag: tagName,
            target: 'window',
            fully: true
          })
    }

    appEyesClose() {
        cy.eyesClose()
    }
}

export default EyesUtil;