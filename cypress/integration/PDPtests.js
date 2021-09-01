/// <reference types="cypress"/>

import {ProductDetailsPage} from "../support/pages/productDetailsPage"
import { HomePage } from "../support/pages/homePage"

const productDetailsPage = new ProductDetailsPage()
const homePage = new HomePage()

openPDP("open PDP page ", () => {
    cy.visit(Cypress.env("pdpURL"))
})

describe("product details tests", function(){
    it("should validate PDP content", function(){
        productDetailsPage.getPDPProductName().should("have.text", "Running Casual Shoes Men's Outdoor Athletic Jogging Sports Tennis Sneakers Gym")
    })
})