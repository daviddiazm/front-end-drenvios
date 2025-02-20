import React from 'react'
import './ProductMinCard.css'

const ProductMinCard = ({ product }) => {

  return (
    <div className="product-card">
      <div className="product-info">
        <h3 className="product-name">{product.name || ''}</h3>
        <p className="product-price">{"$"+product.price || ''}</p>
        <p className="product-category">{product.category || ''}</p>
        <p className="product-description">{product.description || ''}</p>
        <div className="product-tags">
          <p>Tags:</p>
          {product.tags ? product.tags.map((tag, index) => (
            <span key={index} className="product-tag">{tag}</span>
          )) : null}
        </div>
      </div>
    </div>
  )
}

export default ProductMinCard