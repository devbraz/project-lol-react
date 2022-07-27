import styled from "styled-components";

export const FormContainerLogin = styled.form`

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 25%;
  height: 100vh;

  span {

    height: 5%;
    font-size: 1.7rem;
    font-weight: 700;
    font-family: var(--fml-Lexend-Deca);

  }

`

export const ImageContainer = styled.div`

  display: flex;
  justify-content: center;  
  align-items: center;
  height: 20%;

  img {

    width: 125px;
    height: 35px;

  }

`

export const UserLogin = styled.div`

  width: 100%; 
  height: 20%;

`

export const MediaButtons = styled.div`

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 75%;
  height: 5%;

  button {

    width: 30%;
    height: 35px;
    border: none;
    border-radius: 4px;
    background-color: var(--color-white);
    box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.20);
    -webkit-box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.20);
    -moz-box-shadow: 0px 1px 4px 1px rgba(0,0,0,0.20);

    :hover {

      background-color: var(--color-login-button-white-hover);

    }

  }

  svg {

    width: 50%;
    height: 65%;

  }

  .apple {

    background: var(--color-black);

    svg {

      fill: white;

    }
    :hover {

      background-color: var(--color-login-button-black-hover);

    }

  }

  .facebook {

    background: var(--color-login-button-blue-facebook);

    svg {

      fill: white;

    }
    :hover {

      background-color: var(--color-login-button-blue-facebook-hover);

    }

  }

`

export const FooterLoginDiv = styled.div`

  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 45%;
  margin-bottom: 10%;
  width: 90%;

  button {

    width: 70px;
    height: 70px;
    margin-bottom: 60px;
    border-radius: 20px;
    border: 2px solid var(--color-login-button-active);
    background: var(--color-login-button-active);
    cursor: pointer;

    svg{
      width: 30px;
      height: 30px;
      fill: var(--color-white);
    }

  }

  .disabled-button{

    cursor: auto;
    border: 2px solid var(--color-login-background-input);
    background: var(--color-white);

    svg{

      fill: var(--color-login-background-input);

    }

  }

`


export const DivContent = styled.div`

  display: flex;
  flex-direction: row;

`

export const LinksDiv = styled.div`

  display: flex;
  flex-direction: column;
  a {
    font-size: 0.7rem;
    font-weight: 600;
    font-family: var(--fml-Lexend-Deca);
    color: var(--color-login-input-text);
  }

`

export const InputContainer = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  label {

    display: block;
    text-align: start;
    width: 75%;
    height: 50px;
    border-radius: 5px;
    margin: 10px;
    
    span {

      width: auto;
      height: auto;
      position: absolute;
      font-size: 0.70rem;
      font-weight: 700;
      font-family: var(--fml-Lexend-Deca);
      color: var(--color-login-input-text);
      margin: 18px;
      cursor: text;
      transition: all 0.08s ease;

    }

    .on-focus{
      position: absolute;
      font-size: 0.65rem;
      font-weight: 500;
      font-family: var(--fml-Lexend-Deca);
      color: var(--color-login-input-text);
      cursor: text;
      margin: 3px 0 0 10px;
    }

    input{

      width: 100%;
      height: 100%;
      border:none;
      border-radius: 5px;
      padding: 25px 10px 10px 10px;
      background: var(--color-login-background-form);
      outline: none;
      box-shadow: none; 
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      font-family: var(--fml-Lexend-Deca);
      color: var(--color-login-modal-background);

      :focus {

       outline: none;
       background: var(--color-white);
       border: 2px solid var(--color-login-button-black-hover);

      }

      /* :hover {

        background-color: var(--color-login-background-input-hover);

      } */

    }

    button {
      position: absolute;
      background: none;
      border: none;
      cursor: pointer;
      top: 36.2%;
      left: 19%;

      svg {

        width: 25px;
        height: 22px; 

      }
    }

  }

`

export const DivCheckBox = styled.div`

  display: flex;
  justify-content: center;
  width: 100%;
  height: 5%;

  label {

    display: flex;
    width: 75%;
    text-align: start;
    font-size: 0.85rem;
    font-family: var(--fml-Lexend-Deca);
    font-weight: 200;

    input {

      appearance: none;
      width: 17px;
      height: 17px;
      background: var(--color-login-background-form);
      margin: 0 8px 0 0;
      border-radius: 3px;

      :checked{

        background-color: var(--color-login-button-active);

      }

      :checked::after{

        content: '';
        display: block;
        width: 4px;
        height: 7px;
        border: 2px solid white;
        border-left: none;
        border-top: none;
        margin: 2.5px 0 0 5px;
        transform: rotate(45deg);

      }

    }

  }

`



