
import { ADD_ITEM , SET_PARENT,SET_SELECTED } from "./type";

const initialState = {
  items: [],
  listItem:[],
  selectedValue:''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
        console.log('anil');
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case SET_PARENT:
      return {
        ...state, 
        listItem:[...state.listItem ,action.payload]
      }
      case SET_SELECTED:
        return {
          ...state, 
          selectedValue:action.payload
        }
    default:
      return state;
  }
};

export default rootReducer;
