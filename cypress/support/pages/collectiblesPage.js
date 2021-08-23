/// <reference types="cypress"/>

export class CollectiblesPage{
    title = '.title-banner__title'
    categoriesList = "//div[@class='b-visualnav__grid']//a"
    singlCatrgory = "//div[@class='b-visualnav__grid']//div[contains(text(),'Comics')]"
    fistPLP = "//div[@class='b-tile__img']"


    getFirstProductPLP(){
        cy.get('.b-module-related-event-listings > ul')
        .first
        .click()
    }

    openCategoryPage(){
        cy.xpath(this.singlCatrgory).click()
        

    }

    getPageTitle(){
       return cy.get(this.title)
    }


}