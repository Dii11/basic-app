import { useTodo } from "../context/usetodo";
import { SiStarship } from "react-icons/si";
import { TodoItem } from "./TodoItem";
const TodoList = () => {
  const { todos } = useTodo();
  if (!todos.length) {
    return (
      <div className="max-w-lg px-5 m-auto">
        <h1 className="flex flex-col items-center px-5 py-10 text-xl text-center font- bold gap -5 rounded-xl bg-zinc-100">
          <SiStarship className="text-5xl" />
          aucune tâche à faire
        </h1>
      </div>
    );
  } else {
    return (
      <ul className="grid max-w-lg gap-2 px-5 m-auto">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
};

export default TodoList;
