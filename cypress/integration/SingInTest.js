/// <reference types="cypress"/>

import { HomePage } from "../support/pages/homePage";
import { SignInPage } from "../support/pages/signInPage";


const page = new HomePage()
const signInPage = new SignInPage()

it ("Validates that user can login to the site ", () => {
    page.openPage()
    page.openLoginModal()
    signInPage.getPageHeader().should('have.text', 'Hello')
    signInPage.inputEmail(Cypress.env("email"))
    signInPage.clickContinueButton()
    signInPage.inputPassword(Cypress.env("password"))
    signInPage.clickSingInButton()
    
})