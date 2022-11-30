import React,{useState, useEffect,useContext} from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/Navbar'
import axios from "axios";
import HomeHeader from '../Resouces/Cabecera.png'
import {ReactComponent as RickAndMortyLogo} from '../Resouces/Rick_and_Morty.svg'
import { Outlet } from "react-router-dom";
import Footer from '../Components/Footer/Footer'
import {charactersContext} from '../Context/Pagination/CharactersContext'
import { useCookies } from 'react-cookie';
import ErrorPage from './Error';


const HomeWrapper= styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
`
const HomeContent= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`
const HomeHeaders= styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(28vw);
    position: relative;
    background-image: url(${HomeHeader});
    background-size: cover;
    background-color: hsla(0, 0%, 0%, 0.65);
    background-blend-mode: multiply;
    
    .rick-morty-home{
        width: 30%;
        min-width: 245px;
    }
   
`


export default function Home() {
  const [cookies] = useCookies(['actualPage']);
  
  const { state, changeState,changeInfo} = useContext(charactersContext);
  const [loadingData, setLoadingData] = useState(true);
  const [errorPage, setErrorPage] =useState(false);
  var api='https://rickandmortyapi.com/api'
   async function getCharacters(page,name,status,species,type,gender) {
          axios.get(`${api}/character/?page=${page}&name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`)
            .then((res) => {
              if (res.status === 200 ) {
                const characters=res.data.results
                const info= res.data.info
                changeState(characters);
                changeInfo(info)
                setLoadingData(false);
              }
              else{
                setErrorPage(true);
                setLoadingData(false);
              }
            })
            .catch((err) => {
              setLoadingData(false);
              setErrorPage(true);
              console.log(err);
            });
        }
        useEffect(() => {
          getCharacters(cookies.actualPage,state.actualname,state.actualstatus,state.actualspecies,state.actualtype,state.actualgender);
        }, [state.actualPage,state.actualname,state.actualstatus,state.actualspecies,state.actualtype,state.actualgender]);

  return(
    
    <HomeWrapper>
        <HomeContent>
            <HomeHeaders>
                <RickAndMortyLogo className='rick-morty-home'></RickAndMortyLogo>
            </HomeHeaders>
            <Navbar/>
            {errorPage?
              <ErrorPage setErrorPage={setErrorPage}/>:<Outlet />
            }
            <Footer ></Footer>
        </HomeContent>
    </HomeWrapper>
  )
}
