"use client";
import React from 'react';
import './css/styles.css';

export type ButtonPrimaryProps = {
	title:string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps>  = ({title}) => {
	return (
		<>
			<button >{title}</button>
 		</>
	);
};

export default ButtonPrimary;
