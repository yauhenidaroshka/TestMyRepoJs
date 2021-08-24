/// <reference types="cypress"/>

import {HomePage} from "../support/pages/homePage"
import {MotorsPage} from "../support/pages/motorsPage"
import {SignInPage} from "../support/pages/signInPage"

const homePage = new HomePage()
const signInPage = new SignInPage()
const motorsPage = new MotorsPage()

beforeEach(() => {
    homePage.openPage()
  })


it('Opens Saved page ', () => {
    homePage.openSavedPage()
    signInPage.getPageHeader().should('have.text', 'Hello')
    homePage.returnToHomePage()
})

// it('Opens Motors page ', () => {
//     homePage.openMotorsPage()
//     motorsPage.getPageBannerName().should('have.text', 'eBay Motors')

// })
