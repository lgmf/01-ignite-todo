import { ButtonHTMLAttributes, ReactElement } from "react";
import { styled } from "../styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  endIcon?: ReactElement;
}

const StyledButton = styled("button", {
  padding: "1rem",
  backgroundColor: "$blueDark",
  color: "$gray100",
  fontSize: "$sm",
  fontWeight: 700,
  lineHeight: 1.4,
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",

  "&:hover": {
    backgroundColor: "$blue",
  },

  "&:disabled": {
    backgroundColor: "$gray200",
    color: "$gray300",
    cursor: "not-allowed",
  },
});

const EndIcon = styled("span", {
  marginLeft: "0.5rem",
  color: "$gray100",
  width: "1rem",
  height: "1rem",
  fontSize: "$md",

  "& > svg": {
    width: "100%",
    height: "100%",
  },

  variants: {
    disabled: {
      true: {
        color: "currentColor",
      },
    },
  },
});

export function Button({ endIcon, children, disabled, ...rest }: ButtonProps) {
  return (
    <StyledButton {...rest} disabled={disabled}>
      {children}
      {endIcon ? <EndIcon disabled={disabled}>{endIcon}</EndIcon> : null}
    </StyledButton>
  );
}
