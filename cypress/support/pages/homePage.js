/// <reference types="cypress"/>


export class HomePage {

    signInButton = '//span[@id="gh-ug"]//a[contains(text(),"Sign in")]'
    searchButon = '//input[@class = "btn btn-prim gh-spr"]'
    siteLogo = '#gh-la'




    openPage(url){
       cy.visit(url)
    }

    searchProduct(productName){
        cy.get("#gh-ac").type(productName)
    }

    clickSearchButton(){
        cy.xpath(this.searchButon).click()
    }

    returnToHomePage(){
        cy.xpath(this.siteLogo).click()
    }

    openLoginModal(){
        cy.xpath(this.signInButton).click()
        
        
    }

}