import { InputHTMLAttributes } from "react";
import { Check } from "./icons";
import { styled } from "../styles";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ checked, ...rest }: CheckboxProps) {
  return (
    <Container>
      <input {...rest} type="checkbox" checked={checked} />
      <Checkmark checked={checked}>{checked ? <Check /> : null}</Checkmark>
    </Container>
  );
}

const Container = styled("label", {
  width: "2rem",
  height: "2rem",
  padding: "0.25rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  borderRadius: "999px",

  "&:focus": {
    backgroundColor: "$blueDark",
  },

  "& > input": {
    position: "absolute",
    cursor: "pointer",
    opacity: 0,
    height: 0,
    width: 0,
  },
});

const Checkmark = styled("span", {
  width: "100%",
  height: "100%",
  borderRadius: "999px",
  border: "3px solid $blue",
  cursor: "pointer",
  color: "$gray100",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    backgroundColor: "$blueDark",
  },

  "&:focus": {
    backgroundColor: "$blueDark",
  },

  variants: {
    checked: {
      true: {
        backgroundColor: "$purpleDark",
        borderColor: "transparent",

        "&:hover": {
          backgroundColor: "$purple",
        },
      },
    },
  },
});
