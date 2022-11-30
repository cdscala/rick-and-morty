import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import SearchBox from '../SearchBox/SearchBox'
import HomeHeader from '../Resouces/Cabecera.png'
import {ReactComponent as RickAndMortyLogo} from '../Resouces/Rick_and_Morty.svg'



const FavoritesWrapper= styled.div`
    font-size:40px ;
    color: black;
    width: 100vw;
    height: 200px;
    position: relative;
`



export default function Favorites() {
  return(
    <FavoritesWrapper>
        Probando
    </FavoritesWrapper>
  )
}
