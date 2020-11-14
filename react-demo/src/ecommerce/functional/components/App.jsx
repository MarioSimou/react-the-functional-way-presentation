import React from 'react'
import ProductList from './ProductList.jsx'
import * as api from '../utils/api'
import mapFunctionsToProps from '../utils/mapFunctionsToProps'

export const App = ({fetchProducts, initialProducts, productsEndpoint}) => {
    const [products, setProducts] = React.useState(initialProducts)
    const addProducts = newProducts => setProducts([...products, ...newProducts])

    React.useEffect(() => {
        fetchProducts(productsEndpoint, addProducts)
        return () => setProducts(initialProductsState)
    },[])

    return (
        <div id="app">
            <ProductList products={products}/>
        </div>
    ) 
}

const preloadedProps = (props) => ({
    fetchProducts: api.get,
    initialProducts: [],
    productsEndpoint: 'https://wwww.endpoint.com/api/v1/products',
    ...props
})

export default mapFunctionsToProps(preloadedProps)(App)