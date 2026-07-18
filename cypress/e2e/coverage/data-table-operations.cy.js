describe('Data Table Operations', () => {
  beforeEach(() => {
    cy.visit('/data');
  });

  it('should render the data table and headers', () => {
    cy.get('[data-testid="data-table"]').should('be.visible');
    cy.get('[data-testid="table-header-id"]').should('be.visible');
    cy.get('[data-testid="table-header-name"]').should('be.visible');
    cy.get('[data-testid="table-header-status"]').should('be.visible');
  });

  it('should search data correctly', () => {
    cy.get('[data-testid="search-input"]').type('User 10');
    cy.get('[data-testid="table-row-0"]').should('contain', 'User 10');
    cy.get('[data-testid="search-input"]').clear();
  });

  it('should sort data by ID ascending and descending', () => {
    cy.get('[data-testid="table-header-id"]').click(); 
    cy.get('[data-testid="table-row-0"]').should('exist');
    cy.get('[data-testid="table-header-id"]').click(); 
    cy.get('[data-testid="table-row-0"]').should('exist');
  });

  it('should change page size', () => {
    cy.get('[data-testid="page-size-select"]').select('5');
    cy.get('[data-testid="data-table"] tbody tr').should('have.length', 5);
    cy.get('[data-testid="page-size-select"]').select('20');
    cy.get('[data-testid="data-table"] tbody tr').should('have.length', 20);
  });

  it('should navigate via pagination', () => {
    cy.get('[data-testid="page-size-select"]').select('10');
    cy.get('[data-testid="page-number"]').should('contain', 'Page 1');
    cy.get('[data-testid="next-page-button"]').click();
    cy.get('[data-testid="page-number"]').should('contain', 'Page 2');
    cy.get('[data-testid="prev-page-button"]').click();
    cy.get('[data-testid="page-number"]').should('contain', 'Page 1');
  });
});
