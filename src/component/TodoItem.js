import { Checkbox } from '@material-ui/core';
import React from 'react';
import './TodoItem.css';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/toDoSlice';
function TodoItem(props) {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(props.id));
  };
  return (
    <div className='todoItem'>
      <Checkbox
        checked={props.done}
        color='primary'
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <p className={props.done && 'todoItem--done'}>{props.name}</p>
    </div>
  );
}

export default TodoItem;
