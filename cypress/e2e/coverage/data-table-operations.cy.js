describe('Data Table Operations', () => {
  beforeEach(() => {
    cy.visit('/data');
  });

  it('renders data table elements', () => {
    cy.get('[data-testid="search-input"]').should('exist');
    cy.get('[data-testid="page-size-select"]').should('exist');
    cy.get('[data-testid="data-table"]').should('exist');
    cy.get('[data-testid="table-header-id"]').should('exist');
    cy.get('[data-testid="table-header-name"]').should('exist');
    cy.get('[data-testid="table-header-email"]').should('exist');
    cy.get('[data-testid="pagination-controls"]').should('exist');
  });

  it('can search data', () => {
    cy.get('[data-testid="search-input"]').type('a');
    cy.get('tbody').find('tr').should('have.length.greaterThan', 0);
  });

  it('can change page size', () => {
    cy.get('[data-testid="page-size-select"]').select('20');
    cy.get('[data-testid="page-size-select"]').should('have.value', '20');
  });

  it('can sort columns', () => {
    cy.get('[data-testid="table-header-name"]').click();
    cy.get('[data-testid="table-header-name"]').click();
  });

  it('can navigate pages', () => {
    cy.get('[data-testid="next-page-button"]').click();
    cy.get('[data-testid="page-number"]').should('contain', '2');
    cy.get('[data-testid="prev-page-button"]').click();
    cy.get('[data-testid="page-number"]').should('contain', '1');
  });
});
