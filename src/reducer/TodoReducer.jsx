import React, { useReducer } from "react";

const countIf = (todoData, randomId) => {
  return todoData.some(todo => todo.id === randomId);
};

const randomIdGenerator = todoData => {
  const randomId = Math.floor(Math.random() * 9999) + 1;

  if (countIf(todoData, randomId)) return randomIdGenerator();

  return randomId;
};

const TodoReducer = (todoData, { type, payload }) => {
  switch (type) {
    case "INIT_TODO":
      return payload;

    case "ADD_TODO": {
      const todos = [...todoData];

      todos.push({
        title: payload,
        id: randomIdGenerator(todoData),
        status: "todo"
      });

      return todos;
    }

    case "CHANGE_TODO": {
      const beforeStatus = payload.status;
      const afterStatus = beforeStatus === "todo" ? "done" : "todo";

      let todos = [...todoData];
      let target = todos.filter(todo => todo.id === payload.id);
      target[0].status = afterStatus;

      return todos;
    }

    case "DELETE_TODO": {
      const deletedId = payload.id;
      const todos = [...todoData];
      const filteredTodos = todos.filter(todo => todo.id !== Number(deletedId));

      return filteredTodos;
    }
  }
};

export default TodoReducer;
