import React from 'react'
import Logo from './logo.png'
import { Container } from 'reactstrap';
import './header.css'

const Header = () => (
	<header>
		<Container>
			<div className='header__logo'>
				<img src={Logo} alt='Logo Cypress.io' />
			</div>
		</Container>
	</header>
)

export default Header
