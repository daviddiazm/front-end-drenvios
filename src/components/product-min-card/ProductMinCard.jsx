import React, { useEffect, useState } from 'react'
import './ProductMinCard.css'

const ProductMinCard = ({ product, userSelected, porductId }) => {
  const [listProducts, setListProducts] = useState([])
  const [wasBougth, setWasBougth] = useState(false)

  const newPrice = (price) => {
    return price * 0.15
  }

  const getProdcuts = () => {
    if (userSelected) {
      setListProducts(userSelected.products)
      // console.log(listProducts);
    }
  }

  const findIfIsBuy = () => {
    if(listProducts.length <= 0) {
      setWasBougth(false)
    }
    
    listProducts.forEach(element => {
      if (element == product._id) {
        setWasBougth(true)
        return
      } else {
        setWasBougth(false)
        return
      }
    });
  }

  useEffect(() => {
    getProdcuts()
    findIfIsBuy()
  })


  return (
    <div className="product-card">
      <div className="product-info">
        <h3 className="product-name">{product.name || ''}</h3>
        {wasBougth ? <p className='comprado' >Articulo Comprado!</p> : null}
        {
          userSelected && userSelected.isSpecialUser ?
            <div>
              <p className={`product-price ${userSelected.isSpecialUser ? 'special' : ''}`} >{"$" + product.price || ''} </p>
              <p className="product-price">{"$" + newPrice(product.price) || ''}</p>
            </div>
            : <p className="product-price">{"$" + product.price || ''}</p>
        }
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