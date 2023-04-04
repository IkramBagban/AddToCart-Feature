// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './features/cart/cartSlice';
import rootReducer from './reducers';
export default configureStore({
  reducer: {
    cart: rootReducer,
  },
});