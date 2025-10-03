import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    message: "this is todo slice",
    todos: [],
  },

  reducers: {
    addtodo: (state, action) => {
      const data = action.payload;
      state.todos.push(data);
    },
    removeTodo: (state, action) => {},
    updateTodo: (state, action) => {},
  }
});

export default todoSlice.reducer;
export const { addtodo, removeTodo, updateTodo } = todoSlice.actions;
