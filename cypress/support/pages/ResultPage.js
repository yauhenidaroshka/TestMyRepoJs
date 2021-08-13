export class ResultPage{
    resultsNumber = '.srp-controls__count-heading'

    getResultsNumber(){
        return cy.get(this.resultsNumber)

    }

}