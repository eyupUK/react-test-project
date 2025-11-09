import { http, HttpResponse } from 'msw';

interface TodoRequest {
  title: string;
}

export const handlers = [
  http.get('/api/todos', () => {
    return HttpResponse.json([
      { id: 1, title: 'Buy milk' },
      { id: 2, title: 'Read a book' }
    ]);
  }),
  http.post('/api/todos', async ({ request }) => {
    const { title } = (await request.json()) as TodoRequest;
    await new Promise(resolve => setTimeout(resolve, 100)); // Add a small delay
    return HttpResponse.json({ id: 3, title });
  })
];