/// <reference types="cypress"/>


import {ProductDetailsPage} from "../support/pages/productDetailsPage"
import { HomePage } from "../support/pages/homePage"

const productDetailsPage = new ProductDetailsPage()
const homepAge = new HomePage()

it("should open PDP page", () => {
    // homepAge.openPage()
    // homepAge.openCategoriesList()
    cy.visit("https://www.ebay.com/itm/324759335191?hash=item4b9d2a3117:g:n6EAAOSwdQdhHsDE")

    
    

 

})
