/// <reference types="cypress"/>

import {HomePage} from "../support/pages/homePage"
import { CartPage } from "../support/pages/cartPage"

const homePage = new HomePage()
const cartPage = new CartPage()

beforeEach(() => {
    homePage.openPage()
  })

it("should open Cart page", () => {
    homePage.openCartPage()
    cartPage.getPageHeader().should("have.text", "Shopping cart")
    cartPage.hasCopyText().should("have.text", "You don't have any items in your cart.")
    cartPage.hasSubCopytext().should('have.text', 'Have an account? Sign in to see your items.')

})


