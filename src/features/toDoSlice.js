import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, actions) => {
      state.todoList.push(actions.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = toDoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default toDoSlice.reducer;
