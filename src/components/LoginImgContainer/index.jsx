import Button from "../Button";

import LoginInfoModal from "../LoginInfoModal";
import LoginUserModal from "../LoginUserModal";

import aatrox from '../../Assets/video/Aatrox.mp4'
import battleacademia from '../../Assets/video/BattleAcademia.mp4'
import bloodmoondiana from '../../Assets/video/BloodMoonDiana.mp4'
import darkcosmicjhin from '../../Assets/video/DarkCosmicJhin.mp4'
import dragonxin from '../../Assets/video/DragonslayerXinZhao.mp4'
import dunkmasterdarius from '../../Assets/video/DunkmasterDarius.mp4'
import elementalistlux from '../../Assets/video/elementalistlux.mp4'
import evelynnagonys from '../../Assets/video/EvelynnAgonys.mp4'
import galaxyslayerzed from '../../Assets/video/GalaxySlayerZed.mp4'
import godfistleesin from '../../Assets/video/GodFistLeeSin.mp4'
import godkingdarius from '../../Assets/video/GodKingDarius.mp4'
import godkinggaren from '../../Assets/video/GodKingGaren.mp4'
import missfortune from '../../Assets/video/GunGoddessMissFortune.mp4'
import lucian from '../../Assets/video/HighNoonLucian.mp4'
import irelia from '../../Assets/video/Irelia.mp4'
import kaisa from '../../Assets/video/KaiSa.mp4'
import kaylemorgana from '../../Assets/video/KayleMorgana.mp4'
import kdapopstars from '../../Assets/video/KDAPOPSTARS.mp4'
import lcs from '../../Assets/video/LCS2015.mp4'
import odyssey from '../../Assets/video/Odyssey.mp4'
import omegateemo from '../../Assets/video/OmegaSquadTeemo.mp4'
import projecthunters from '../../Assets/video/PROJECTHunters.mp4'
import projectmasteryi from '../../Assets/video/PROJECTMASTERYI.mp4'
import pulsefirecaitlyn from '../../Assets/video/PulsefireCaitlyn.mp4'
import pyke from '../../Assets/video/Pyke.mp4'
import seasonnineteen from '../../Assets/video/Season2019.mp4'
import shadowkayn from '../../Assets/video/ShadowKayn.mp4'
import eclipseleona from '../../Assets/video/SolarLunarEclipseLeona.mp4'
import spiritguardudyr from '../../Assets/video/SpiritGuardUdyr.mp4'
import starguardian from '../../Assets/video/StarGuardian.mp4'
import swain from '../../Assets/video/Swain.mp4'
import sylas from '../../Assets/video/SylastheUnshackled.mp4'
import thresh from '../../Assets/video/ThreshtheChainWarden.mp4'
import warwick from '../../Assets/video/WarwicktheUncagedWrathofZaun.mp4'
import yuumi from '../../Assets/video/YuumitheMagicalCat.mp4'
import zoe from '../../Assets/video/ZoetheAspectofTwilight.mp4'

import { VscChromeMinimize, VscChromeClose } from 'react-icons/vsc'
import { RiVolumeUpFill, RiVolumeMuteFill } from 'react-icons/ri'

import {
  VideoContainerLogin,
  MinimizeAndCloseButton,
  InfoAndUserModal,
  Video
} from "./styles";
import { useState, useRef } from "react";


export default function LoginImgContainer() {

  const themes = [

    { id: 1, video: aatrox },
    { id: 2, video: battleacademia },
    { id: 3, video: bloodmoondiana },
    { id: 4, video: darkcosmicjhin },
    { id: 5, video: dragonxin },
    { id: 6, video: dunkmasterdarius },
    { id: 7, video: elementalistlux },
    { id: 8, video: evelynnagonys },
    { id: 9, video: galaxyslayerzed },
    { id: 10, video: godfistleesin },
    { id: 11, video: godkingdarius },
    { id: 12, video: godkinggaren },
    { id: 13, video: missfortune },
    { id: 14, video: lucian },
    { id: 15, video: irelia },
    { id: 16, video: kaisa },
    { id: 17, video: kaylemorgana },
    { id: 18, video: kdapopstars },
    { id: 19, video: lcs },
    { id: 20, video: odyssey },
    { id: 21, video: omegateemo },
    { id: 22, video: projecthunters },
    { id: 23, video: projectmasteryi },
    { id: 24, video: pulsefirecaitlyn },
    { id: 25, video: pyke },
    { id: 26, video: seasonnineteen },
    { id: 27, video: shadowkayn },
    { id: 28, video: eclipseleona },
    { id: 29, video: spiritguardudyr },
    { id: 30, video: starguardian },
    { id: 31, video: swain },
    { id: 32, video: sylas },
    { id: 33, video: thresh },
    { id: 34, video: warwick },
    { id: 35, video: yuumi },
    { id: 36, video: zoe }

  ]

  const refVideo = useRef()
  const [soundMuted, setSoundMuted] = useState(true)
  const [randomNumber, setRandomNumber] = useState(random(themes))

  //Salvando o src do video escolhido aleatóriamente em uma variável.
  let selected = themes[randomNumber].video

  //Função para gerar numeros aleatórios baseado no comprimento do array de videos.
  function random(themes) {
    let randomGenerated = Math.floor(Math.random() * themes.length)
    return randomGenerated
  }

  //Função que executa um novo video aleatório quando acaba o anterior.
  const ended = () => {
    refVideo.load()
    refVideo.play()
  }

  return (

    <VideoContainerLogin>

      <MinimizeAndCloseButton>
        {/*Ternário verifica o state do som para selecionar o botão a ser renderizado.*/}
        {soundMuted ?
          <Button className='sound' onClick={() => setSoundMuted(false)} ><RiVolumeMuteFill /></Button>
          :
          <Button className='sound' onClick={() => setSoundMuted(true)}><RiVolumeUpFill /></Button>
        }
        <Button className='minimize'><VscChromeMinimize /></Button>
        <Button><VscChromeClose /></Button>
      </MinimizeAndCloseButton>

      <InfoAndUserModal>
        <LoginInfoModal />
        <LoginUserModal />
      </InfoAndUserModal>

      {/*Quando acaba o video é desencadeado o evento para a seleção de um novo video aleatório.*/}
      <Video
        autoPlay
        ref={refVideo}
        muted={soundMuted}
        onEnded={() => {
          setRandomNumber(random(themes))
          ended()
        }}
        src={selected}
        type='video/mp4'
        vjs-fluid
      />

    </VideoContainerLogin>

  );
}