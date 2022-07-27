import styled from "styled-components";

export const Container = styled.div`


`
export const Box = styled.div`

  position: absolute;
  top: 13.7%;
  right: -1.5%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 17.5%;
  box-shadow: 24;
  border: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: var(--color-login-user-modal-background);
  padding: 20px;

  button {
    font-family: var(--fml-Lexend-Deca);
    color: var(--color-login-input-text);
    font-weight: 700;
    text-align: start;
    height: 30px;
    background: var(--color-login-user-modal-background);
    border-radius: 5px;
    border: none;
    padding: 0 0 5px 15px;
    cursor: pointer;

    :hover {
      background: var(--color-login-user-modal-button-hover);
    }
  }

  .disabled {
    color: var(--color-login-user-modal-button-hover);
    :hover{
      background: none;
    }
    cursor: auto;
  }

`

export const ButtonDiv = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 3px, rgba(0, 0, 0, 0.23) 0px 3px 3px;
  border-radius: 15px;
  width: 50px;
  height: 50px;
  

  svg {
    position: fixed;
    padding-top: 2px;
    fill: white;
    font-size: 1.5rem;
    font-weight: bold;
  }

  button {
  
    width: 50px;
    height: 50px;
    background: black;
    filter: opacity(0.1) drop-shadow(0 0 0 grey);
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    
  }

  :hover {

    button {

      transition: all 0.3s ease-out;
      filter: opacity(0.1) drop-shadow(0 0 0 white);

    }
      
  }

`