// Acciones
export const CHANGE_STATE = "CHANGE_STATE";
export const CHANGE_INFO = "CHANGE_INFO";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const CHANGE_CHARACTER = "CHANGE_CHARACTER";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const CHANGE_GENDER = "CHANGE_GENDER";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";




// Reducer
export const reducer = (state, { type, payload }) => {
  const { value } = payload;
  switch (type) {
    case CHANGE_INFO:
      return {
        ...state,
        info:value
        
      };
    case CHANGE_PAGE:
      return {
        ...state,
        actualPage:value
        
      };
    case CHANGE_NAME:
      return {
        ...state,
        actualname:value
        
      };
      
    case CHANGE_STATUS:
      return {
        ...state,
        actualstatus:value,
        actualgender:''
        
      };
    case CHANGE_GENDER:
      return {
        ...state,
        actualstatus:'',
        actualgender:value
      };
    case CLEAR_FILTER:
      return {
        ...state,
        actualstatus:'',
        actualgender:''
      };
    case CHANGE_STATE:
      return {
        ...state,
        characters:[...value]
        
      };
    case CHANGE_CHARACTER:
      return {
        ...state,
        selectedCharacter:value
        
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteCharacters:[...state.favoriteCharacters,value]
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favoriteCharacters:state.favoriteCharacters.filter(fav=>fav.id !== value.id)
      };
    
    default:
      return state;
  }
};
