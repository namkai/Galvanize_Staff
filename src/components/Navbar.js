import React from 'react';
import Input from './Input';
import Logo from '../../style/Galvanize-Galvanize-logomark-text-only-2-2.png';

const Navbar = (props) => {
  return (
	  <nav style={{backgroundColor: '#282723', borderBottom: '1px solid orange'}}>
		  <div className="nav-wrapper">
			  <a href="#" className="brand-logo" style={{display: 'flex'}}>
				  <img style={{height: '45px', marginTop: '8px', marginLeft: '8px'}} src={Logo} alt=""/>
			  </a>
			  <ul id="nav-mobile" className="right hide-on-med-and-down">
				  <form>
					  <div className="input-field">
							  <Input id="search" type="search" required />
							  <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
							  {/*<i className="material-icons">close</i>*/}
					  </div>
				  </form>
			  </ul>
		  </div>
	  </nav>
  );
};

export default Navbar;