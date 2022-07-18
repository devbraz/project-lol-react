import Button from "../Button";

import LoginInfoModal from "../LoginInfoModal";
import LoginUserModal from "../LoginUserModal";

import battleacademia from '../../Assets/video/BattleAcademia.mp4'
import bloodmoondiana from '../../Assets/video/BloodMoonDiana.mp4'
import darkcosmicjhin from '../../Assets/video/DarkCosmicJhin.mp4'
import dunkmasterdarius from '../../Assets/video/DunkmasterDarius.mp4'
import elementalistlux from '../../Assets/video/elementalistlux.mp4'
import evelynnagonys from '../../Assets/video/EvelynnAgonys.mp4'
import galaxyslayerzed from '../../Assets/video/GalaxySlayerZed.mp4'
import godfistleesin from '../../Assets/video/GodFistLeeSin.mp4'
import kdapopstars from '../../Assets/video/KDAPOPSTARS.mp4'
import lcs from '../../Assets/video/LCS2015.mp4'
import seasonnineteen from '../../Assets/video/Season2019.mp4'
import eclipseleona from '../../Assets/video/SolarLunarEclipseLeona.mp4'
import spiritguardudyr from '../../Assets/video/SpiritGuardUdyr.mp4'
import starguardian from '../../Assets/video/StarGuardian.mp4'
import sylas from '../../Assets/video/SylastheUnshackled.mp4'
import warwick from '../../Assets/video/WarwicktheUncagedWrathofZaun.mp4'
import yuumi from '../../Assets/video/YuumitheMagicalCat.mp4'
import zoe from '../../Assets/video/ZoetheAspectofTwilight.mp4'

import { VscChromeMinimize, VscChromeClose } from 'react-icons/vsc'

import {
  ImgContainerLogin,
  MinimizeAndCloseButton,
  InfoAndUserModal,
  Video
} from "./styles";

export default function LoginImgContainer() {

  const themes = [
    battleacademia,
    bloodmoondiana,
    darkcosmicjhin,
    dunkmasterdarius,
    elementalistlux,
    evelynnagonys,
    galaxyslayerzed,
    godfistleesin,
    kdapopstars,
    lcs,
    seasonnineteen,
    eclipseleona,
    spiritguardudyr,
    starguardian,
    sylas,
    warwick,
    yuumi,
    zoe
  ]

  return (
    <ImgContainerLogin>
      <MinimizeAndCloseButton>
        <Button className='minimize'><VscChromeMinimize /></Button>
        <Button><VscChromeClose /></Button>
      </MinimizeAndCloseButton>
      <InfoAndUserModal>
        <LoginInfoModal />
        <LoginUserModal />
      </InfoAndUserModal>
      <Video
        autoPlay
        loop
      >
        <source src={themes[5]} type='video/mp4' />
      </Video>
    </ImgContainerLogin>
  );
}