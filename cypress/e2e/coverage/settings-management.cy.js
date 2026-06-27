describe('Settings Management', () => {
  beforeEach(() => {
    cy.visit('/settings');
  });

  it('renders settings elements', () => {
    cy.get('[data-testid="settings-form"]').should('exist');
    cy.get('[data-testid="currency-select"]').should('exist');
    cy.get('[data-testid="timezone-select"]').should('exist');
    cy.get('[data-testid="notifications-toggle"]').should('exist');
    cy.get('[data-testid="theme-toggle"]').should('exist');
    cy.get('[data-testid="save-settings-button"]').should('exist');
    cy.get('[data-testid="reset-settings-button"]').should('exist');
  });

  it('can modify and save settings', () => {
    cy.get('[data-testid="currency-select"]').select('EUR');
    cy.get('[data-testid="timezone-select"]').select('CET');
    cy.get('[data-testid="notifications-toggle"]').click({ force: true });
    cy.get('[data-testid="theme-toggle"]').click({ force: true });
    
    cy.get('[data-testid="save-settings-button"]').click();
  });

  it('can reset settings', () => {
    cy.get('[data-testid="currency-select"]').select('EUR');
    cy.get('[data-testid="reset-settings-button"]').click();
  });
});
