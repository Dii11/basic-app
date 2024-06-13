import React, { createContext, useState } from "react";
import { nanoid } from "nanoid";
interface TodoProps {
  todos: todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  updateTodoStatus: (id: string) => void;
}
export interface todo {
  id: string;
  text: string;
  status: "undone" | "completed";
}
export const TodoContext = createContext<TodoProps | undefined>(undefined);

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<todo[]>([]);
  //add todo
  const addTodo = (text: string) => {
    const newTodo: todo = {
      id: nanoid(),
      text,
      status: "undone",
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const editTodo = (id: string, text: string) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        }
        return todo;
      });
    });
  };
  const updateTodoStatus = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === "undone" ? "completed" : "undone",
          }
        }
        return todo

      })
    );
  };

  const value: TodoProps = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    updateTodoStatus,
  };
  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};
