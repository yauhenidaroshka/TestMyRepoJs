/// <reference types="cypress"/>


import {HomePage} from "../support/pages/homePage.js"
import { ResultPage } from "../support/pages/ResultPage.js";


const page = new HomePage();

it("Validate user can search for a product", () => {
    page.openPage("https://www.ebay.com/")
    page.searchProduct("shoes{enter}")
    const resultsPage = new ResultPage()
    resultsPage.getResultsNumber().should('have.class', 'srp-controls__count-heading').and('have.text', 'shoes')



    

})