import React from 'react';
import './Header.css';
import logo from './logo.svg';

function Header() {
  return <div>
    <header className="header">
		<div className="container-fluid">
			<div className="header__row">
				<div className="header__logo">
					<a href="/">
            <img src={logo} alt="logo"/>
          </a>
				</div>
			</div>
		</div>
	</header>
  </div>
}

export default Header;