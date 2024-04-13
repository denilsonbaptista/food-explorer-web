import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    color: ${({ theme }) => theme.colors.light_100};
    background-color: ${({ theme }) => theme.colors.dark_400};
  }

  .wrapper {
    margin: 0 auto;
    width: min(90%, 92rem);
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    .wrapper {
      margin: 0 auto;
      width: min(90%, 112rem);
    }
  }
`
