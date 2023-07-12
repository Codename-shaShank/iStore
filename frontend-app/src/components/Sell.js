// import React, { useState } from 'react';

// const Sell = () => {
//   const [productName, setProductName] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);

//   const handleProductNameChange = (event) => {
//     setProductName(event.target.value);
//   };

//   const handlePriceChange = (event) => {
//     setPrice(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setImage(file);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform your logic here for submitting the product data
//     console.log('Product Name:', productName);
//     console.log('Price:', price);
//     console.log('Image:', image);
//     // Reset the form fields
//     setProductName('');
//     setPrice('');
//     setImage(null);
//   };

//   return (
//     <div>
//       <h1>Sell Page</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Product Name:</label>
//           <input type="text" value={productName} onChange={handleProductNameChange} />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input type="text" value={price} onChange={handlePriceChange} />
//         </div>
//         <div>
//           <label>Product Image:</label>
//           <input type="file" onChange={handleImageChange} accept="image/*" />
//         </div>
//         <button type="submit">Sell Product</button>
//       </form>
//     </div>
//   );
// };

// export default Sell;



import React, { useState } from 'react';
import Navbar from './Navbar';

const Sell = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your logic here for submitting the product data
    console.log('Product Name:', productName);
    console.log('Price:', price);
    console.log('Image:', image);
    // Reset the form fields
    setProductName('');
    setPrice('');
    setImage(null);
  };

  return (
    <div >
    <Navbar />
    <div className="container py-5">
      <h1 className="text-center mb-4">Sell Page</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Product Name:</label>
              <input type="text" className="form-control" id="productName" value={productName} onChange={handleProductNameChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price:</label>
              <input type="text" className="form-control" id="price" value={price} onChange={handlePriceChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">Product Image:</label>
              <input type="file" className="form-control" id="productImage" onChange={handleImageChange} accept="image/*" />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Sell Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sell;