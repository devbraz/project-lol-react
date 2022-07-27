import {
  FormContainerLogin,
  ImageContainer,
  UserLogin,
  MediaButtons,
  FooterLoginDiv,
  LinksDiv,
  InputContainer,
  DivCheckBox,
  DivContent
} from "./styles";

import { FcGoogle } from 'react-icons/fc'
import { AiFillApple, AiOutlineArrowRight } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { IoIosEye, IoIosEyeOff } from 'react-icons/io'

import riotlogo from '../../Assets/Img/riotgameslogo.png'

import Input from "../Input";
import Button from "../Button";
import LoginVersionModal from "../LoginVersionModal";

import { useState } from "react";

export default function LoginFormContainer() {


  const [inputNameFocus, setInputNameFocus] = useState(false)
  const [inputPasswordFocus, setInputPasswordFocus] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputType, setInputType] = useState('password')
  const [buttonPasswordFocus, setButtonPasswordFocus] = useState(false)

  //Função que verifica se o input está vazio ou não para habilitar ou desabilitar o mesmo.
  const handleFocusEnd = () => {

    if (inputName === '') {
      setInputNameFocus(false)
    }
    if (inputPassword === '') {
      setInputPasswordFocus(false)
    }

  }

  const handleClick = (e) => {

    e.preventDefault()
    if (inputType === 'password') {
      return setInputType('text')
    }
    return setInputType('password')

  }

  return (

    <FormContainerLogin >

      <ImageContainer>
        <img src={riotlogo} alt={riotlogo}></img>
      </ImageContainer>
      <span >Fazer login</span>

      <UserLogin>
        <InputContainer>
          {/*Ternário faz a verificação dos valores dos states para saber qual input renderizar.*/}
          {inputNameFocus ?
            <label>
              <span className="on-focus">NOME DE USUÁRIO</span>
              <Input
                value={inputName}
                defaultValue=""
                onChange={(e) => setInputName(e.target.value)}
                onBlur={handleFocusEnd}
                type='text'
              />
            </label>
            :
            <label>
              <span>NOME DE USUÁRIO</span>
              <Input
                defaultValue=""
                onFocus={() => setInputNameFocus(true)}
                type='text'
              />
            </label>
          }
          {inputPasswordFocus ?
            <label>
              <span className="on-focus">SENHA</span>
              <Input
                value={inputPassword}
                defaultValue=""
                onChange={(e) => setInputPassword(e.target.value)}
                onBlur={() => {
                  handleFocusEnd()
                }}
                type={inputType}
              />
              {buttonPasswordFocus ?
                <Button
                  onClick={(e) => handleClick(e)}
                >
                  {inputType === 'password' ?
                    <IoIosEyeOff />
                    :
                    <IoIosEye />
                  }
                </Button>
                :
                <></>
              }
            </label>
            :
            <label>
              <span>SENHA</span>
              <Input
                defaultValue=""
                onFocus={() => {
                  setInputPasswordFocus(true)
                  setButtonPasswordFocus(true)
                }}
                type={inputType}
              />
            </label>
          }
        </InputContainer>
      </UserLogin>

      <MediaButtons>
        <Button className='facebook'><RiFacebookCircleFill /></Button>
        <Button><FcGoogle /></Button>
        <Button className='apple'><AiFillApple /></Button>
      </MediaButtons>

      <DivCheckBox>
        <label>
          <Input type="checkbox" />
          Manter login
        </label>
      </DivCheckBox>

      <FooterLoginDiv>

        {/*Ternário faz a verificação do state para saber qual botão renderizar.*/}
        {(inputName.length && inputPassword.length) > 1 ?
          <Button><AiOutlineArrowRight /></Button>
          :
          <Button className='disabled-button' disabled ><AiOutlineArrowRight /></Button>
        }
        <DivContent>
          <LinksDiv>
            <a href="/login">NÃO CONSEGUE INICIAR SESSÃO?</a>
            <a href="/login">CRIAR CONTA</a>
          </LinksDiv>
          <LoginVersionModal />
        </DivContent>

      </FooterLoginDiv>

    </FormContainerLogin>
  );
}