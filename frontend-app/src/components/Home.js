// import React from 'react'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

// export const Home = () => {
//   // const randomURl ="https://picsum.photos/1200/800";

//   return (
//     <div >
//     {/* <img src="" alt="" /> */}
//         <div className="container" >
//       <div className="row">
//         <div className="col-md-6">
//           <div className="jumbotron">
//             <h1 className="morph-text">
//               <span className="text">Welcome to <strong><i>istore</i></strong></span>
//               <span className="overlay"></span>
//             </h1>
//             <p className="lead">We have the best products in town!</p>
//             <hr className="my-4"/>
//             <p>Check out our collection and buy something for yourself or your loved ones.</p>
//             <Link to="/about" className="btn btn-primary btn-lg" href="about.html" role="button">Learn more</Link>
//           </div>
//         </div>
//       </div>
//     </div>
  
//     </div>
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export const Home = () => {
  const containerStyle = {
    backgroundImage: "url('https://picsum.photos/1200/800')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div >
    <Navbar/>
        <div style={containerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="jumbotron">
              <h1 className="morph-text">
                <span className="text">Welcome to <strong><i>iStore</i></strong></span>
                <span className="overlay"></span>
              </h1>
              <p className="lead">We have the best products in town!</p>
              <hr className="my-4"/>
              <p>Check out our collection and buy something for yourself or your loved ones.</p>
              <Link to="/about" className="btn btn-primary btn-lg" href="about.html" role="button">Learn more</Link>
              <Link to="/buy" className="btn btn-dark btn-lg mx-1" href="about.html" role="button">Go</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
