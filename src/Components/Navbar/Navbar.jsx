import React, { useContext, useState } from "react";
import styled from "styled-components";
import {useMediaQuery} from '../Query/MediaQueries'
import BurgerButton from "../BurgerButton/BurgerButton";
import SearchBox from '../SearchBox/SearchBox'
import {charactersContext} from '../../Context/Pagination/CharactersContext'
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../routes";

const NavContainer = styled.div`
    position: relative;
    display:flex ;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    min-width: 100%;
    min-height: 86px;
    background-color: #081F32;

    .text {
        font-size: 18px;
        font-weight: 400;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        text-align: center;
        color: #FFFFFF;
        z-index: 1003;
      }
    .circle {
        height: 8px;
        width: 80%;
        bottom: -18px;
        transform-origin: center;
        position: absolute;
        background-color: #B2DF28;
        transform: scale(0);
        opacity: 0.8;
        border-radius: 15px;
        -webkit-transition: transform 0.3s ease-out;
        -moz-transition: transform 0.3s ease-out;
        -o-transition: transform 0.3s ease-out;
        transition: transform 0.3s ease-out;
    }
    .navlinks-select{
        margin-left:10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    ul > li > a.active > .circle {
      transform: scale(1);
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
    }
    ul li {
      a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        position: relative;
        min-width: 200px;
        min-height: 50px;
        color: white;

        &:hover {
          color: #B2DF28;
        }
        &:hover > .text {
          color: #B2DF28;
        }
        &:hover > .circle {
          transform: scale(1);
          background-color: #B2DF28;
          -webkit-transition: transform 0.3s ease-out;
          -moz-transition: transform 0.3s ease-out;
          -o-transition: transform 0.3s ease-out;
          transition: transform 0.3s ease-out;
        }
        -webkit-transition: color 0.3s ease-out;
        -moz-transition: color 0.3s ease-out;
        -o-transition: color 0.3s ease-out;
        transition: color 0.3s ease-out;
      }
  }
    .searching{
        z-index: 1001;
        position: absolute;
        transform: translate(0,-200%);
        width: 35%; 
        -webkit-transition: transform 0.3s ease-out, width 0.3s ease-out;
        -moz-transition: transform 0.3s ease-out, width 0.3s ease-out;
        -o-transition: transform 0.3s ease-out, width 0.3s ease-out;
        transition: transform 0.3s ease-out, width 0.3s ease-out;
    }
    .searching-on-bar{
        z-index: 1001;
        position: absolute;
        transform: translate(-6vw,0);
        width: 75%;
        -webkit-transition: transform 0.3s ease-out, width 0.3s ease-out;
        -moz-transition: transform 0.3s ease-out, width 0.3s ease-out;
        -o-transition: transform 0.3s ease-out, width 0.3s ease-out;
        transition: transform 0.3s ease-out, width 0.3s ease-out;
    }
`;
const ListMenu = styled.div`
    position: relative;
    display:flex ;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    min-width: 100%;
    min-height: 86px;
    background-color: transparent;
    .navbar-side{
      z-index:1002;
      position: absolute;
      height: auto;
      width: 100vw;
      background-color: #081F32;
      border:1px solid white ;
    }
    .side-nav-closed .navbar-side{
      transform-origin: right;
      transform:translate(-100vw,5%) scaleX(0);
      -webkit-transition: transform 0.3s ease-out;
      -moz-transition: transform 0.3s ease-out;
      -o-transition: transform 0.3s ease-out;
      transition: transform 0.3s ease-out;
    }
    .side-nav-open .navbar-side{
      transform-origin: right;
      transform:translate(-100vw,5%) scaleX(1);
      -webkit-transition: transform 0.3s ease-out;
      -moz-transition: transform 0.3s ease-out;
      -o-transition: transform 0.3s ease-out;
      transition: transform 0.3s ease-out;
    }
    .menu-list{
      
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .menu-item{
        transition: background-color 500ms ease-in-out;
        cursor: pointer;
        padding: 15px;
        position: relative;
        min-width: 180px;
        width: 100%;
        .menu-link{
          transition: color 600ms ease-in-out;
          text-decoration: none;
          color: #6768AB;
        }
        &::after{
          content: '';
          position: absolute;
          left:0;
          bottom:1px;
          width: 100%;
          height: 1.5px;
          background-color: #6768AB;
          transition: background-color 500ms ease-in-out;
        }
        
      }
    .menu-item:hover{
      transition: background-color 500ms ease-in-out;
      background-color: grey;
      
      .menu-link{
        transition: color 600ms ease-in-out;
        color: #1FE8B1;
      }
      &::after{
        transition: background-color 500ms ease-in-out;
        background-color: #1FE8B1;
      }
      
    }
  }
  
  ul > li > a.active {
      transition: background-color 500ms ease-in-out;
      background-color: grey;
  }
`;

export default function Navbar(props) {
    const context = useContext(charactersContext)
    const matches = useMediaQuery('(min-width:1000px)');
    
    const [notburg, changeBurger]= useState(true);
    const handleClick=() => {
        changeBurger(!notburg)
        console.log(notburg)
    }
  
  return (
      <NavContainer>
        <div className={matches?"searching":'searching-on-bar'}>
            <SearchBox/>
        </div>
      {matches?
        (<div className="navlinks-select">
          {/* <BurgerButton notburg={notburg} handleClick={handleClick}/> */}
          <div >
            <ul className="navbar-top-links navbar-side">
              <li>
                <NavLink exact="true" to={ROUTES.CHARACTERSALL}  onClick={context.clearFilter.bind(this,'')}>
                  <div className="circle"></div>
                  <div className="text">All</div>
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to={ROUTES.UNKNOWN} onClick={context.changeStatus.bind(this,'unknown')}>
                  <div className="circle"></div>
                  <div className="text">Unknown</div>
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to={ROUTES.FEMALE} onClick={context.changeGender.bind(this,'female')}>
                  <div className="circle"></div>
                  <div className="text">Female</div>
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to={ROUTES.MALE} onClick={context.changeGender.bind(this,'male')}>
                  <div className="circle"></div>
                  <div className="text">Male</div>
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to={ROUTES.GENDERLESS} onClick={context.changeGender.bind(this,'genderless')}>
                  <div className="circle"></div>
                  <div className="text">Genderless</div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>)
        :
        (
          <ListMenu>
            <BurgerButton notburg={notburg} handleClick={handleClick}/>
            <div className={notburg?'side-nav-closed ':'side-nav-open'}>
              <div className="navbar-side">
                <ul className="menu-list">
                  <li className="menu-item">
                    <NavLink className='menu-link' exact="true" to={ROUTES.CHARACTERSALL} onClick={context.changeGender.bind(this,'')}>
                      <div className="text">All</div>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink className='menu-link' exact="true" to={ROUTES.UNKNOWN} onClick={context.changeGender.bind(this,'unknown')}>
                      <div className="text">Unknown</div>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink className='menu-link' exact="true" to={ROUTES.FEMALE} onClick={context.changeGender.bind(this,'female')}>
                      <div className="text">Female</div>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink className='menu-link' exact="true" to={ROUTES.MALE} onClick={context.changeGender.bind(this,'male')}>
                      <div className="text">Male</div>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink className='menu-link' exact="true" to={ROUTES.GENDERLESS} onClick={context.changeGender.bind(this,'genderless')}>
                      <div className="text">Genderless</div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </ListMenu>
          )
        }
        
        
      </NavContainer>
  );
}
