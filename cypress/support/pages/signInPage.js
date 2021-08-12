
export class SignInPage {

    pageHeader = '#greeting-msg'
    signInInputField = '//*[@id="userid"]'
    continueButton = '#signin-continue-btn'
    passwordField = '#pass'
    signInButton = '#sgnBt'

    getPageHeader(){
        return cy.get(this.pageHeader)

    }

    inputEmail(email){
        cy.xpath(this.signInInputField).type(email, {force: true})
    }

    clickContinueButton(){
        cy.get(this.continueButton).click()

    }

    inputPassword(password){
        cy.get(this.passwordField).click()
        cy.get(this.passwordField).type(password, {force: true})
    }
    clickSingInButton(){
        cy.get(this.signInButton).click()
    }

}