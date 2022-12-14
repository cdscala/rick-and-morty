import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import ThumbHeader from '../../Resouces/CardThumb.png'
import {useMediaQuery} from '../Query/MediaQueries'
import {charactersContext} from '../../Context/Pagination/CharactersContext'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/CancelRounded';
import FavoritesButton from './FavoritesButton';
import Information from './Informacion';
import Episodes from './Episodios'
import CharacterCard from './Card'
import axios from "axios";

const CardDetailBG= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position:absolute ;
    background-color: hsla(0, 0%, 0%, 0.65);
    z-index: 1010;
    -webkit-transition: opacity 0.3s ease-out;
    -moz-transition: opacity 0.3s ease-out;
    -o-transition: opacity 0.3s ease-out;
    transition: opacity 0.3s ease-out;
`
const CardDetailWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 80%;
    max-width: 900px;
    height: fit-content;
    position: absolute;
    border-radius: 5px;
    background-color: white;
    overflow: hidden;
    border:1px solid #B9B9B9;
    
    -webkit-transition: width 0.3s ease-out;
    -moz-transition: width 0.3s ease-out;
    -o-transition: width 0.3s ease-out;
    transition: width 0.3s ease-out;
    z-index: 1005;
    .arrow{
        cursor: pointer;
        z-index: 1;
        color: white;
        width: 35px;
        height: 35px;
        margin-left:1vw;
        margin-top:1vw;
    }
    .cross{
        cursor: pointer;
        z-index: 1;
        color: white;
        width: 35px;
        height: 35px;
        margin-right:1vw;
        margin-top:1vw;
    }
    .card-detail-buttons{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 100%;
        height: 20%;
        
        &:has(.arrow){
            justify-content: flex-start;
            z-index: 15;
        }
        &:has(.cross){
            justify-content: flex-end;
            z-index: 15;
        }
    }
    
    .card-detail-header{
        min-height: 350px;
        height: 40vw;
        max-height: 450px;
        width: 100%;
        position: relative;
        background-color: #081F32;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        
        align-items: center;
        .card-detail-background-image{
            position: absolute;
            top:0;
            left:0;
            object-fit: cover;
            width: 100%;
            height:50%;
            z-index: 0;
        }
    }
    .card-detail-header-info{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
        gap:4%;
        
        font-family: 'Montserrat';
        font-style: normal;
        line-height: 17px;
        color: #FFFFFF;
        z-index: 2;
        .situation{
            display: flex;
            flex-direction: row;
            font-size: 14px;
            font-weight: 300;
            gap:5px;
            margin-top: 25px;
            justify-content: center;
            align-items: center;
            .status{
                
                width: 8px;
                height: 8px;
                border-radius: 50%;
            }
        }
        .text-info-title{
            font-weight: 500;
            font-size: 18px;
        }
        .text-info-species{
            font-size: 14px;
            font-weight: 300;
        }
        .card-detai-photo-frame{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 120px;
            width: 20%;
            aspect-ratio: 1;
            .photo-wrapper{
                position: relative;
                
                overflow: hidden;
                border: 5px solid #C4C4C4;
                border-radius: 100%;
                .photo{
                    width: 100%;
                    aspect-ratio: 1;
                }
            }
            .card-detail-favorite{
                position: absolute;
                
                bottom: -8%;
            }
        }
        
    }
`

const InformationWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: fit-content;
    width: 100%;
    min-width: fit-content;
    

    .information-wrapper-box{
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        height: 80%;
        width: 90%;
        .information-wrapper-title{
            width: 100%;
            text-align: left;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 27px;
            color: #7A7A7A;
        }
    }
    &::after{
        content: '';
        height: 2px;
        background-color: #B9B9B9;
        width: 100%;
        
    }
    
    
`
const EpisodeWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: fit-content;
    width: 100%;
    min-width: fit-content;
    .episode-wrapper-box{
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        height: 80%;
        width: 90%;
        .episode-wrapper-title{
            width: 100%;
            text-align: left;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 27px;
            color: #7A7A7A;
        }
    }
    &::after{
        content: '';
        height: 2px;
        background-color: #B9B9B9;
        width: 100%;
        
    }
    
`

const FavCharactersWrapper= styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:40px ;
    color: black;
    width: 100%;
    min-height: 500px;
    
`
const FavCharacterGrid = styled.div`
    margin-top: 35px;
    margin-bottom: 35px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap:20px;
    width: 80%;
    min-width: 341px;
    .favorite-character-title{
        width:100%;
        text-align: left;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 27px;
        color: #7A7A7A;
    }
`


export default function CardDetails(props) {
    const matches = useMediaQuery('(min-width:1000px)');
    const { state } = useContext(charactersContext)
    const [loadingData, setLoadingData] = useState(true);
    const [errorPage, setErrorPage] =useState(false);
    let episodes =[];
    const [episodesArray, setEpisodesArray] =useState([]);
    
    function getGroup() {
        
        if (state.selectedCharacter){
            state.selectedCharacter.episode.forEach(element => {
                const ep=parseInt(element.substring(40,element.lenght),10)
                if (!episodes.includes(ep)){
                    episodes.push(ep)
                }
            });
            // console.log('log de episodios: '+episodes)
        }
    }
    var api='https://rickandmortyapi.com/api'
    async function getEpisodes(group) {
        axios.get(`${api}/episode/${group}`)
          .then((res) => {
            if (res.status === 200 ) {
              const episodeList=res.data
            //   console.log('response: '+res.data)
              setEpisodesArray([...episodeList]);
            //   console.log(episodesArray)
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
        episodes=[]
        getGroup();
        getEpisodes(episodes)
      }, [state.selectedCharacter]);

  return( 
    <CardDetailBG style={props.open?{opacity:1,zIndex:'1010'}:{opacity:0,zIndex:'-1'}}>
        <CardDetailWrapper style={matches?{width:'80%',marginTop:'8vw'}:{width:'100%',marginTop:0}}>
            <div className='card-detail-header'>
                <div className='card-detail-buttons' >
                    {matches?(<ArrowBackIcon className='arrow' onClick={props.click}></ArrowBackIcon>):(<CloseIcon className='cross' onClick={props.click}></CloseIcon>)}
                </div>
                <img className='card-detail-background-image' src={ThumbHeader} alt=""></img>
                <div className='card-detail-header-info'>
                    <div className='card-detai-photo-frame'>
                        <div className='photo-wrapper'>
                            <img className='photo' src={state.selectedCharacter.image}></img>
                        </div>
                        <div className='card-detail-favorite'><FavoritesButton className='card-detail-favorite'></FavoritesButton></div>
                    </div>
                    
                    
                    <div className='situation'>
                        <div className='status' style={state.selectedCharacter.status.includes('Alive')?{backgroundColor:"green"}:{backgroundColor:"red"}}></div>
                            {state.selectedCharacter.status}
                        </div>
                    <div className='text-info-title'>{state.selectedCharacter.name}</div>
                    <div className='text-info-species'>{state.selectedCharacter.species}</div>
                    
                </div>
            </div>
            <InformationWrapper>
                <div className='information-wrapper-box'>
                    <div className='information-wrapper-title'>Information</div>
                    <Information gender={state.selectedCharacter.gender} origin={state.selectedCharacter.origin.name} type={state.selectedCharacter.type}></Information>
                </div>
                
            </InformationWrapper>
            <EpisodeWrapper>
                <div className='episode-wrapper-box'>
                    <div className='episode-wrapper-title'>Episodes</div>
                    <Episodes episodes = {episodesArray}></Episodes>
                </div>
                
            </EpisodeWrapper>
            <FavCharactersWrapper>
                <FavCharacterGrid>
                    <div className='favorite-character-title'>
                        Personajes interesantes:
                    </div>
                    {
                    state.favoriteCharacters?.map((item,key) => (
                        <CharacterCard key={key} character={item}></CharacterCard>
                    ))
                    }
                    
                </FavCharacterGrid>
            </FavCharactersWrapper>
        </CardDetailWrapper>
    </CardDetailBG>  
        
  )
}
