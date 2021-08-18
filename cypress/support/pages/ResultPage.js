export class ResultPage{
    resultsNumber = '.srp-controls__count-heading > :nth-child(2)'
    

    getResultsNumber(){
        return cy.get(this.resultsNumber)

    }

}