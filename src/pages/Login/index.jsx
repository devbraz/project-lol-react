import React from "react";
import LoginFormContainer from "../../components/LoginFormContainer";
import LoginImgContainer from "../../components/LoginImgContainer";
import { LoginContainer } from "./styles";

export default function Login() {
  return (
    <LoginContainer>
      <LoginFormContainer></LoginFormContainer>
      <LoginImgContainer></LoginImgContainer>
    </LoginContainer>
  );
}