import "./App.css";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";

function App() {
  return (
    <>
      <div className="container text-center">
        <AppName />
        <AddToDo />
        <div className="todo-items">
          <ToDoItem />
          <ToDoItem />
        </div>
      </div>
    </>
  );
}

export default App;
