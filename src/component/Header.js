import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
const Header=()=>{
  const cartCount=useSelector((state)=>state.cartItem.cartItem);
    return (<>
    <nav className="navbar navbar-light bg-light cart">
  <Link className="navbar-brand" to="/">
    <h3>Fake Api</h3>
  </Link>
  <div className='cart-item'>
    <Link className='cart-item-show' to="/cartitem">Cart</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    <span>Item count:{cartCount.length}</span>
  </div>
</nav>
    </>)
}
export default Header;