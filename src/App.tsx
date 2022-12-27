import { Header, AddTaskForm, TaskList } from "./components";
import { useStoredState } from "./hooks/useStoredState";
import { styled } from "./styles";
import { Task } from "./types/Task";

export function App() {
  const [tasks, setTasks] = useStoredState<Task[]>("ignite-todo.tasks", []);

  function addTask(task: Task) {
    setTasks((prev) => [...prev, task]);
  }

  function toggleDone(task: Task) {
    setTasks((prev) =>
      prev.map((it) => {
        if (it.id === task.id) {
          return { ...it, done: !task.done };
        }

        return it;
      })
    );
  }

  function removeTask(task: Task) {
    setTasks((prev) => prev.filter((it) => it.id !== task.id));
  }

  return (
    <Container>
      <Header />
      <Main>
        <AddTaskForm css={{ marginBottom: "4rem" }} onSubmit={addTask} />

        <TaskList
          tasks={tasks}
          onToggleDone={toggleDone}
          onRemove={removeTask}
        />
      </Main>
    </Container>
  );
}

const Container = styled("div", {
  backgroundColor: "$gray600",
  minHeight: "100vh",
});

const Main = styled("main", {
  maxWidth: "46rem",
  margin: "0 auto",
  transform: "translateY(-27px)",
});
