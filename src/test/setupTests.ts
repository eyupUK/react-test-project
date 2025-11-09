import '@testing-library/jest-dom';
import 'whatwg-fetch';

import { setupServer } from 'msw/node';
import { handlers } from './testServerHandlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

import { cleanup } from '@testing-library/react';
afterEach(() => cleanup());