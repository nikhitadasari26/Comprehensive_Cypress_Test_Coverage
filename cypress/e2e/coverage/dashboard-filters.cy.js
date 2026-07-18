describe('Dashboard Filters and Elements', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('should display all metric cards', () => {
    cy.get('[data-testid="dashboard-container"]').should('be.visible');
    cy.get('[data-testid="metric-card-users"]').should('be.visible');
    cy.get('[data-testid="metric-card-revenue"]').should('be.visible');
    cy.get('[data-testid="metric-card-conversion"]').should('be.visible');
  });

  it('should display charts', () => {
    cy.get('[data-testid="chart-revenue"]').should('be.visible');
    cy.get('[data-testid="chart-users"]').should('be.visible');
  });

  it('should handle date range filter change', () => {
    cy.get('[data-testid="date-range-filter"]').select('30d').should('have.value', '30d');
    cy.get('[data-testid="date-range-filter"]').select('90d').should('have.value', '90d');
  });

  it('should have working buttons', () => {
    cy.get('[data-testid="refresh-button"]').click();
    cy.get('[data-testid="export-button"]').click();
  });
});
