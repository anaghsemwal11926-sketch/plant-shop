// src/components/ProductCard.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductCard({ product }) {
  if (!product) return <div style={{color:'red', padding:12}}>⚠️ Product not available</div>;

  const dispatch = useDispatch();
  const inCart = !!useSelector(s => s.cart.items[product.id]);

  return (
    <div style={{
      border:'1px solid #ddd',
      padding:12,
      borderRadius:8,
      textAlign:'center',
      background:'white'
    }}>
      <img src={product.thumbnail} alt={product.name} style={{width:'100%', height:140, objectFit:'cover', borderRadius:6}}/>
      <h4 style={{margin:'8px 0'}}>{product.name}</h4>
      <p style={{margin:'4px 0'}}>₹{product.price.toFixed(2)}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        disabled={inCart}
        style={{padding:'8px 10px', borderRadius:6, cursor: inCart ? 'not-allowed' : 'pointer'}}
      >
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
