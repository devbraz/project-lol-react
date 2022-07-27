import styled from "styled-components";

export const Container = styled.div``

export const Box = styled.div`

  position: absolute;
  top: 22.5%;
  left: 41%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 45%;
  box-shadow: 24;
  padding: 40px 80px 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  background-color: var(--color-login-background-form);
  border: none;
  outline-style: none;
  overflow-y: scroll;
  font-family: var(--fml-Lexend-Deca);

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-login-background-form);
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-login-input-text);
    border-radius: 20px;
    border: 3px solid var(--color-login-input-text);
  }

`

export const DivButton = styled.div`

    width: 35px;
    height: 35px;
    transform: rotate(45deg);
    background: var(--color-login-info-icon);
    border-radius: 2px;
    
    :hover {
      background: var(--color-login-info-icon-hover);
    }

  button {

    width: 35px;
    height: 35px;
    background: none;
    transform: rotate(-45deg);
    border: none;
    font-size: 1.5rem;
    font-weight: bold;

    svg {
      width: 10px;
      height: 17px;
    }

  }

`

export const DivPos = styled.div`

  position: absolute;
  top: 10.5%;
  left: -0.5%;
  border: none;
  width: 35px;
  height: 35px;
  transform: rotate(45deg);
  background: var(--color-login-background-form);
  border-radius: 2px;

`

export const Title = styled.span`

  margin: 5px 0 5px 0;

`
export const Date = styled.p`
    font-size: 0.9rem;
    font-weight: 600;
    margin: 5px 0 5px 0;
    color: var(--color-login-input-text);
`
export const Message = styled.p`

    font-size: 0.85rem;
    font-weight: 200;
    margin: 5px 0 5px 0;

`

export const DivLink = styled.div`
  

  a{
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--color-login-input-text);
    margin: 5px 0 5px 0;
  }

`

