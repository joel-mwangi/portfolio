import { createGlobalStyle } from "styled-components";
import { useTheme } from "../context/ThemeContext";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === "dark" ? "#333" : "#fff")};
    color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
    transition: all 0.3s;
  }
`;

function StyledComponentWrapper({ children }) {
  const { theme } = useTheme();
  return <GlobalStyles theme={theme}>{children}</GlobalStyles>;
}

export default StyledComponentWrapper;
