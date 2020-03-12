import React from 'react';
import { shallow,mount,render } from 'enzyme';
import Card from '../components/Card';

// Shalow permite props, state
// Mount: permite props, state, life cycle
//render: props

describe('<Card/>', () => { // Suite test


    it("Simple rendering", () => {

        const component = shallow(<Card  />)
        expect(component).toMatchSnapshot();
    })


    it("test props", () => {

        const component = shallow(<Card title="prueba" />)
        expect(component.find('.title-link').text()).toBe("prueba")
    })

})
