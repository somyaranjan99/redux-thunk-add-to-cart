import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import {removeItemCart} from '../redux/action/productAction';
import "./Cart.css"
const Cart=()=>{
    const cart=useSelector((state)=>state.cartItem.cartItem);
    const dispatch=useDispatch()
    const renderEle =cart.map((ele)=>{
        const {category,id,image,price,title}=ele
        return(  <div className="card conatin-img" key={id}>
        <img className="card-img-top" src={image} alt="Card image cap" style={{height:"100px",width:"100px"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{category}</p>
          <p className="card-text">{price}</p>
          <div className="cart mt-4 align-items-center"> 
          <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={()=>dispatch(removeItemCart(id))}>Remove Item</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
        </div>
      </div>)
    })
    return(<>
            {renderEle}
    </>)
}
export default Cart;