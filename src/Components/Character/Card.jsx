import React, {useContext} from 'react'
import styled from 'styled-components'
import FavoritesStar from './FavoritesButton'
import {charactersContext} from '../../Context/Pagination/CharactersContext'


const CardWrapper= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 340px;
    height: 150px;
    position: relative;
    border:1px solid #B9B9B9;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition:  box-shadow 300ms ease-in-out;
    -moz-transition:  box-shadow 300ms ease-in-out;
    -o-transition:  box-shadow 300ms ease-in-out;
    transition:  box-shadow 300ms ease-in-out;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        -webkit-transition:  box-shadow 300ms ease-in-out;
        -moz-transition:  box-shadow 300ms ease-in-out;
        -o-transition:  box-shadow 300ms ease-in-out;
        transition:  box-shadow 300ms ease-in-out;
    }
    
`
const CardImage = styled.div`

    display: flex;
    height:100%;
    width: 30%;
    min-width: 150px;
    position: relative;
    .background-image{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .favorites-button{
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
`
const CardText= styled.div`
    margin-left:15px;
    display:flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`
const CardName = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;

    .situation{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        .status{
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }
    }
    
    .name{
        text-align: left;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #000000;
    }
`
const CardOtherInfo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .title{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 15px;
        color: #515151;
    }
    .info{
        text-align: left;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #000000;
    }
`

export default function CharacterCard(props) {
    const { state, addFavorite,deleteFavorite} = useContext(charactersContext)
    const handleClick=() => {
        if (state.favoriteCharacters.find(x=>x.id === props.character.id)){
            deleteFavorite(props.character)
        }
        else{
            addFavorite(props.character)
        }
    }
      var episode= {
        "id": 28,
        "name": "The Ricklantis Mixup",
        "air_date": "September 10, 2017",
        "episode": "S03E07",
        "characters": [
          "https://rickandmortyapi.com/api/character/1",
          "https://rickandmortyapi.com/api/character/2",
          // ...
        ],
        "url": "https://rickandmortyapi.com/api/episode/28",
        "created": "2017-11-10T12:56:36.618Z"
      }
  return(
        <CardWrapper>
            <CardImage>
                <img className='card-image' src={props.character.image} alt="" onClick={props.click}></img>
                <div className='favorites-button' onClick={handleClick}>
                    <FavoritesStar className='favorites-button' check= {state.favoriteCharacters.find(x=>x.id === props.character.id)?true:false}></FavoritesStar>
                </div>
            </CardImage>
            <CardText>
                <CardName>
                    <div className='situation'>
                        <div className='status' style={props.character.status.includes('Alive')?{backgroundColor:"green"}:{backgroundColor:"red"}}></div>
                        {props.character.status} - {props.character.species}
                    </div>
                    <div className='name'>{props.character.name}</div>
                </CardName>
                <CardOtherInfo>
                    <div className='title'>Last know location:</div>
                    <div className='info'>{props.character.location.name}</div>
                </CardOtherInfo>
                <CardOtherInfo>
                    <div className='title'>First seen in:</div>
                    <div className='info'>{episode.name}</div>
                </CardOtherInfo>
            </CardText>
        </CardWrapper>
  )
}
