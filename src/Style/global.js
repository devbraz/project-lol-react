import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  :root {
    //LOGIN-COLORS
    --color-login-background-img: #4d4d4d;
    --color-login-user-modal-background: hsl(0, 0%, 10%);
    --color-login-user-modal-button-hover: hsl(0, 0%, 15%);
    --color-login-background-form: #f2f2f2;
    --color-login-background-input: #e6e6e6;
    --color-login-background-input-hover: hsl(0, 0%, 89%);
    --color-login-version: hsl(0, 0%, 79%);
    --color-login-button-active: #ba3636;
    --color-login-button-blue-facebook: #1a66ff;
    --color-login-info-icon: #cb4dcb;
    --color-login-info-icon-hover: hsl(300, 55%, 45%);
    --color-login-modal-background: #595959;
    --color-login-button-white-hover: hsl(0, 0%, 97%); 
    --color-login-button-black-hover: hsl(0, 0%, 5%);
    --color-login-button-blue-facebook-hover: hsl(220, 100%, 52%);
    --color-login-input-text: hsl(0, 0%, 65%);
    --color-white: #FFFFFF;
    --color-black: #000000;
    
    
    --fml-Open-Sans: 'Open Sans', sans-serif;
    --fml-Albert-Sans: 'Albert Sans', sans-serif;
    --fml-Lexend-Deca: 'Lexend Deca', sans-serif;
  }
  #detach-button-host {
    display: none !important;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul,ol,li,a{
    list-style: none;
    text-decoration: none;
  }
  body{
    min-height:100vh;
      
  }

`;

