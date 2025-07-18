import React from "react";
 export default function ProductList({ products }) {
    return (
        <div className="product-list">
            {products.map(p => (
                <div key={p.id} className="product-card">
                    <h3>{p.name}</h3>
                    <p> Category: {p.category}</p>
                    <p> Brand: {p.brand}</p>
                    <p> Price: ${p.price}</p>
                    </div>
            ))}
            </div>
            );
        }