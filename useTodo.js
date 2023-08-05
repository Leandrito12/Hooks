import { useReducer, useEffect } from "react";
import { todoReducer } from "../components/08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "Remove Todo",
      payload: id,
    });
  };

  const onToggleTodo = (id) => {
    console.log(id);
    dispatch({
      type: "Toggle Todo",
      payload: id,
    });
  };

  const todoCount = todos.length;
  const pendingTodoCOunt = todos.filter((todo) => !todo.done).length;
  return {
    todos,
    addNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    todoCount,
    pendingTodoCOunt,
  };
};
