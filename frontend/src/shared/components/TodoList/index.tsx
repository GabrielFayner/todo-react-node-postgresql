import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {
  IconButton,
  StatusButton,
  TodoName,
  TodoRow,
  Todos,
} from "./styled";

export type TodoType = {
  name: string;
  status: boolean;
  id: string;
};

type TodoListType = {
  list: TodoType[];
  handleStatusChange: (todo: TodoType) => Promise<void>;
  handleEditButtonClick: (todo: TodoType) => void;
  handleDeleteButtonClick: (todo: TodoType) => Promise<void>;
};

export const TodoList = ({
  list,
  handleStatusChange,
  handleEditButtonClick,
  handleDeleteButtonClick,
}: TodoListType) => {
  return (
    <Todos>
      {list.map((todo) => {
        return (
          <TodoRow key={todo.id}>
            <StatusButton
              onClick={() => handleStatusChange(todo)}
              style={{ backgroundColor: todo.status ? "#A879E6" : "white" }}
            />
            <TodoName>{todo.name}</TodoName>
            <IconButton onClick={() => handleEditButtonClick(todo)}>
              <AiOutlineEdit size={20} />
            </IconButton>
            <IconButton danger onClick={() => handleDeleteButtonClick(todo)}>
              <AiOutlineDelete size={20} />
            </IconButton>
          </TodoRow>
        );
      })}
    </Todos>
  );
};
