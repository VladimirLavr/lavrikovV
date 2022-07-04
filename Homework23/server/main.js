import { v4 as uuid } from "uuid";

const todos = [];

export const getAllTodos = () => todos;

export const createTodo = (todoConfig) => {

  const createdTodo = {
    todoConfig,
    id: uuid(),
  };

  todos.push(createdTodo);
  return createdTodo;
};

export const deleteTodo = (id) => {
  let itemIndex, foundElement;

  foundElement = todos.find((todo, index) => {
    if (todo.id === id) {
      itemIndex = index;
      return true;
    }

    return false;
  });

  if (foundElement) {
    todos.splice(itemIndex, 1);
    return true;
  }

  return false;
};