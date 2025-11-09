# RTL Integration Demo (Vite + Vitest + MSW)

A minimal example of **integration testing** with **React Testing Library** and **MSW** (Mock Service Worker). This project demonstrates how to write integration tests for React applications that include API interactions.

## Quick start

```bash
npm i               # install dependencies
npm test           # run tests in headless mode
npm run test:ui    # run tests with Vitest UI
npm run dev        # run the demo app in development mode
```

## Project Overview

This project showcases a simple Todo application with the following features:

- Loading todos from an API
- Adding new todos
- Real-time UI updates
- Loading states handling

## Project Structure

```plaintext
src/
├── api.ts              # API interaction functions
├── TodoContext.tsx     # React Context for state management
├── TodoForm.tsx        # Form component for adding new todos
├── TodoList.tsx        # Component to display todos
├── TodosPage.tsx       # Main page component
└── __tests__/         # Test files
    └── TodosPage.int.test.tsx  # Integration tests
```

## Testing Strategy

The project demonstrates several testing best practices:

1. **Integration Testing**: Tests full user flows instead of isolated components
2. **API Mocking**: Uses MSW to intercept and mock API calls
3. **User Interactions**: Simulates real user behavior using @testing-library/user-event
4. **Async Operations**: Properly handles loading states and async updates
5. **Accessibility**: Uses RTL's built-in accessibility queries

## What's included

- **Vite**: Fast and modern build tool
- **React + TypeScript**: Type-safe React development
- **Vitest**: Next-generation testing framework
- **@testing-library/react**: User-centric testing utilities
- **@testing-library/user-event**: Realistic user interaction simulation
- **jest-dom**: Custom DOM element matchers
- **MSW**: API mocking through service workers
- **Example Todo Application**:
  - Context-based state management
  - Async data fetching
  - Form handling
  - List rendering
  - Loading states

## Testing Examples

The integration test in `TodosPage.int.test.tsx` demonstrates:

- Loading initial data from a mocked API
- Simulating user input
- Submitting forms
- Verifying loading states
- Checking UI updates after async operations

## Contributing

Feel free to use this as a template for your own projects or contribute improvements!
