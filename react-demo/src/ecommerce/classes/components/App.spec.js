import App from './App'
import ProductList from './ProductList'
import db from '../db.json'
import * as api from '../utils/api'

describe('<App/>', () => {
    beforeEach(() => {
        sinon.stub(api, 'get').returns(true)
    })
    afterEach(() => {
        api.get.restore()
    })

    it('should mount the component', () => {
        const wrapper = shallow(<App />)

        expect(wrapper).to.have.lengthOf(1)
        expect(wrapper.find(ProductList)).to.have.lengthOf(1)
    })

    it('should succeed updating the state with the products', () => {
        const wrapper = shallow(<App/>)
        const [url, addProducts] = api.get.firstCall.args

        expect(url).to.equal('https://wwww.endpoint.com/api/v1/products')

        addProducts(db.products)

        expect(wrapper.state()).to.deep.equal({products: db.products})
    })
});
