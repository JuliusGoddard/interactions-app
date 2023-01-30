/* eslint-disable no-undef */
describe('Interactions app', function() {
  it('App can be opened and both header and footer are displaying', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Web For Professionals')
    cy.contains('Copyright Substantive Research 2023')
  })

  it('Raw data and graph are visible when show data button is clicked', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Show Data').click()
    cy.contains('Raw Data')
    cy.get('#canvasjs-react-chart-container-1').should('exist')

  })
})