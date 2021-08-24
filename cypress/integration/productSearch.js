/// <reference types="cypress"/>


import {HomePage} from "../support/pages/homePage.js"
import { ResultPage } from "../support/pages/ResultPage.js";


const page = new HomePage()
const resultsPage = new ResultPage()

it("Validate user can search for a product", () => {
    page.openPage()
    page.searchProduct("shoes{enter}")
    resultsPage.getResultsNumber().should('contain.text', 'shoes')
    resultsPage.selectFirstProductTile()

})