import React, { createContext, useState } from "react";
import {nanoid} from 'nanoid'
interface TodoProps {
  todos: todo[];
  addTodo: (text: string) => void;
}
export interface todo{
  id:string,
  text:string,
  status:'undone'|'completed'
}
export const TodoContext = createContext<TodoProps | undefined>(undefined);

export const TodoProvider = (props: { children: React.ReactNode }) => {
    const [todos,setTodos]=useState<todo[]>([])
    const addTodo=(text:string)=>{
const newTodo:todo={
  id:nanoid(),
  text,
  status :'undone'
}
setTodos([...todos,newTodo])
    }

    const value:TodoProps={todos,addTodo}
  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>
  );
};

