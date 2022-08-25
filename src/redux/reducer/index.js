import { combineReducers } from "redux";
import {productReducer,selected_products} from "./productReducer";
import {CartReducer} from './cartReducer';
const reducer=combineReducers({
    allproducts:productReducer,
    productdetails:selected_products,
    cartItem:CartReducer
})
export default reducer;