describe('Edge Cases', () => {
  beforeEach(() => {
    cy.visit('/data');
  });

  it('should disable prev button on first page', () => {
    cy.get('[data-testid="prev-page-button"]').should('be.disabled');
  });

  it('should disable next button on last page', () => {
    cy.get('[data-testid="page-size-select"]').select('50');
    // For 100 items and 50 per page, there are 2 pages. Go to next page.
    cy.get('[data-testid="next-page-button"]').click();
    cy.get('[data-testid="next-page-button"]').should('be.disabled');
  });

  it('should show no data message for empty search', () => {
    cy.get('[data-testid="search-input"]').type('This string does not exist 12345');
    cy.get('td').should('contain', 'No data found');
    cy.get('[data-testid="prev-page-button"]').should('be.disabled');
    cy.get('[data-testid="next-page-button"]').should('be.disabled');
  });
});
