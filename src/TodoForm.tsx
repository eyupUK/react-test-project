import React, { useState } from 'react';
import { useTodos } from './TodoContext';

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const { addTodo, adding } = useTodos();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    await addTodo(title.trim());
    setTitle('');
  }

  return (
    <form onSubmit={onSubmit} aria-label="todo-form">
      <input
        placeholder="Add a todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit" disabled={adding}>
        {adding ? 'Adding…' : 'Add'}
      </button>
    </form>
  );
}