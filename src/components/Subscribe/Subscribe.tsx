"use client";

import logo from './../../assets/images/logo.svg'
import './css/styles.css'
import { ButtonPrimary } from '../utils/buttons/ButtonPrimary';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';	
import { formSchema } from '../../validations/formSchema';


const Subscribe: React.FC  = () => {

	const { register,handleSubmit,formState:{errors}} = useForm({
		resolver: zodResolver(formSchema),
	});
    handleSubmit(data=>{
	console.log(data)
		
	})
	return (
		<div className='form-container'>

				<img src={logo} alt="logo"/>
			  	<h1>subscribe</h1>
				<form onSubmit={handleSubmit(data=>console.log(data))}>
					<input 
					   style={{borderColor: errors.email && 'red'}}
					
					   type="email" 
					   placeholder="Enter Your Email"
			
					   {...register('email', {required: true})} /> 
				
						{errors.email?.message && <p>{errors.email.message.toString()}</p>}
					  
					 
					<ButtonPrimary title={'subscribe'}/>
			    </form>
				
			
 		</div>
	);
};

export default Subscribe;
