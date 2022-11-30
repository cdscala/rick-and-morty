import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import WelcomeBG from '../Resouces/welcome-bg.png'
import {ReactComponent as RickAndMortyLogo} from '../Resouces/Rick_and_Morty.svg'
import * as ROUTES from '../routes'

const WelcomeWrapper= styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #000000;
    background-image: url(${WelcomeBG});
    background-size: cover;
    background-position:-25px;
    background-color: hsla(0, 0%, 0%, 0.65);
    background-blend-mode: multiply;
    overflow: hidden;
    
    /* .background-image{
      position: absolute;
      left: -110px;
      object-fit: cover;
      width: 110%;
      height: 100%;
      z-index: -1;
    } */
    
`
const WelcomeContent= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    /* background-color: hsla(0, 0%, 0%, 0.65); */

    .rick-morty-logo{
        width: 35%;
        min-width: 270px;
    }
    p{
        max-width: 55%;
    }
    .welcome-button{
        display: flex;
        align-items: center;
        justify-content: center;
        width:147px;
        height: 46px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 400;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        text-align: center;
        color: #FFFFFF;
        background-color:#12555F ;
        border-radius: 50px;
        -webkit-transition:  background-color 300ms ease-in-out;
        -moz-transition:  background-color 300ms ease-in-out;
        -o-transition:  background-color 300ms ease-in-out;
        transition:  background-color 300ms ease-in-out;
    }
    .welcome-button:hover{
        background-color:#1B7F8F;
        -webkit-transition:  background-color 300ms ease-in-out;
        -moz-transition:  background-color 300ms ease-in-out;
        -o-transition:  background-color 300ms ease-in-out;
        transition:  background-color 300ms ease-in-out;
    }
    
    
`

export default function Welcome() {
  return(
    <WelcomeWrapper>
        {/* <img className='background-image' src={WelcomeBG} alt=""></img> */}
        <WelcomeContent>
            <RickAndMortyLogo className='rick-morty-logo'/>
            <h1>Bienvenido a Rick and Morty</h1>
            <p>En esta prueba, evaluaremos su capacidad para construit la aplicación mediante el análisis de código y la reproducción del siquiente diseño.</p>
            <NavLink exact="true" to={ROUTES.CHARACTERSALL}>
                <div className='welcome-button'>Continuar</div>
            </NavLink>
            
        </WelcomeContent>
    </WelcomeWrapper>
  )
}
