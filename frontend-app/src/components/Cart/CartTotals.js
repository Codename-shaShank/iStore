import React from 'react';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal,clearCart} = value;
    return <React.Fragment>
    <ToastContainer />
       <div className="container">
           <div className="row">
               <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/buy">
                        <button
                            className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button"
                            onClick={() => {
                                clearCart();
                            }}>
                            clear cart
                        </button>
                    </Link>
                                    
                    <h5>
                        <span className="text-title">Cart Total :</span>
                        <strong>₹{cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">Taxes :</span>
                        <strong>₹{cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">Total :</span>
                        <strong>₹{cartTotal}</strong>
                    </h5>

                    <button
                            className="btn btn-outline-success text-uppercase mb-3 px-5"
                            type="button"
                            onClick={() => { 
                                toast("Proceeding to buy")
                            }}>
                            Proceed to Buy
                        </button>
               </div>
           </div>
       </div>

       </React.Fragment>;
    
}
