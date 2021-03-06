import React, { Component } from 'react'
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import NavItem from './navitem';

import favicon from '../../images/Favicon.svg';


//images
import logo from '../../images/logo.svg'

class Navigation extends Component {

/*   state = {
    screenWidth: null,
    isOpen: false,
  }

	  componentDidMount() {
      this.setState({
        width: window.innerWidth
      });
		  window.addEventListener("resize", this.updateWindowDimensions());
	  }
	  
	  componentWillUnmount() {
		  window.removeEventListener("resize", this.updateWindowDimensions)
	  }
	  
	  updateWindowDimensions = () => {
		 this.setState({ screenWidth: window.innerWidth });
    }
    

  handleMenuToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  } */
  
  render() {
/*     const { screenWidth } = this.state; */
    
/*     const isMobile = screenWidth < 1200; */
    
    return (
      <nav>
        <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
        <div className="container">
            <Link to="/" className="nav__logo">
           {/*    {isMobile ? <img src={favicon} alt="KoppedIt Logo"/> : <img src={logo} alt="KoppedIt Logo"/>} */}
              <img src={logo} alt="KoppedIt Logo"/>
            </Link>
                    {/*  <div className={`hamburger ${this.state.isOpen ? "is-open" : "is-closed"}`} onClick={this.handleMenuToggle}>
              <span className="hamburger__toggle"></span>
            </div> */}
            <ul className="nav">
              <NavItem name="How it works" url="#howitworks" />
              <NavItem name="Why Us" url="#whychooseus" />
              <NavItem name="FAQ" url="#faq" />
            </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation