import styled from "styled-components";

export const ImgContainerLogin = styled.div`

  width: 75%;
  height: 100vh;


`
export const MinimizeAndCloseButton = styled.div`

  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 75%;


  button {
    border: none;
    background: none;
    font-size: 1.5rem;
    padding: 0 10px 0 10px;
    color: var(--color-login-background-input);
    font: caption;
    cursor: pointer;
  }

  .minimize {
    
  }



`

export const InfoAndUserModal = styled.div`

 display: flex;
 justify-content: space-between;
 position: fixed;
 width: 75%;
 padding: 30px 25px 0 25px;


`

export const ImgLogin = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;

  /* img {
    width: 350px;
    height: 300px;
    filter: opacity(0.4) drop-shadow(0 0 0 white);
    transform: rotate(-10deg);
  } */

`

export const Images = styled.img`

width:100%;
height:100%;

`