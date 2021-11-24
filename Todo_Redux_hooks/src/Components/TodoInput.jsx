import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../Redux/action";

const TodoInput = () => {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
      id: uuid()
    };
    const addTodoAction = addTodo(payload);
    dispatch(addTodoAction);
  };

  return (
    <div>
      <h3>Add To Do</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add Something..."
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default TodoInput;
