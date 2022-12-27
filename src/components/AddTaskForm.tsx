import { FormEvent, useState } from "react";
import { CSS } from "@stitches/react";

import { styled } from "../styles";
import { Task } from "../types/Task";

import { Button } from "./Button";
import { PlusCircle } from "./icons";
import { TextField } from "./TextField";

interface AddTaskFormProps {
  onSubmit: (task: Task) => void;
  css?: CSS;
}

const Form = styled("form", {
  display: "flex",
  gap: "0.5rem",
});

export function AddTaskForm({ css, onSubmit }: AddTaskFormProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    if (!title) {
      return;
    }

    const task = new Task(title);
    event.preventDefault();
    setTitle("");
    onSubmit(task);
  }

  return (
    <Form css={css} onSubmit={handleSubmit}>
      <TextField
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Button disabled={!title} endIcon={<PlusCircle />}>
        Criar
      </Button>
    </Form>
  );
}
