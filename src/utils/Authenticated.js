import React from 'react';
import {Redirect} from 'react-router-dom'

export default function(WrappedComponent){

	return function(props){
		const token  =  localStorage.getItem('token');

		return token ? <WrappedComponent {...props}/>
			: <Redirect to="/" />
	}
}