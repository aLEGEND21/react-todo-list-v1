import React from 'react'

function Input(props) {
  const [input, setInput] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTodo(input);
    setInput('');
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} placeholder="Enter an item to complete"/>
      <button>Add</button>
    </form>
  )
}

export default Input
