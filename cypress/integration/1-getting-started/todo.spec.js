/// <reference types="cypress" />


describe('login omni', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://uol-qa.plusoftomni.com.br')
  })

  it('autenticação com sucesso', () => {
     cy.get('#login__username').type('omni')
     cy.get('#login__password').type('Jupiter#21')
    //  cy.get('.ng-binding').click()
        cy.contains('ACESSAR').click()
        // cy.contains('Workflow')
        cy.wait(5000)
        // cy.get('#btn-new-ticket').click()
        cy.get('#frame_middle').find('#btn-new-ticket').click()
        
  })

  
})
