import Button from "../Button";
import LoginInfoModal from "../LoginInfoModal";
import {
  ImgContainerLogin,
  MinimizeAndCloseButton,
  InfoAndUserModal,
  ImgLogin
} from "./styles";




export default function LoginImgContainer() {
  return (
    <ImgContainerLogin>
      <MinimizeAndCloseButton>
        <Button></Button>
        <Button></Button>
      </MinimizeAndCloseButton>
      <InfoAndUserModal>
        <LoginInfoModal></LoginInfoModal>
        <Button></Button>
      </InfoAndUserModal>
      <ImgLogin>
        <img src="" alt="" />
      </ImgLogin>

    </ImgContainerLogin>
  );
}