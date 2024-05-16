import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 1.5rem;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`;

export default GlobalStyles;
