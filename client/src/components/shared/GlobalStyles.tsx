  
import { css, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smooting: antialiased;
    -moz-font-smooting: grayscale;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
    border: none;
  }
`;

export const centerLayout = {
  define: (align = "center") => css`
    display: flex;
    align-items: center;
    ${align !== "center"
      ? `
      justify-content: ${align};
        `
      : `
      justify-content: center;
      `}
  `,
};