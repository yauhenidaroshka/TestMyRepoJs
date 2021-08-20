/// <reference types="cypress"/>

export class CartPage {
pageHeader = '//h1'
startShopButton = '.start-shop'
signInButton = '.sign-in'
copyText = '.font-title-3 > :nth-child(1) > :nth-child(1) > span'
subCopyText = "//div[@class = 'sub-messages']//span//span//span"


getPageHeader(){
    return cy.xpath(this.pageHeader)
}

clickContinueShoppingButton(){
    cy.get(this.startShopButton).click()
}

clickSignInButton(){
    cy.get(this.signInButton).click
}

hasCopyText(){
    return cy.get(this.copyText)
}

hasSubCopytext(){
   return cy.xpath(this.subCopyText)

}

    

}