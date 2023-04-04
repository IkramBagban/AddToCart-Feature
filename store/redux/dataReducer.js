
const initialState = {
    carts: [],
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          carts: [...state.carts, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          carts: state.carts.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  