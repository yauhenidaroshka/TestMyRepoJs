/// <reference types="cypress"/>

export class CollectiblesPage{
    title = '.title-banner__title'


    getPageTitle(){
       return cy.get(this.title)
    }

}