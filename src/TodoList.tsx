import React from 'react';
import { useTodos } from './TodoContext';

export default function TodoList() {
  const { todos } = useTodos();
  if (todos.length === 0) return <p>No todos yet</p>;
  return (
    <ul aria-label="todo-list">
      {todos.map(t => (
        <li key={t.id}>{t.title}</li>
      ))}
    </ul>
  );
}