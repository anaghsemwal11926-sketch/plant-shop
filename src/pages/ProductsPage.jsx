// src/pages/ProductsPage.jsx
import React from 'react';
import plants from '../data/plants';
import ProductCard from '../components/ProductCard';

export default function ProductsPage(){
  const groups = plants.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <div style={{padding:20}}>
      <h2 style={{color:'white'}}>Products</h2>
      {Object.keys(groups).map(cat => (
        <section key={cat} style={{marginBottom:24}}>
          <h3 style={{color:'white'}}>{cat}</h3>
          <div style={{
            display:'grid',
            gap:16,
            gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))'
          }}>
            {groups[cat].map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
