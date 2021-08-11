/// <reference types="cypress"/>

import {HomePage} from "../support/pages/homePage"
const homePage = new HomePage()

it("Open the Ebay site", () => {
    homePage.openPage()
})