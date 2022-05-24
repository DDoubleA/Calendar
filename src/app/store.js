import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todos from './todos.js'

export const rootReducer = combineReducers({
  reducer: {
    todos: todos
  }
});
