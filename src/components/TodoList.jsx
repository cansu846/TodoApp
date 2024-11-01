import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
  return (
    <div style={{width:"100%"}}>
        {
            props.todos && props.todos.map((todo)=>(
                <Todo key={todo.id} todo={todo} removeTodo={props.removeTodo} onUpdateTodo={props.onUpdateTodo}/>
            ))
        }
    
    </div>
  )
}
