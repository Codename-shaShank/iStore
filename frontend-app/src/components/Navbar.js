// import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// import logo from '../logo.svg';
// import styled from 'styled-components';
// import {ButtonContainer} from './Button';

// export default class Navbar extends Component {
//     render() {
//         return (
//             <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
//                <Link to='/'>
//                   <img src={logo} alt="store" className="navbar-brand" />
//                </Link> 
//                <ul className="navbar-nav align-items-center">
//                  <li className="nav-item ml-5">
//                     <Link to="/" className="nav-link">
//                        Products
//                     </Link>
//                  </li>
//                </ul>
//                <Link to="/cart" className="ml-auto">
//                   <ButtonContainer>
//                       <i className="fas fa-cart-plus">my cart</i>
//                   </ButtonContainer>
//                </Link>
//             </NavWrapper>
//         )
//     }
// }
// const NavWrapper = styled.nav`
// background:var(--mainBlue);
// .nav-link{
//     color:var(--mainWhite) !important;
//     font-size:1.3 rem;
//     text-transform:capitalize;
// }
// `;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../logo.svg';
// import styled from 'styled-components';
// import { ButtonContainer } from './Button';

// export default class Navbar extends Component {
//   render() {
//     return (
//       <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
//         <Link to="/">
//           <img src={logo} alt="store" className="navbar-brand" />
//         </Link>
//         <ul className="navbar-nav align-items-center">
//           <li className="nav-item ml-5">
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item ml-5">
//             <Link to="/buy" className="nav-link">
//               Products
//             </Link>
//           </li>
//           <li className="nav-item ml-5">
//             <Link to="/about" className="nav-link">
//               About
//             </Link>
//           </li>
//           <li className="nav-item ml-5">
//             <Link to="/sell" className="nav-link">
//               Sell
//             </Link>
//           </li>
//         </ul>
//         <Link to="/cart" className="ml-auto">
//           <ButtonContainer>
//             <i className="fas fa-cart-plus">my cart</i>
//           </ButtonContainer>
//         </Link>
//       </NavWrapper>
//     );
//   }
// }

// const NavWrapper = styled.nav`
//   background: var(--mainBlue);
//   .nav-link {
//     color: var(--mainWhite) !important;
//     font-size: 1.3rem;
//     text-transform: capitalize;
//   }
// `;
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { ButtonContainer } from './Button';

// export default class Navbar extends Component {
//   render() {
//     return (
//       <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
//         <Link to="/">
//           <span className="navbar-brand istore"><b><i></i>iStore</b></span>
//         </Link>
//         <ul className="navbar-nav align-items-center">
//           <li className="nav-item ml-5">
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item ml-5">
//             <Link to="/buy" className="nav-link">
//               Products
//             </Link>
//           </li>
//           <li className="nav-item ml-5">
//             <Link to="/about" className="nav-link">
//               About
//             </Link>
//           </li>
//           <li className="nav-item ml-5">
//             <Link to="/sell" className="nav-link">
//               Sell
//             </Link>
//           </li>
//         </ul>
//         <Link to="/cart" className="ml-auto">
//           <ButtonContainer>
//             <i className="fas fa-cart-plus">my cart</i>
//           </ButtonContainer>
//         </Link>
//       </NavWrapper>
//     );
//   }
// }

// const NavWrapper = styled.nav`
//   background: var(--mainBlue);
//   .navbar-brand.istore {
//     font-family: 'YourCustomFont', sans-serif;
//     font-size: 2rem;
//     /* Additional styling for the attractive appearance */
//     color: var(--mainWhite);
//     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//   }
//   .nav-link {
//     color: var(--mainWhite) !important;
//     font-size: 1.3rem;
//     text-transform: capitalize;
//   }
// `;


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { ButtonContainer } from './Button';

// export default class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeButton: null,
//     };
//   }

//   handleButtonClick = (button) => {
//     this.setState({ activeButton: button });
//   };

//   render() {
//     const { activeButton } = this.state;

//     return (
//       <NavWrapper className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//         <Link to="/">
//           <span className="navbar-brand istore"><strong><b><i>iStore</i></b></strong></span>
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link
//                 to="/"
//                 className={`nav-link ${activeButton === 'home' ? 'active' : ''}`}
//                 onMouseEnter={() => this.handleButtonClick('home')}
//                 onMouseLeave={() => this.handleButtonClick(null)}
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/buy"
//                 className={`nav-link ${activeButton === 'products' ? 'active' : ''}`}
//                 onMouseEnter={() => this.handleButtonClick('products')}
//                 onMouseLeave={() => this.handleButtonClick(null)}
//               >
//                 Products
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/about"
//                 className={`nav-link ${activeButton === 'about' ? 'active' : ''}`}
//                 onMouseEnter={() => this.handleButtonClick('about')}
//                 onMouseLeave={() => this.handleButtonClick(null)}
//               >
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/sell"
//                 className={`nav-link ${activeButton === 'sell' ? 'active' : ''}`}
//                 onMouseEnter={() => this.handleButtonClick('sell')}
//                 onMouseLeave={() => this.handleButtonClick(null)}
//               >
//                 Sell
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <Link to="/cart" className="ml-auto">
//           <ButtonContainer
//             className={`my-cart-button ${activeButton === 'cart' ? 'active' : ''}`}
//             onClick={() => this.handleButtonClick('cart')}
//             onMouseEnter={() => this.handleButtonClick('cart')}
//             onMouseLeave={() => this.handleButtonClick(null)}
//           >
//             <i className="fas fa-cart-plus">my cart</i>
//           </ButtonContainer>
//         </Link>
//       </NavWrapper>
//     );
//   }
// }

// const NavWrapper = styled.nav`
//   background: var(--mainBlue);
//   .navbar-brand.istore {
//     font-family: 'YourCustomFont', sans-serif;
//     font-size: 2rem;
//     /* Additional styling for the attractive appearance */
//     color: var(--mainWhite);
//     text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//   }
//   .nav-link {
//     color: var(--mainWhite) !important;
//     font-size: 1.3rem;
//     text-transform: capitalize;
//     transition: color 0.3s;
//   }
//   .nav-link.active,
//   .nav-link:hover {
//     font-weight: bold;
//     color: var(--lightBlue) !important;
//   }
//   .my-cart-button {
//     background: transparent;
//     border: none;
//     transition: transform 0.3s, box-shadow 0.3s;
//   }
//   .my-cart-button.active,
//   .my-cart-button:hover {
//     transform: scale(1.05);
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
//   }
//   .fas.fa-cart-plus.active,
//   .fas.fa-cart-plus:hover {
//     font-weight: bold;
//     color: var(--lightBlue);
//   }
// `;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: null,
    };
  }

  handleButtonClick = (button) => {
    this.setState({ activeButton: button });
  };

  render() {
    const { activeButton } = this.state;

    return (
      <>
        <NavWrapper className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <Link to="/">
            <span className="navbar-brand istore"><strong><b><i>iStore</i></b></strong></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/home"
                  className={`nav-link ${activeButton === 'home' ? 'active' : ''}`}
                  onMouseEnter={() => this.handleButtonClick('home')}
                  onMouseLeave={() => this.handleButtonClick(null)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/buy"
                  className={`nav-link ${activeButton === 'products' ? 'active' : ''}`}
                  onMouseEnter={() => this.handleButtonClick('products')}
                  onMouseLeave={() => this.handleButtonClick(null)}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${activeButton === 'about' ? 'active' : ''}`}
                  onMouseEnter={() => this.handleButtonClick('about')}
                  onMouseLeave={() => this.handleButtonClick(null)}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sell"
                  className={`nav-link ${activeButton === 'sell' ? 'active' : ''}`}
                  onMouseEnter={() => this.handleButtonClick('sell')}
                  onMouseLeave={() => this.handleButtonClick(null)}
                >
                  Sell
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/cart" className="ml-auto">
          
            <ButtonContainer
              className={`my-cart-button ${activeButton === 'cart' ? 'active' : ''}`}
              onClick={() => this.handleButtonClick('cart')}
              onMouseEnter={() => this.handleButtonClick('cart')}
              onMouseLeave={() => this.handleButtonClick(null)}
            >
              <i className="fas fa-cart-plus">my cart</i>
            </ButtonContainer>
          </Link>
          <Link to="/" className="ml-auto">
          <ButtonContainer>
            Logout
          </ButtonContainer>
          </Link>
        </NavWrapper>
        <ContentWrapper>{this.props.children}</ContentWrapper>
      </>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  z-index: 100;
  /* ... rest of the styles */
`;

const ContentWrapper = styled.div`
  margin-top: 60px; /* Adjust the value based on your navbar's height */
  /* ... other styling properties for the content container */
`;
