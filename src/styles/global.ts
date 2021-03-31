import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #e20e8d;
    --background: #030518;
    --white: #eeeeee;
    --grey: #cccccc;
    --darkBlue: #032541;
    --green: #1ed5a9;
    --shimmer-card-bg-color: #f6f7f8;
    --shimmer-card-moving-gradient: linear-gradient(to right, rgb(238, 238, 238) 8%, rgb(222, 222, 222) 18%,  rgb(238, 238, 238) 33%);
    --lightGreen: 30,213,169;
    --lightBlue: 1,180,228;

    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
