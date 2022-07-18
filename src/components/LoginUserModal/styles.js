import styled from "styled-components";

export const Container = styled.div`


`

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

export const ButtonDiv = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 3px, rgba(0, 0, 0, 0.23) 0px 3px 3px;
  border-radius: 15px;
  width: 45px;
  height: 45px;

  svg {
    position: fixed;
    padding-top: 2px;
    fill: white;
    font-size: 1.5rem;
    font-weight: bold;
  }

  button {
  
    width: 45px;
    height: 45px;
    background: black;
    filter: opacity(0.1) drop-shadow(0 0 0 white);
    border: none;
    border-radius: 15px;
    cursor: pointer;
    
  }

`