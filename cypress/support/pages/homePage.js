/// <reference types="cypress"/>

export class HomePage {

    signInButton = '//span[@id="gh-ug"]//a[contains(text(),"Sign in")]'
    searchButon = '//input[@class = "btn btn-prim gh-spr"]'
    siteLogo = '#gh-la'
    savedButton = '.saved > a'
    motorsButton = "//li[@class = 'hl-cat-nav__js-tab' and  @data-currenttabindex='0']"
    shopByCategoryButton = '#gh-shop-a'
    cartIcon = '//div//a[@class ="gh-eb-li-a gh-rvi-menu" and @aria-label="Your shopping cart"]'
    categoris = "//h3//a//i[@class ='chevron-right']"
    listOfCategories ="//h3[@class='gh-sbc-parent']//a"
    

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

    selectCategory (){
        cy.xpath(this.categoris).parents('.gh-sbc-parent')
        .find('.chevron-right')
        .first()
        .click()
    }
    getCategoriesList(){
        cy.xpath(this.listOfCategories).then( items => {
            expect(items[0]).to.contain.text('Collectibles & art')
            expect(items[1]).to.contain.text('Electronics')
            expect(items[2]).to.contain.text('Entertainment memorabilia')
            expect(items[3]).to.contain.text('Fashion')
            expect(items[4]).to.contain.text('Home & garden')
            expect(items[5]).to.contain.text('Motors')
            expect(items[6]).to.contain.text('Sporting goods')
            expect(items[7]).to.contain.text('Toys & hobbies')
            expect(items[8]).to.contain.text('Other categories')
    })

}


}
