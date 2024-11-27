import React, { useState } from "react"; // Import React and useState
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${({ theme }) => (theme === "dark" ? "#333" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "#333")};
`;

const Links = styled.div`
  a {
    margin: 0 10px;
    color: ${({ theme }) => (theme === "dark" ? "white" : "#333")};
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Navbar theme={theme}>
      <h1>Joel Mwangi</h1>
      <Links theme={theme}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </Links>
    </Navbar>
  );
}

export default Header;
