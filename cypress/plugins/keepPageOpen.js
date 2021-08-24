/// <reference types="cypress"/>

export class OpenedPage{

keepPageOpen(){
Cypress.on('window:before:load', (win) => {
    Object.defineProperty(win, 'self', {
      get: () => {
        return window.top
      }
    })
  })
}
}