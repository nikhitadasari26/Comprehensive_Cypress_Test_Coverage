# Analytics Dashboard with Cypress Test Coverage

A multi-page analytics dashboard built with React and Vite, featuring a comprehensive end-to-end testing suite using Cypress with code coverage instrumentation.

## Features

- **Dashboard**: Overview metrics and charts.
- **Data Table**: Paginated, sortable, and searchable mock data.
- **Settings**: Mock configuration options.
- **E2E Testing**: Complete Cypress test suite with Istanbul code coverage.

## Setup and Running

1. **Clone the repository.**
2. **Copy `.env.example` to `.env`:**
   ```bash
   cp .env.example .env
   ```
3. **Run with Docker Compose:**
   ```bash
   docker-compose up -d --build
   ```
   The app is exposed on host port `3006` by default. Set `HOST_PORT` if you need a different port.
4. **Run Tests within Docker:**
   ```bash
   docker-compose exec cypress-coverage-tests npx cypress run
   ```
5. **Generate Coverage Reports:**
   ```bash
   docker-compose exec cypress-coverage-tests npx nyc report --reporter=json-summary --reporter=html --reporter=clover
   ```
6. **Copy Reports to Host:**
   ```bash
   docker-compose cp cypress-coverage-tests:/app/coverage ./coverage
   docker-compose cp cypress-coverage-tests:/app/cypress/reports ./cypress/reports
   ```

## Local Development

If you prefer to run locally without Docker:
```bash
npm install
VITE_COVERAGE=true npm run dev
# In another terminal:
npm run test:e2e
```
