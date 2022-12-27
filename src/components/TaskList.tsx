import { Notepad, Trash } from "./icons";
import { styled } from "../styles";
import { Task } from "../types/Task";
import { Checkbox } from "./Checkbox";

interface TaskListProps {
  tasks: Task[];
  onToggleDone: (task: Task) => void;
  onRemove: (task: Task) => void;
}

export function TaskList({ tasks, onToggleDone, onRemove }: TaskListProps) {
  const total = tasks.length;

  const doneTasks = tasks.filter((task) => task.done);
  const totalDone = doneTasks.length;

  return (
    <>
      <Header>
        <InfoCount
          css={{
            color: "$blue",
            "&::after": {
              content: `${total}`,
            },
          }}
        >
          Tarefas Criadas
        </InfoCount>

        <InfoCount
          css={{
            color: "$purple",
            "&::after": {
              content: total > 0 ? `${totalDone} de ${total}` : "0",
            },
          }}
        >
          Concluídas
        </InfoCount>
      </Header>

      {total === 0 ? (
        <EmptyState>
          <Notepad />
          <h5>Você ainda não tem tarefas cadastradas</h5>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </EmptyState>
      ) : (
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id} done={task.done}>
              <Checkbox
                checked={task.done}
                onChange={() => onToggleDone(task)}
              />

              <span>{task.title}</span>

              <button onClick={() => onRemove(task)}>
                <Trash />
              </button>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "1.5rem",
});

const InfoCount = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "$sm",
  fontWeight: 700,
  lineHeight: 1.4,

  "&::after": {
    content: "0",
    backgroundColor: "$gray400",
    padding: "0.125rem 0.5rem",
    borderRadius: "999px",
    fontSize: "$xs",
    color: "$gray100",
  },
});

const EmptyState = styled("div", {
  padding: "4rem 1.5rem",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "1px solid $gray400",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  color: "$gray300",
  lineHeight: 1.4,

  "& > h5": {
    fontSize: "$md",
    fontWeight: 700,
  },

  "& > p": {
    fontSize: "$sm",
  },

  "& > svg": {
    width: "3.5rem",
    marginBottom: "1rem",
    color: "$gray400",
  },
});

const List = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

const ListItem = styled("li", {
  display: "flex",
  gap: "0.75rem",
  color: "$gray100",
  padding: "1rem",
  backgroundColor: "$gray500",
  borderRadius: "8px",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
  border: "1px solid $gray400",

  "& > span": {
    flex: 1,
  },

  "& > button": {
    border: "none",
    backgroundColor: "transparent",
    padding: "0.375rem",
    color: "$gray300",
    fontSize: "$md",
    borderRadius: "8px",

    "&:hover": {
      backgroundColor: "$gray400",
      color: "$danger",
    },
  },

  variants: {
    done: {
      true: {
        textDecoration: "line-through",
        color: "$gray300",
        borderColor: "$gray500",
      },
    },
  },
});
