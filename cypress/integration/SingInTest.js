/// <reference types="cypress"/>

import { sign } from "jsonwebtoken";
import { HomePage } from "../support/pages/homePage";
import { SignInPage } from "../support/pages/signInPage";


const page = new HomePage()
const signInPage = new SignInPage()

it ("Ligon as existing user", () => {
    page.openPage("https://www.ebay.com/")
    page.openLoginModal()
    signInPage.getPageHeader()
    signInPage.inputEmail("daroshokay@gmail.com")
    signInPage.clickContinueButton()
    signInPage.inputPassword('21011992_qQQ')
    signInPage.clickSingInButton()
})