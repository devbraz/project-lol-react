import styled from "styled-components";

export const Container = styled.div``

export const Box = styled.div`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22%;
  height: 35%;
  box-shadow: 24;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

`

export const DivButton = styled.div`

    width: 35px;
    height: 35px;
    transform: rotate(45deg);
    background: var(--color-login-info-icon);
    border-radius: 2px;

  button {

    width: 35px;
    height: 35px;
    background: none;
    transform: rotate(-45deg);
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

  }

`