/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { ADD_TODO, TOGGLE_TODO } from './actionsType';
let nextId = 0;
export const addTodo = (text) =>
({
   type: ADD_TODO,
   id: nextId++,
   text,
});
export const toggleTodo = (id) =>({
    type: TOGGLE_TODO,
    id,
});
