//Actions
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

//Action Creators
let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: { id: nextId++, text },
});
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

//inicialState
const inicialState = [];

//Reducers
export default function todos(state = inicialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
