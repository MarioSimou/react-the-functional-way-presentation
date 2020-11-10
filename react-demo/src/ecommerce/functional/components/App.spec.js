import {App} from './App.jsx'
import ProductList from './ProductList'
import React from 'react'
import db from '../db.json'

const defaultProps = {
    initialProducts: [],
    productsEndpoint: 'http://www.endpoint.com/api/v1/products',
    fetchProducts: () => null
}

describe('<App/>', () => {
    it('should mount the component', () => {
        const wrapper = shallow(<App {...defaultProps} />)

        expect(wrapper).to.have.lengthOf(1)
        expect(wrapper.find(ProductList)).to.have.lengthOf(1)
    })

    it('should succeed updating the state with the products', sinon.test(function(){
        this.stub(React, 'useEffect')

        const fetchProductsStub = this.stub().resolves(true)
        const wrapper = shallow(<App {...defaultProps} fetchProducts={fetchProductsStub}/>)

        const [useEffectCb] = React.useEffect.firstCall.args
        useEffectCb()
        const [ url, addProducts ] = fetchProductsStub.firstCall.args
        addProducts(db.products)

        expect(React.useEffect).to.have.been.called
        expect(url).to.equal(defaultProps.productsEndpoint)
        expect(wrapper.find(ProductList).prop('products')).to.deep.equal(db.products)
    }))
});
