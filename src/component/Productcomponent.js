import React,{useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import "./Productcomponent.css"
import { useDispatch } from 'react-redux/es/exports';
import { fetchProducts,addtoCart } from '../redux/action/productAction';
const Productcomponnent=()=>{
  const dispatch=useDispatch();
  const products=useSelector((state)=>state.allproducts.products)
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])
    const renderCard =  products && products.map((ele)=>{
        const {category,description,id,image,price,rating,title}=ele;
        return(<div className="col-md-4 col-sm-6" key={id}>
        <div className="card mb-30">
            <div className="inner">
            <Link className="btn btn-outline-primary btn-sm" to={`productdetail/${id}`} data-abc="true">

              <div className="main-img"><img src={image} alt={category} /></div></Link>
            </div>
          <div className="card-body text-center">
            <h4 className="card-title">{category}</h4>
            <p className="text-muted">${price}</p>
            <p className='card-text'>{description.substring(0,100)+'...'}</p>
 
            <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={()=>dispatch(addtoCart(ele))}>Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>

          </div>
        </div>
      </div>)
    })
    return(<> 
            {renderCard}
    </>)
}
export default Productcomponnent;