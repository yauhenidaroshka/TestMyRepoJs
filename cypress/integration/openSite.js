/// <reference types="cypress"/>

import {HomePage} from "../support/pages/homePage"
import {SignInPage} from "../support/pages/signInPage"

const homePage = new HomePage()
const signInPage = new SignInPage()


it("Open the Ebay site", () => {
    homePage.openPage('https://www.ebay.com/')
    homePage.openSavedPage()
    signInPage.getPageHeader().should('have.text', 'Hello')
    homePage.returnToHomePage()


})