/// <reference types="cypress"/>

export class HomePage {

    signInButton = '//span[@id="gh-ug"]//a[contains(text(),"Sign in")]'
    searchButon = '//input[@class = "btn btn-prim gh-spr"]'
    siteLogo = '#gh-la'
    savedButton = '.saved > a'
    motorsButton = "//li[@class = 'hl-cat-nav__js-tab' and  @data-currenttabindex='0']"
    shopByCategoryButton = '#gh-shop-a'
    cartIcon = '//div//a[@class ="gh-eb-li-a gh-rvi-menu" and @aria-label="Your shopping cart"]'
    

    openPage(){
        cy.visit(Cypress.env("url"))
    }


    searchProduct(productName){
        cy.get("#gh-ac").type(productName)
    }

    clickSearchButton(){
        cy.get(this.searchButon).click()
    }

    returnToHomePage(){
        cy.get(this.siteLogo).click()
    }

    openLoginModal(){
        cy.xpath(this.signInButton).click()   
        
    }
    openSavedPage(){
        cy.get(this.savedButton).click()
    }

    openMotorsPage(){
        cy.xpath(this.motorsButton).click()
    }
   
    openCategoriesList(){
        cy.get(this.shopByCategoryButton).click()
    }

    openCartPage(){
        cy.xpath(this.cartIcon).click()
    }

}
