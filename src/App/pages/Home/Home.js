import React, { useState } from "react";
import { Container, List } from "@mui/material";
import Form from "../../components/Form/Form";
import TodoItem from "../../components/TodoItem/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id, editedText) => {
    const newTodos = [...todos];

    for (let indice in newTodos) {
      if (newTodos[indice].id === id) {
        newTodos[indice].text = editedText;
      }
    }
    setTodos(newTodos);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo, key) => (
          <div key={key} style={{ marginTop: "1em" }}>
            <TodoItem todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}
