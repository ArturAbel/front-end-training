import { useRef } from "react";

import "../styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

export const InputField = ({ todo, setTodo, handleAddTodo }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAddTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value as string)}
        type="input"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};
