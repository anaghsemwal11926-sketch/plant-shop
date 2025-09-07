// src/pages/CartPage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage(){
  const items = useSelector(s => Object.values(s.cart.items));
  const totalItems = useSelector(s => s.cart.totalItems);
  const totalCost = useSelector(s => s.cart.totalCost);
  const dispatch = useDispatch();

  return (
    <div style={{padding:20}}>
      <h2>Shopping Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total cost: ₹{totalCost.toFixed(2)}</p>

      {items.length === 0 && (
        <div><p>Your cart is empty.</p><Link to="/products"><button>Continue shopping</button></Link></div>
      )}

      {items.map(it => (
        <div key={it.id} style={{display:'flex', gap:12, alignItems:'center', borderBottom:'1px solid #eee', padding:'12px 0'}}>
          <img src={it.thumbnail} alt={it.name} style={{width:80, height:80, objectFit:'cover', borderRadius:6}}/>
          <div style={{flex:1}}>
            <h4>{it.name}</h4>
            <p>Unit price: ₹{it.price.toFixed(2)}</p>
          </div>
          <div>
            <button onClick={() => dispatch(decrementQuantity(it.id))}>−</button>
            <span style={{margin:'0 8px'}}>{it.quantity}</span>
            <button onClick={() => dispatch(incrementQuantity(it.id))}>+</button>
          </div>
          <div><button onClick={() => dispatch(removeFromCart(it.id))}>Delete</button></div>
        </div>
      ))}
    </div>
  );
}
