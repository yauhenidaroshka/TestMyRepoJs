/// <reference types="cypress"/>

import { sign } from "jsonwebtoken";
import { HomePage } from "../support/pages/homePage";
import { SignInPage } from "../support/pages/signInPage";


const page = new HomePage()
const signInPage = new SignInPage()

it ("Validate that user can login to the site ", () => {
    page.openPage("https://www.ebay.com/")
    page.openLoginModal()
    signInPage.getPageHeader().should('have.text', 'Hello')
    signInPage.inputEmail("daroshokay@gmail.com")
    signInPage.clickContinueButton()
    signInPage.inputPassword('test')
    signInPage.clickSingInButton()
})