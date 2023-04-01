import React from 'react'
import { ImCancelCircle } from 'react-icons/im'
import { AiFillCheckCircle } from 'react-icons/ai'

function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        let completedClass = '';
        if (todo.completed) {
          completedClass = 'completed';
        }
        return <div key={todo.id} className={`todo-item ${completedClass}`}>
            <p>{todo.text}</p>
            <div className="icons">
              <ImCancelCircle onClick={() => props.deleteTodo(todo.id)} className="delete-icon"/>
              <AiFillCheckCircle onClick={() => props.completeTodo(todo.id)} className="complete-icon"/>
            </div>
        </div>
      })}
    </div>
  )
}

export default TodoList
