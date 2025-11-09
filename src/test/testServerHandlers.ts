import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/todos', () => {
    return HttpResponse.json([
      { id: 1, title: 'Buy milk' },
      { id: 2, title: 'Read a book' }
    ]);
  }),
  http.post('/api/todos', async ({ request }) => {
    const { title } = await request.json();
    await new Promise(resolve => setTimeout(resolve, 100)); // Add a small delay
    return HttpResponse.json({ id: 3, title });
  })
];