export const initialCartState = {
  items: JSON.parse(localStorage.getItem("cart") || '[]'), 
  isLoading: false,
  error: null,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'SET_ITEMS_FROM_LOCAL':
        localStorage.setItem("cart", JSON.stringify(action.payload));
        return { ...state, items: action.payload };

    case 'FETCH_CART_SUCCESS':
    case 'UPDATE_CART_SUCCESS':
    case 'CLEAR_CART_SUCCESS':
      return { ...state, items: action.payload, isLoading: false, error: null };
      
    case 'CART_OPERATION_FAILURE':
        return { ...state, isLoading: false, error: action.payload };
        
    case 'LOGOUT_CLEAR':
        localStorage.removeItem("cart");
        return { ...state, items: initialCartState.items }; 

    default:
      return state;
  }
};