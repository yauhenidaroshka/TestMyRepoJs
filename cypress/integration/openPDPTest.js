/// <reference types="cypress"/>


import { CollectiblesPage } from "../support/pages/collectiblesPage"
import { HomePage } from "../support/pages/homePage"

const homepAge = new HomePage()
const colPage = new CollectiblesPage()

it("should open PDP page", () => {
    homepAge.openPage()
    homepAge.openCategoriesList()
    homepAge.selectCategory()
    homepAge.getCategoriesList()
    colPage.getPageTitle().should('have.text', 'Collectibles & Art')
    colPage.openCategoryPage()
    
  // colPage.getFirstProductPLP()


    

})
