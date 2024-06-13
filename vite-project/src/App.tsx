import {Toaster} from 'react-hot-toast'
import { AddTodo, TodoList } from './component'
// Exemple d'utilisation dans un autre fichier

const App=()=>{
 return( <div >
    <Toaster position='top-right' />
    <AddTodo/>
    <TodoList/> 
  </div>)

}
export default App
