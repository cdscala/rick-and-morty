import React,{useContext} from 'react'
import styled from 'styled-components'
import {ReactComponent as Search} from '../../Resouces/Search.svg'
import { useCookies } from 'react-cookie';
import {charactersContext} from '../../Context/Pagination/CharactersContext'

const SearchWrapper= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    min-height: 50px;
    background-color:#081F32 ;
    border-radius: 5px;
    border:2px solid #757575;
    
    .search-icon{
        margin-left:20px;
        & > path{
            fill:#757575;
            -webkit-transition: fill 0.3s ease-out;
            -moz-transition: fill 0.3s ease-out;
            -o-transition: fill 0.3s ease-out;
            transition: fill 0.3s ease-out;
        }
    }
    .search-box{
        background-color: transparent;
        width: 100%;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        border: none;
        margin-left: 15px;
    }
    &:hover,
    &:has(input:focus){
        .search-icon{
            margin-left:20px;
            & > path{
                fill:#FFFFFF;
                -webkit-transition: fill 0.3s ease-out;
                -moz-transition: fill 0.3s ease-out;
                -o-transition: fill 0.3s ease-out;
                transition: fill 0.3s ease-out;
            }
        }
        border:2px solid #FFFFFF;
        -webkit-transition: border 0.3s ease-out;
        -moz-transition:border 0.3s ease-out;
        -o-transition: border 0.3s ease-out;
        transition: border 0.3s ease-out;
    }
    
    input:focus {
        outline: none;
    }
    -webkit-transition: border 0.3s ease-out;
    -moz-transition: border 0.3s ease-out;
    -o-transition: border 0.3s ease-out;
    transition: border 0.3s ease-out;
`


export default function SearchBox() {
    const { state,changeName,changePage } = useContext(charactersContext)
    const [cookies, setCookie] = useCookies(['actuaname','actualPage']);
    const handleChange = (event)=>{
        setCookie('actualPage',1,{ path: '/' })
        changePage(1)
        if (event.target.value.length>1 || event.target.value.length==0){
            setCookie('actualname',event.target.value,{ path: '/' })
            changeName(event.target.value)
        }
        
      }
    return(
        <SearchWrapper>
            <Search className='search-icon'/>
            <input  type="text"
                    placeholder="Buscar Personaje..."
                    name="name"
                    className="search-box"
                    onChange={handleChange}/>
        </SearchWrapper>
  )
}
