import React from 'react'
import { ListItem } from '@material-ui/core'


// export interface Todo{
//     text: string,
//     complete: boolean
// }
interface Props {
    todo: Todo,
    toggleTodo: ToggleTodo,
}


export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <ListItem>
        <label 
            style={{textDecoration: todo.complete ? 'line-through' : undefined}} 
         >
             {todo.text} 
             <input type="checkbox"
                    checked={todo.complete}
                    onClick={() => {toggleTodo(todo);}}
             /> 
            
         </label>
    <ListItem/>

    )
}