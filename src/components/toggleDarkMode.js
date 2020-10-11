import React from "react"
import { useState, useContext } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Context from '../store/context'
import useSound from 'use-sound'




const Classes = styled.div`
  position:relative;
  display:flex;
  flex-direction:row;
  .switch {
      width: 55px;
      height: 31px;
      background: #000;
      display: flex;
      justify-content: flex-start;
      cursor: pointer;
      margin: 0 8px;
      border:1px solid #000;
      border-radius:2px;
  }
  
  .switch[data-isOn="true"] {
    justify-content: flex-end;
  }
  
  .handle {
    width: 29px;
    height: 29px;
    background:url('img/handle.png'), #000;
    background-size:contain;
    background-repeat:no-repeat;
    z-index:10;
    
  }
  .moon{
    position:absolute;
    left:13px;
    top:8px;
  }
  .sun{
    position:absolute;
    right:10px;
    top:5px;
  }
`
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 10
}



const ToggleDarkMode = () => {
  const { state, dispatch } = useContext(Context)
  const [playToggle] = useSound(
    'audio/toggle.mp3', { volume: 0.25 }
  )

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    return (
      playToggle(),
      setIsOn(!isOn),
      dispatch({ type: "TOGGLE_DARK_MODE" })
    )
  }

  return (
    <Classes isDark={state.isDark}>
      <div className="switch" data-ison={isOn} onClick={toggleSwitch} role="button" tabIndex="0">
        <img className="moon" src="img/moonIcon.svg" alt="dark" width="14px" />
        <motion.div className="handle" layout transition={spring} />
        <img className="sun" src="img/sunIcon.svg" alt="light" width="21px" />
      </div>
    </Classes>
  )
}


export default ToggleDarkMode
