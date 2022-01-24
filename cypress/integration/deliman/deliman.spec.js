describe('Delivery manager', () => {
  it('Top', () => {
    cy.basicLogin('/')
    cy.title().should('eq', '物流分析ツール')
  })
  it('Upload', () => {
    cy.basicLogin('/upload/')
  })
  it('Csv List', () => {
    cy.basicLogin('/csvlist/')
  })
  it('Delivery Quantity List', () => {
    cy.basicLogin('/deliveryquantitylist/')
  })
})
