import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux/es/exports';
import {selected_products,removeProducts,addtoCart} from '../redux/action/productAction'
import './Productcomponent.css';
const Productdetail=()=>{
    const {productid} =useParams()
    const dispatch =useDispatch()
    const productsDetail= useSelector((state)=>state.productdetails)
    const {category,description,id,image,price,rating,title}=productsDetail;

    useEffect(()=>{
        if(productid && productid !=='')dispatch(selected_products(productid));
        return ()=>{
            dispatch(removeProducts())
        }
        
    },[productid])

    return(<div className="container mt-5 mb-5">
        {Object.keys(productsDetail).length==0?(<div>Loading....</div>): (<div className="row d-flex justify-content-center">
        <div className="col-md-10">
            <div className="card">
                <div className="row">
                    <div className="col-md-6">
                        <div className="images p-3">
                            <div className="text-center p-4"> <img id="main-image" src={image} width="250" /> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Back</span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                            </div>
                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">Orianz</span>
                                <h5 className="text-uppercase">{category}</h5>
                                <div className="price d-flex flex-row align-items-center"> <span className="act-price">${price}</span>
                        
                                </div>
                            </div>
                            <p className="about">{description}</p>
                            <p className="rattings">Ratting:-{rating.rate}</p>   
                            <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={()=>dispatch(addtoCart(productsDetail))}>Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)}
    
</div>)
}
export default Productdetail;