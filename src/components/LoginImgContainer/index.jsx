import Button from "../Button";
import LoginInfoModal from "../LoginInfoModal";
import LoginUserModal from "../LoginUserModal";
import ImgJinx from '../../Assets/Img/wallpaperflare.com_wallpaper.jpg'
import {
  ImgContainerLogin,
  MinimizeAndCloseButton,
  InfoAndUserModal,
  Images
} from "./styles";




export default function LoginImgContainer() {
  return (
    <ImgContainerLogin>
      <MinimizeAndCloseButton>
        <Button className='minimize'>_</Button>
        <Button>x</Button>
      </MinimizeAndCloseButton>
      <InfoAndUserModal>
        <LoginInfoModal />
        <LoginUserModal />
      </InfoAndUserModal>
      <Images src={ImgJinx} alt="Riot" />
    </ImgContainerLogin>
  );
}