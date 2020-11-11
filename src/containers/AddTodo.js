// import React from 'react'
import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { addTodo } from '../actions';
import { addTodo } from '../features/todos/todosSlice';

// const AddTodo = ({ dispatch }) => {
//   let input;

const mapDispatch = { addTodo };

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const onChange = (e) => setTodoText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!input.value.trim()) {
    if (!todoText.trim()) {
      return;
    }
    // dispatch(addTodo(input.value));
    // input.value = '';
    addTodo(todoText);
    setTodoText('');
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* <input ref={(node) => (input = node)} /> */}
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

// export default connect()(AddTodo);
export default connect(null, mapDispatch)(AddTodo);
