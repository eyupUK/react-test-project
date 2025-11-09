import { rest } from 'msw';

export const handlers = [
  rest.get('/api/todos', (_req, res, ctx) =>
    res(ctx.json([{ id: 1, title: 'Buy milk' }, { id: 2, title: 'Read a book' }]))
  ),
  rest.post('/api/todos', async (req, res, ctx) => {
    const { title } = await req.json();
    return res(ctx.json({ id: 3, title }));
  })
];