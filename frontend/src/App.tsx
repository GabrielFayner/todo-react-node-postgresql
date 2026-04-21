import { useEffect, useState } from "react";
import { TodoList, type TodoType } from "@/shared/components/TodoList";
import { TodoService } from "@/shared/services/todo";
import {
  Container,
  Header,
  InputLabel,
  InputWrapper,
  TaskButton,
  TaskInput,
  Title,
} from "@/styled";

const App = () => {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [inputVisibility, setInputVisibility] = useState(false);
  const [selectTodo, setSelectTodo] = useState<TodoType | null>(null);

  const handleWithNewButton = () => setInputVisibility(!inputVisibility);

  const handleEmptyInput = () => {
    setInputValue("");
    setInputVisibility(false);
    setSelectTodo(null);
  }

  const loadTodos = async () => {
    try {
      const todos = await TodoService.getTodos();
      setTodo(todos);
    } catch (error) {
      console.error(error);
    }
  }

  const createTodo = async () => {
    if (!inputValue.trim()) return;
    await TodoService.createTodo(inputValue);
    setInputValue("");
    await loadTodos();
  }

  const deleteTodo = async (todo: TodoType) => {
    await TodoService.deleteTodo(todo.id);
    await loadTodos();
    handleEmptyInput()
  }

  const editTodo = async (todo: TodoType) => {
    if (!inputValue.trim()) return;
    await TodoService.updateTodo(todo.id, inputValue, todo.status);
    await loadTodos();
    handleEmptyInput()
  }

  const modifyStatusTodo = async (todo: TodoType) => {
    await TodoService.updateTodo(todo.id, todo.name, !todo.status);
    await loadTodos();
  }

  const handleWithEditButtonCLick = (todo: TodoType) => {
    setSelectTodo(todo);
    setInputValue(todo.name);
    setInputVisibility(true);
  }

  useEffect(() => {
    const fetchTodos = async () => {
      await loadTodos();
    }
    fetchTodos();
  }, []);

  const handleNewTask = () => {
    if (!inputVisibility) return handleWithNewButton();
    if (selectTodo) return editTodo(selectTodo);
    return createTodo();
  };

  return (
    <Container>
      <Header>
        <Title>TODO LIST</Title>
      </Header>
      <TodoList
        list={todo}
        handleStatusChange={modifyStatusTodo}
        handleEditButtonClick={handleWithEditButtonCLick}
        handleDeleteButtonClick={deleteTodo}
      />
      {inputVisibility && (
        <InputWrapper>
          <InputLabel htmlFor="new-task-input">
            {selectTodo ? "Edit task" : "New task"}
          </InputLabel>
          <TaskInput
            id="new-task-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={
              selectTodo
                ? "Rename your task..."
                : "What needs to be done?"
            }
          />
        </InputWrapper>
      )}
      <TaskButton onClick={handleNewTask}>
        {inputVisibility ? "Confirm" : "New Task"}
      </TaskButton>
    </Container>
  );
}

export default App;
