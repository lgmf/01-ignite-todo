import Logo from "../assets/logo.svg";
import { styled } from "../styles";

const StyledHeader = styled("header", {
  height: "200px",
  backgroundColor: "$gray700",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& > svg": {
    width: "7.875rem",
    height: "3rem",
  },
});

export function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}
