import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function TodosPage() {
  return (
    <TodoProvider>
      <h1>Todos</h1>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
}