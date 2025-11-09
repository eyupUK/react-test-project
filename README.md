# RTL Integration Demo (Vite + Vitest + MSW)

A minimal example of **integration testing** with **React Testing Library** and **MSW**.

## Quick start

```bash
npm i
npm test            # headless
npm run test:ui     # Vitest UI
npm run dev         # run the demo app
```

## What’s included
- Vite + React + TypeScript
- Vitest + @testing-library/react + user-event + jest-dom
- MSW (node) to intercept `fetch` in tests
- A small Todos flow (Context + fetch + form + list) and an integration test