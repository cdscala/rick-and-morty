import React from 'react'
import styled from 'styled-components'
import HomeHeader from '../../Resouces/Footer.png'
import {ReactComponent as CSLogo} from '../../Resouces/LogoCS.svg'


const FooterWrapper= styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(10vw);
    position: relative;
    background-image: url(${HomeHeader});
    background-size: cover;
    background-color: hsla(0, 0%, 0%, 0.65);
    background-blend-mode: multiply;
    
    .rick-morty-footer{
        width: 20%;
        min-width: 180px;
    }
    
`


export default function Footer() {
  return(
        <FooterWrapper>
            <CSLogo className='rick-morty-footer'></CSLogo>
        </FooterWrapper>
  )
}
