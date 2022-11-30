import React from 'react'
import styled from 'styled-components'


const FavoritesButtonWrapper= styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-width: 200px;
    min-height: 36px;
    cursor: pointer;
    
    .favorites-text{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }
    .favorites-button{
        width: 36px;
        height: 36px;
    }
    
`
const FavoritesButtonWrapperNT= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    min-width: 36px;
    min-height: 36px;
    cursor: pointer;
    
    .favorites-text{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }
    .favorites-button{
        width: 36px;
        height: 36px;
    }
`


export default function FavoritesButton(props) {
    var check= props.check == undefined? false:props.check;
    const text= props.text == undefined? '':props.text;
  return(
    text!==''? (
        <FavoritesButtonWrapper>
            <div className='favorites-text'>{props.text}</div>
            <div className='favorites-button'>
                <svg  width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" width="36" height="36" rx="18" fill="#F0F0F0"/>
                    <path fill={check?'#EEBA00':'#B9B9B9'}  d="M31.7984 14.5451L25.7353 13.664L23.025 8.16925C22.9509 8.0188 22.8291 7.89702 22.6787 7.82299C22.3014 7.63673 21.8429 7.79195 21.6543 8.16925L18.9439 13.664L12.8808 14.5451C12.7137 14.569 12.5609 14.6478 12.4438 14.7672C12.3024 14.9126 12.2244 15.1082 12.2271 15.3111C12.2298 15.5139 12.3129 15.7074 12.4582 15.849L16.8449 20.1258L15.8085 26.165C15.7842 26.3055 15.7997 26.45 15.8534 26.5821C15.907 26.7142 15.9966 26.8286 16.1119 26.9124C16.2273 26.9962 16.3638 27.046 16.506 27.0561C16.6482 27.0662 16.7904 27.0363 16.9165 26.9698L22.3396 24.1185L27.7627 26.9698C27.9107 27.0486 28.0827 27.0748 28.2475 27.0462C28.663 26.9745 28.9424 26.5805 28.8707 26.165L27.8343 20.1258L32.221 15.849C32.3404 15.732 32.4192 15.5791 32.4431 15.412C32.5076 14.9941 32.2163 14.6072 31.7984 14.5451Z" />
                </svg>
            </div>
            
        </FavoritesButtonWrapper>)
    :(
        <FavoritesButtonWrapperNT>
            <div className='favorites-button'>
                <svg  width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" width="36" height="36" rx="18" fill="#F0F0F0"/>
                    <path fill={check?'#EEBA00':'#B9B9B9'} d="M31.7984 14.5451L25.7353 13.664L23.025 8.16925C22.9509 8.0188 22.8291 7.89702 22.6787 7.82299C22.3014 7.63673 21.8429 7.79195 21.6543 8.16925L18.9439 13.664L12.8808 14.5451C12.7137 14.569 12.5609 14.6478 12.4438 14.7672C12.3024 14.9126 12.2244 15.1082 12.2271 15.3111C12.2298 15.5139 12.3129 15.7074 12.4582 15.849L16.8449 20.1258L15.8085 26.165C15.7842 26.3055 15.7997 26.45 15.8534 26.5821C15.907 26.7142 15.9966 26.8286 16.1119 26.9124C16.2273 26.9962 16.3638 27.046 16.506 27.0561C16.6482 27.0662 16.7904 27.0363 16.9165 26.9698L22.3396 24.1185L27.7627 26.9698C27.9107 27.0486 28.0827 27.0748 28.2475 27.0462C28.663 26.9745 28.9424 26.5805 28.8707 26.165L27.8343 20.1258L32.221 15.849C32.3404 15.732 32.4192 15.5791 32.4431 15.412C32.5076 14.9941 32.2163 14.6072 31.7984 14.5451Z" />
                </svg>
            </div>
        </FavoritesButtonWrapperNT>
    
    )
        
  )
}
