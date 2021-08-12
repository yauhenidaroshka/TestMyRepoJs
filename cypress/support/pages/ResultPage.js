export class ResultPage{
    resultsNumber = "//h1[@class = 'srp-controls__count-heading']//span[contains(text(), 'shoes')]"

    getResultsNumber(resultsNumber){
        return cy.get(this.resultsNumber)

    }

}