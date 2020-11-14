import React from 'react'
import Product from './Product.jsx'

const ProductList = ({products = []}) => {
    return (
        <div style={{display: 'flex'}}>
            {products.length === 0 && <div>Products loadings....</div>}
            {products.map(product => {
                return <Product key={product.id} {...product}/>
            })}
        </div>
    )
}

export default ProductList

