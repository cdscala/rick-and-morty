import { useContext } from "react";
import styled from "styled-components";
import {charactersContext} from '../Context/Pagination/CharactersContext'
import * as ROUTES from '../routes'
import { NavLink } from "react-router-dom";

const ErrorWrap=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38vh;

  h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: clamp(1.2rem,2.5vw,3rem);
    line-height: 49px;
    text-align: center;
    color: #081F32;
  }
  p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    color: #081F32;
    font-size: clamp(.75rem,1.2vw,1.5rem);
  }
  .error-button{
        display: flex;
        align-items: center;
        justify-content: center;
        width:165px;
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
    .error-button:hover{
        background-color:#1B7F8F;
        -webkit-transition:  background-color 300ms ease-in-out;
        -moz-transition:  background-color 300ms ease-in-out;
        -o-transition:  background-color 300ms ease-in-out;
        transition:  background-color 300ms ease-in-out;
    }
`

export default function ErrorPage(props) {
  const context = useContext(charactersContext)
  const handleClick=() => {
    context.clearFilter.bind(this,'')
    props.setErrorPage(false)
}
  return (
    <ErrorWrap>
      <h1>Uh-oh!</h1>
      <p>Pareces perdido en tu viaje</p>
      <NavLink exact="true" to={ROUTES.CHARACTERSALL} onClick={handleClick}>
          <div className='error-button'>Eliminar filtros</div>
      </NavLink>
    </ErrorWrap>
  );
}