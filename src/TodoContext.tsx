import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchTodos, createTodo, type Todo } from './api';

type Ctx = {
  todos: Todo[];
  adding: boolean;
  addTodo: (title: string) => Promise<void>;
};

const TodoCtx = createContext<Ctx | null>(null);

export function useTodos() {
  const ctx = useContext(TodoCtx);
  if (!ctx) throw new Error('useTodos must be inside <TodoProvider>');
  return ctx;
}

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  async function addTodo(title: string) {
    setAdding(true);
    const newTodo = await createTodo(title);
    setTodos(prev => [...prev, newTodo]);
    setAdding(false);
  }

  return (
    <TodoCtx.Provider value={{ todos, adding, addTodo }}>
      {children}
    </TodoCtx.Provider>
  );
}