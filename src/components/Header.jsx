import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header(){
  const total = useSelector(s => s.cart.totalItems);
  return (
    <header className="header" style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 20px', background:'#0b6', color:'white'}}>
      <div>
        <Link to="/" style={{color:'white', textDecoration:'none'}}><strong>GreenShop</strong></Link>
      </div>
      <nav>
        <Link to="/products" style={{color:'white', marginRight:12}}>Products</Link>
        <Link to="/cart" style={{color:'white'}}>Cart ({total})</Link>
      </nav>
    </header>
  );
}
