/// <reference types="cypress"/>

import {HomePage, homePage} from "../support/pages/homePage.js"

const page = new HomePage();

it("validate user can search for a product", () => {
    page.openPage("https://www.ebay.com/")
    page.searchProduct("shoes")
    page.clickSearchButton()



    

})