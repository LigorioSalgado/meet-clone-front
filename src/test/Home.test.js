import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from '../views/Home';
import  { MockedProvider } from '@apollo/react-testing'
import gql from 'graphql-tag';
import wait from 'waait';


const GET_EVENTS = gql`
 {
    allEvents{
      _id
      title
      created_by{
        first_name
      }
      description
    }

  }
`

const mock = [{
    request:{
        query:GET_EVENTS,
    },
    result:{
        data:{
            allEvents:[
                {_id:"sadfsfsdf",title:"prueba",description:"sajdkasdakdhkas"},
                {_id:"sadfsfsdf",title:"prueba",description:"sajdkasdakdhkas"},
                {_id:"sadfsfsdf",title:"prueba",description:"sajdkasdakdhkas"},


            ]
        }
    }
},
]


describe("<Home/>",() => {


    it('Simple Rendering',() => {
        const component = mount(
            <MockedProvider mocks={mock}>
                <Router>
                    <Home/>
                </Router>
            </MockedProvider>
        )
        
        expect(component).toMatchSnapshot();

    })

    it('Complete full request',() => {
        act(() => {
            const executeTests = async() => {

                const component = mount(
                    <MockedProvider mocks={mock}>
                        <Router>
                            <Home/>
                        </Router>
                    </MockedProvider>
                )
                await wait(0)
        
                expect(component.find('h1').text()).toBe('Shop Name');

            }
            executeTests();

        })
       

    })

})