import { InputHTMLAttributes } from "react";
import { styled } from "../styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = styled("input", {
  width: "100%",
  backgroundColor: "$gray500",
  border: "1px solid $gray700",
  borderRadius: "8px",
  padding: "1rem",
  fontSize: "$md",
  lineHeight: 1.4,
  color: "$gray100",
  outline: "none",

  "&:focus": {
    borderColor: "$purpleDark",
  },
});

export function TextField(props: TextFieldProps) {
  return <Input {...props} />;
}
