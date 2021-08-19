/// <reference types="cypress"/>


import {ProductDetailsPage} from "../support/pages/productDetailsPage"
import { HomePage } from "../support/pages/homePage"

const productDetailsPage = new ProductDetailsPage()
const homepAge = new HomePage()

it("should open PDP page", () => {
 homepAge.openCategoriesList()
 

})
