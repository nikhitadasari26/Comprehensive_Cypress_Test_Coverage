describe('Edge Cases', () => {
  it('handles empty search results in data table', () => {
    cy.visit('/data');
    cy.get('[data-testid="search-input"]').type('ThisWillMatchNothing12345!@#');
    cy.get('tbody').find('tr').should('have.length', 1);
    cy.get('td').should('contain', 'No data found');
  });

  it('handles navigation to non-existent route', () => {
    cy.visit('/non-existent-route');
    cy.url().should('include', '/dashboard');
  });
});
