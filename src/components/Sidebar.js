import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Emoji from './Emoji';
import './Sidebar.css';

export default (props) => {
	return (
		<Menu>
			<a className='menu-item' href='/'>
				<Emoji symbol='🏠' />
				Home
			</a>
			<a href='/championship' className='menu-item'>
				<Emoji symbol='🏁' />
				Championships
			</a>
			<a href='/driver-standings' className='menu-item'>
				<Emoji symbol='🏎️' />
				Driver Standings
			</a>
			<a href='/constructors-standings' className='menu-item'>
				<Emoji symbol='🔧' />
				Constructor Standings
			</a>
		</Menu>
	);
};
