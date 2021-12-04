import "./styles.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("https://media.geeksforgeeks.org/wp-content/uploads/20210724024414/135deg2.png")`,
        height: "500px",
        width: "500px",
        margin: "auto"
      }}
    >
      <TodoInput />
      <br />
      <TodoList />
    </div>
  );
}
