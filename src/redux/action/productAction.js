import {ActionTypes} from '../constants/Actiontypes'
import Api from '../../apis/api';
export const fetchProducts=()=> async(dispatch)=>{
    const response = await Api.get("/products").catch(err=>console.log(err))
    dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data });
}
export const selected_products=(id)=>async(dispatch)=>{
    const response = await Api.get(`/products/${id}`)
    dispatch({type:ActionTypes.SELECTED_PRODUCTS,payload:response.data})
    
}
export const removeProducts=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}
export const addtoCart=(product)=>(dispatch)=>{
    dispatch({type:ActionTypes.ADD_TO_CART,payload:product})
}
export const removeItemCart=(id)=>(dispatch)=>{
    dispatch({type:ActionTypes.REMOVE_ITEM_CART,payload:id})

}
