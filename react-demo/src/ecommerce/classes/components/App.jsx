import React from 'react'
import ProductList from './ProductList.jsx'
import * as api from '../utils/api'

const initialProductsState = []

class App extends React.Component {
    constructor(props){
        super(props)
        this.addProducts = this.addProducts.bind(this)
        this.state = { products: initialProductsState }
    }
    
    componentDidMount(){
        api.get('https://wwww.endpoint.com/api/v1/products', this.addProducts)
    }
    
    addProducts(newProducts){
        this.setState({
            ...this.state, 
            products: [
                ...this.state.products,
                ...newProducts,
            ]
        })
    }

    render(){
        const {products} = this.state

        return (
            <div id="app">
                <ProductList products={products}/>
            </div>
        )
    }
}

export default App