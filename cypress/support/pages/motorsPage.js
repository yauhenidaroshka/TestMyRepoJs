/// <reference types="cypress"/>

export class MotorsPage{
    motorsBanner = '.b-pageheader__text'



    getPageBannerName(){
            return cy.get(this.motorsBanner)
    
           }


}