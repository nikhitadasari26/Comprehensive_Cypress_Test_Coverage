describe('Dashboard Filters', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('renders dashboard container and all elements', () => {
    cy.get('[data-testid="dashboard-container"]').should('be.visible');
    cy.get('[data-testid="date-range-filter"]').should('exist');
    cy.get('[data-testid="refresh-button"]').should('exist');
    cy.get('[data-testid="export-button"]').should('exist');
    cy.get('[data-testid="metric-card-users"]').should('exist');
    cy.get('[data-testid="metric-card-revenue"]').should('exist');
    cy.get('[data-testid="metric-card-conversion"]').should('exist');
    cy.get('[data-testid="chart-revenue"]').should('exist');
    cy.get('[data-testid="chart-users"]').should('exist');
  });

  it('can select date range filter', () => {
    cy.get('[data-testid="date-range-filter"]').select('7d');
    cy.get('[data-testid="date-range-filter"]').should('have.value', '7d');
  });

  it('can click refresh and export buttons', () => {
    cy.get('[data-testid="refresh-button"]').click();
    cy.get('[data-testid="export-button"]').click();
  });
});
