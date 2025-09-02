import {configureStore} from '@reduxjs/toolkit';
import CartSlices from './Slices/CartSlices';
import CategorySlice from './Slices/CategorySlices';
import SearchSlice from './Slices/searchSlice'
const Store=configureStore({
    reducer:{
        Cart:CartSlices,
Category:CategorySlice,
Search:SearchSlice,
    }
});
export default Store;