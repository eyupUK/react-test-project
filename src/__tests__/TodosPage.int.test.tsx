import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodosPage from '../TodosPage';
import 'whatwg-fetch';

test('loads todos, adds a new one, and updates the list (integration flow)', async () => {
  render(<TodosPage />);

  const list = await screen.findByRole('list', { name: /todo-list/i });
  expect(within(list).getByText('Buy milk')).toBeInTheDocument();
  expect(within(list).getByText('Read a book')).toBeInTheDocument();

  const input = screen.getByPlaceholderText(/add a todo/i);
  const addButton = screen.getByRole('button', { name: /add/i });

  await userEvent.type(input, 'Learn RTL');
  await userEvent.click(addButton);

  // Wait for the loading state
  await expect(screen.findByRole('button', { name: /adding…/i })).resolves.toBeDisabled();

  const newItem = await screen.findByText('Learn RTL');
  expect(newItem).toBeInTheDocument();

  await waitFor(() => expect(input).toHaveValue(''));
});
