import React,{useContext,useState,useEffect} from 'react'
import styled from 'styled-components'
import CharacterCard from '../Components/Character/Card'
import FavoritesButton from '../Components/Character/FavoritesButton'

import {charactersContext} from '../Context/Pagination/CharactersContext'
import { Pagination } from '@mui/material'
import CardDetails from '../Components/Character/CardDetails'
import { useCookies } from 'react-cookie';



const CharactersWrapper= styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:40px ;
    color: black;
    width: 100vw;
    min-height: 500px;
    
`
const CharacterGrid = styled.div`
    margin-top: 35px;
    margin-bottom: 35px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap:20px;
    width: 80%;
    min-width: 341px;
    .favotite-button-wrap{
      width:100%;
    }
    
`
const CharacterPages = styled.div`
    margin-top: 35px;
    margin-bottom: 35px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    min-width: 341px;
    
`
function useForceUpdate(){
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1);
}

export default function Characters(props) {
  
  const { state,changePage,changeSelectedCharacter, } = useContext(charactersContext)
  const pages=state.info.pages
  const [details, bringDetais] = useState(false)
  const [showFav, showFavorites] = useState(false)
  const update = useForceUpdate()
  const [cookies, setCookie] = useCookies(['actualPage']);
  const [pageSelected,selectPage]=useState(parseInt(cookies.actualPage,10)?parseInt(cookies.actualPage,10):1)
  
  const handleChange = (event,value)=>{
    setCookie('actualPage',value,{ path: '/' })
    changePage(value)
    
  }
  const handleCharacter = (value)=>{
    changeSelectedCharacter(value)
    bringDetais(true)
    // console.log(details)
  }
  const handleFavorites = (value)=>{
    showFavorites(!showFav)
    // console.log(details)
  }
  
  useEffect(() => {
    selectPage(state.actualPage)
    update()
  }, [state.actualPage,pageSelected,state.favoriteCharacters]);
  
  return(
    <>
    <CardDetails open={details} click = {() => bringDetais()}></CardDetails>
    
    <CharactersWrapper>
        <CharacterGrid>
          <div className='favotite-button-wrap' onClick={handleFavorites}>
              <FavoritesButton text='Mostrar favoritos: ' check={showFav}></FavoritesButton>
          </div>
            {showFav?
              state.favoriteCharacters?.map((item,key) => (
                <CharacterCard key={key} character={item} click = {() => handleCharacter(item)}></CharacterCard>
              ))
              :
              state.characters?.map((item,key) => (
                <CharacterCard key={key} character={item} click = {() => handleCharacter(item)}></CharacterCard>
              ))
              
            }
            
            <CharacterPages>
              <Pagination count={pages} defaultPage={pageSelected?pageSelected:1} color="primary" onChange={handleChange}></Pagination>
            </CharacterPages>
            
        </CharacterGrid>
    </CharactersWrapper>
    </>
    
  )
}
