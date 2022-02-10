import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    max-width: 1840px;
    min-width: 320px;
    margin: 0 auto;
}

* {
  padding: 0;
  margin: 0;
  font-family: Gilroy, sans-serif;
  box-sizing: border-box;
}
a {
  color: inherit;
  text-decoration: none;
}

ul {
    list-style: none;
}

h1, h2, h3, h4, h5, h5, p {
    margin: 0;
}
`;

export default GlobalStyle;
