import classNames from "classnames";
import { todo } from "../context/TodoContext";
import {motion} from 'framer-motion'
export const TodoItem =(props:{todo:todo})=>{
    const {todo }=props
    return(
        <motion.li
        layout className={classNames('p-5 rounded-xl bg-zinc-100',
        todo.status==='completed'&&'bg-opacity-50 text-zinc-500')}>

            <motion.span layout
            style={{
                textDecoration:todo.status==='completed'? 'line-through':'none'
            }}>
                {todo.text}
            </motion.span>
        </motion.li>
    )

}