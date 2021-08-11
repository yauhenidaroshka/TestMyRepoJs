/// <reference types="cypress"/>


export class HomePage {

    signInButton = '//*[@id="gh-ug"]//a[text()="Sign in"]'
    searchButon = '//input[@class = "btn btn-prim gh-spr"]'
    siteLogo = '//h1//a[@id="gh-la"]'




    openPage(url, string){
       cy.visit(url)
    }

    searchProduct(productName, string){
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