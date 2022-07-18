import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
      //LOGIN-COLORS
      --color-login-background-img: #4d4d4d;
      --color-login-background-form: #f2f2f2;
      --color-login-background-input: #cccccc;
      --color-login-button-active: #ba3636;
      --color-login-media-facebook: #4267B2;
      --color-login-info-icon: #cb4dcb;
      --color-login-modal-background: #595959;
      --color-white: #FFFFFF;
      --color-black: #000000;
      
      --fml-Fascinate: 'Fascinate', cursive;
      --fml-Barlow-Condensed:'Barlow Condensed', sans-serif;
      --fml-Poppins:'Poppins', sans-serif;
      --fml-Titillium-Web:'Titillium Web', sans-serif;

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