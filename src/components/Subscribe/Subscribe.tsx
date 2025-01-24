"use client";

import logo from './../../assets/images/logo.svg'
import './css/styles.css'
import { ButtonPrimary } from '../utils/buttons/ButtonPrimary';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';	
import { formSchema } from '../../validations/formSchema';
import { useState } from 'react';


const Subscribe: React.FC  = () => {

	const { register,handleSubmit,formState:{errors}} = useForm({
		resolver: zodResolver(formSchema),
	});
    const [validated, setValidated] = useState(false);
	return (
		<div className='form-container'>
             
				<img src={logo} alt="logo"/>
				{!validated ?<>
			  	<h1>subscribe</h1>
				<form onSubmit={handleSubmit(() => {
					if (errors.email) {
						setValidated(false);
					} else {
						setValidated(true);
					}
				})}>
					<input 
					   style={{borderColor: errors.email && 'red'}}
					
					   type="email" 
					   placeholder="Enter Your Email"
			
					   {...register('email', {required: true})} /> 
				
						
					  
					 
					<ButtonPrimary title={'subscribe'}/>
			    </form>
				</>
				: <p className='subscribed'>Thank you for subscribing</p>}
			
 		</div>
	);
};

export default Subscribe;
