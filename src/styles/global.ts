import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }

 html {
  font-size: 62.5%;
 }

 // Its not reset, only for a test page
 html, body, #__next {
  height: 100%;
 }

 body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }

`

export default GlobalStyles
