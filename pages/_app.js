import { createGlobalStyle } from 'styled-components';

export default function App({ Component, pageProps }) {
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }


  export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    color: #000;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
  }
`;