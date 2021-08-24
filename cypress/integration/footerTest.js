/// <reference types="cypress"/>

import {HomePage} from "../support/pages/homePage"

const page = new HomePage()

it("it scrolls to the Footer ", () => {
    page.openPage()
    page.getFooter()
    
})

it("Validates Footer items", () => {
    
})