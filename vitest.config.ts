import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setupTests.ts'],
    globals: true,
    css: true,
    coverage: { reporter: ['text', 'lcov'] }
  }
});

// declare module '*.css' {
//     const content: { [className: string]: string };
//     export default content;
// }