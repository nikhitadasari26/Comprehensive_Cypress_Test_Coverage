describe('User Interactions', () => {
  it('can navigate through sidebar links', () => {
    cy.visit('/');
    
    cy.contains('Data Table').click();
    cy.url().should('include', '/data');
    cy.get('[data-testid="data-table"]').should('be.visible');

    cy.contains('Settings').click();
    cy.url().should('include', '/settings');
    cy.get('[data-testid="settings-form"]').should('be.visible');

    cy.contains('Dashboard').click();
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid="dashboard-container"]').should('be.visible');
  });
});
