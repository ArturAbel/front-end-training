import { SingleTodo } from "./SingleTodo";
import { Todo } from "../model";

import "../styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
