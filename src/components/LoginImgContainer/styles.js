import styled from "styled-components";

export const VideoContainerLogin = styled.div`

  width: 75%;
  height: 100vh;


`
export const MinimizeAndCloseButton = styled.div`

  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 75%;
  z-index: 1;

  div {
    
  }

  button {

    width: 40px;
    height: 25px;
    border: none;
    background: none;
    font-size: 1.5rem;
    padding: 5px 10px 0 10px;
    color: var(--color-login-background-input);
    cursor: pointer;

    :hover {
    
      background: red;
      filter: opacity(0.3) drop-shadow(0 0 0 red);
      svg {
        fill: white;
      }

    }

    svg {
      height: 20px;
      padding-right: 5px;
    }

  }

  .minimize {
    height: 25px;
    svg {
      height: 30px;
      padding-top: 3px;

    }
    :hover {
      background: var(--color-login-background-input);
      filter: opacity(0.2) drop-shadow(0 0 0 var(--color-login-modal-background));
      svg {
        fill: white;
      }
    }
  }

`
export const InfoAndUserModal = styled.div`

 display: flex;
 justify-content: space-between;
 position: fixed;
 width: 75%;
 padding: 45px 2.5rem 0 2.5rem;


`
export const Video = styled.video`

  position: absolute;
  width: 75%;
  top: 50%;
  height: 100%;
  object-fit: cover;
  transform: translate(0, -50%);
  z-index: -1;
  animation-duration: 3s;
  animation-name: mymove;

  @keyframes mymove {
    from {background: white;}
    to {background: black;}
}

`