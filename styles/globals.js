import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  font-family: Gilroy, sans-serif;
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
  transition: opacity 1s;
}

a:hover {
    opacity: 0.8;
  }

ul {
    list-style: none;
}

h1, h2, h3, h4, h5, h5, p {
    margin: 0;
}

button {
    padding: 0;
    border: none;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
