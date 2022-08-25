import { ActionTypes } from "../constants/Actiontypes";
const initialState={
    cartItem:[]
}
export const CartReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.ADD_TO_CART:
            return {...state,
                cartItem:[...state.cartItem,payload]
            }
        case ActionTypes.REMOVE_ITEM_CART:
            console.log(111)
            return {...state,
            cartItem:state.cartItem.filter((ele)=>ele.id !== payload)
            }
        
        default:
            return state
    }
}
