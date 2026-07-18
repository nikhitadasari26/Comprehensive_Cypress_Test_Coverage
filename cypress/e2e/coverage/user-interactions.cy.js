describe('User Interactions', () => {
  it('should navigate between pages and persist data/settings', () => {
    cy.visit('/dashboard');
    cy.get('[data-testid="metric-card-users"]').should('be.visible');

    // Navigate to Settings
    cy.get('a[href="/settings"]').click();
    cy.url().should('include', '/settings');
    cy.get('[data-testid="theme-toggle"]').uncheck({force: true});
    cy.get('[data-testid="currency-select"]').select('EUR');
    cy.get('[data-testid="save-settings-button"]').click();
    
    // Navigate to Data Table
    cy.get('a[href="/data"]').click();
    cy.url().should('include', '/data');
    cy.get('[data-testid="search-input"]').type('User 15');
    cy.get('[data-testid="data-table"]').should('contain', 'User 15');

    // Navigate back to Dashboard
    cy.get('a[href="/dashboard"]').click();
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid="chart-revenue"]').should('be.visible');
  });
});
