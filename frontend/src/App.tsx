import { useEffect, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./App.css";
import axios from "axios";

type TodoType = {
  name: string;
  status: boolean;
  id: number;
};

type TodoListType = {
  list: TodoType[];
  handleStatusChange: (todo: TodoType) => void;
  handleEditButtonClick: () => void;
  handleDeleteButtonClick: (todo: TodoType) => void;
};

const TodoList = ({
  list,
  handleStatusChange,
  handleEditButtonClick,
  handleDeleteButtonClick,
}: TodoListType) => {
  return (
    <div className="todos">
      {list.map((todo) => {
        return (
          <div className="todo">
            <button
              onClick={() => handleStatusChange(todo)}
              className="checkbox"
              style={{ backgroundColor: todo.status ? "#A879E6" : "white" }}
            ></button>
            <p>{todo.name}</p>
            <button className="icon-action">
              <AiOutlineEdit
                onClick={() => handleEditButtonClick()}
                size={20}
                color={"#64697b"}
              />
            </button>
            <button
              onClick={() => handleDeleteButtonClick(todo)}
              className="icon-action"
            >
              <AiOutlineDelete size={20} color={"#64697b"} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
function App() {
   function handleWithNewButton() {
    console.log("fasfas");
    setInputVisibility(!inputVisibility);
  }

  async function getTodos() {
    const response = await axios.get("http://localhost:3000/todos");
    setTodo(response.data);
  }
  async function createTodo() {
    await axios.post("http://localhost:3000/todos", {
      name: inputValue,
      status: false,
    });
    setInputValue("");
    getTodos();
  }
  function handleWithEditButtonCLick() {
    setInputVisibility(true);
  }

  async function deleteTodo(todo: TodoType) {
      await axios.delete(
      `http://localhost:3000/todos/${todo.id}`,
    );
    getTodos();
  }
  async function modifyStatusTodo(todo: TodoType) {
     await axios.put("http://localhost:3000/todos/", {
      id: todo.id,
      status: !todo.status,
    });
    getTodos();
  }
  async function editTodo(todo: TodoType) {
     await axios.put(`http://localhost:3000/todos/${todo.id}`, {
      id: selectTodo?.id,
      name: inputValue,
      status: todo.status,
    });
    setInputValue("");
    setInputVisibility(false);
    setSelectTodo(null);
    getTodos();
  }
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputVisibility, setInputVisibility] = useState(false);
  const [selectTodo, setSelectTodo] = useState<TodoType | null>(null);

  useEffect(() => {
    getTodos();
  }, []);

  const handleNewTask = () => {
    if (!inputVisibility) return handleWithNewButton();

    if (selectTodo) return editTodo(selectTodo);

    return createTodo();
  };

  return (
    <>
      <header className="container">
        <div className="header">
          <h1>Dont be lazzy</h1>
        </div>
        <TodoList
          list={todo}
          handleStatusChange={modifyStatusTodo}
          handleEditButtonClick={handleWithEditButtonCLick}
          handleDeleteButtonClick={deleteTodo}
        />
        <input
          value={inputValue}
          style={{ display: inputVisibility ? "block" : "none" }}
          onChange={(e) => setInputValue(e.target.value)}
          className="imputname"
          placeholder="New task"
        />
        <button className="newTaskButton" onClick={handleNewTask}>
          {inputVisibility ? "Confirm" : "New Task"}
        </button>
      </header>
    </>
  );
}

export default App;
