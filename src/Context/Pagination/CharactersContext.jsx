import { createContext, useContext, useReducer } from "react";
import { reducer, reducerx } from "./CharactersReducer";
import {  CHANGE_STATE,  CHANGE_INFO, CHANGE_PAGE,CHANGE_CHARACTER,CHANGE_NAME,CHANGE_STATUS,CHANGE_GENDER,CLEAR_FILTER,ADD_FAVORITE,DELETE_FAVORITE } from "./CharactersReducer";



export const initialState = {
  selectedCharacter: {
                      "id": 1,
                      "name": "Rick Sanchez",
                      "status": "Alive",
                      "species": "Human",
                      "type": "",
                      "gender": "Male",
                      "origin": {
                        "name": "Earth",
                        "url": "https://rickandmortyapi.com/api/location/1"
                      },
                      "location": {
                        "name": "Earth",
                        "url": "https://rickandmortyapi.com/api/location/20"
                      },
                      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                      "episode": [
                        "https://rickandmortyapi.com/api/episode/1",
                        "https://rickandmortyapi.com/api/episode/2",
                        // ...
                      ],
                      "url": "https://rickandmortyapi.com/api/character/1",
                      "created": "2017-11-04T18:48:46.250Z"
                    },
  actualPage: 0,
  actualname:'',
  actualstatus:'',
  actualspecies:'',
  actualtype:'',
  actualgender:'',
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null
  },
  characters:[

  ],
  favoriteCharacters:[
    
  ]
} 


export const charactersContext = createContext(initialState);

const CharacterState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeState = (value) => {
    dispatch({
      type: CHANGE_STATE,
      payload: { value },
    });
  };
  const changeInfo = (value) => {
    dispatch({
      type: CHANGE_INFO,
      payload: { value },
    });
  };
  const changeSelectedCharacter = (value) => {
    dispatch({
      type: CHANGE_CHARACTER,
      payload: { value },
    });
  };
  const changePage = (value) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: { value },
    });
  };
  const changeName = (value) => {
    dispatch({
      type: CHANGE_NAME,
      payload: { value },
    });
  };
  const changeStatus = (value) => {
    dispatch({
      type: CHANGE_STATUS,
      payload: { value },
    });
  };
  const changeGender = (value) => {
    dispatch({
      type: CHANGE_GENDER,
      payload: { value },
    });
  };
  const clearFilter = (value) => {
    dispatch({
      type: CLEAR_FILTER,
      payload: { value },
    });
  };
  const addFavorite = (value) => {
    dispatch({
      type: ADD_FAVORITE,
      payload: { value },
    });
  };
  const deleteFavorite = (value) => {
    dispatch({
      type: DELETE_FAVORITE,
      payload: { value },
    });
  };

  
  

  return (
      <charactersContext.Provider
        value={{
          state,
          changeInfo,
          changePage,
          changeName,
          changeStatus,
          changeGender,
          clearFilter,
          changeSelectedCharacter,
          changeState,
          addFavorite,
          deleteFavorite
        }}
      >
        {children}
      </charactersContext.Provider>
  );
};

export default CharacterState;
