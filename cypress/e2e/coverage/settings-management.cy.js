describe('Settings Management', () => {
  beforeEach(() => {
    cy.visit('/settings');
  });

  it('should display the settings form', () => {
    cy.get('[data-testid="settings-form"]').should('be.visible');
  });

  it('should change select options and toggles', () => {
    cy.get('[data-testid="currency-select"]').select('EUR').should('have.value', 'EUR');
    cy.get('[data-testid="timezone-select"]').select('PST').should('have.value', 'PST');
    cy.get('[data-testid="notifications-toggle"]').uncheck({force: true}).should('not.be.checked');
    cy.get('[data-testid="theme-toggle"]').uncheck({force: true}).should('not.be.checked');
  });

  it('should save settings and show success message', () => {
    cy.get('[data-testid="currency-select"]').select('GBP');
    cy.get('[data-testid="save-settings-button"]').click();
    cy.contains('Settings saved successfully!').should('be.visible');
  });

  it('should reset settings to default', () => {
    cy.get('[data-testid="currency-select"]').select('GBP');
    cy.get('[data-testid="reset-settings-button"]').click();
    cy.get('[data-testid="currency-select"]').should('have.value', 'USD');
  });
});
