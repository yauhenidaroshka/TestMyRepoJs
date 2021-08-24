export class ResultPage{
    resultsNumber = '.srp-controls__count-heading > :nth-child(2)'
    firstPlate = "//h3[@class ='s-item__title']"
    

    getResultsNumber(){
        return cy.get(this.resultsNumber)

    }

    selectFirstProductTile(){
        cy.xpath(this.firstPlate).children()
        .first()
        .click()
       

    }

}