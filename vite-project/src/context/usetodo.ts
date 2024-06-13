import { useContext } from "react"
import { TodoContext } from "./TodoContext"

export const useTodo=()=>{
    const context=useContext(TodoContext)
    if(!context){
        throw new Error('usetodo must be used within a tooprovider')
    }
    return context
}