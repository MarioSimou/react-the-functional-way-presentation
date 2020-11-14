import 'regenerator-runtime'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinonTest from 'sinon-test'

chai.use(sinonChai)

sinon.test = sinonTest(sinon)
global.expect = chai.expect
global.sinon = sinon
global.chai = chai
global.React = React
global.shallow = Enzyme.shallow
global.mount = Enzyme.mount

Enzyme.configure({ adapter: new Adapter() });
