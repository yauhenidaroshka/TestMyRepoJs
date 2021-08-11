import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript"


export class SignInPage {

    pageHeader = '#greeting-msg'
    signInInputField = '//*[@id="userid"]'

    getPageHeader(){
        return cy.get(this.pageHeader)

    }

    inputEmail(email){
        cy.xpath(this.signInInputField).type(email)
    }

}