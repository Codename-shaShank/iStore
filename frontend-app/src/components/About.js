import React from 'react'
import Navbar from './Navbar'

export default function About() {
  return (
    <div>
    <Navbar/>
       <div className="jumbotron jumbotron-fluid" style={{backgroundColor: "#e6f5ff"}}>
        <div className="container">
          <h1 className="display-4">Welcome to Our College <strong><i>istore</i></strong> website</h1>
          <p className="lead">Our mission is to provide a convenient and efficient way for students, faculty, and staff to purchase the items they need for school and daily life.</p>
          <hr className="my-4"/>
          <p>Our team of dedicated students has worked hard to create a platform that is easy to use, secure, and offers a wide range of products. We are proud to say that all of the products available on our site are sourced from trusted suppliers and vendors, ensuring their quality and authenticity.</p>
          <p>As students ourselves, we understand the importance of affordability and accessibility. That's why we strive to keep our prices as low as possible while still maintaining a high standard of quality. We also offer various payment options, including online payment and cash on delivery, to make it easier for everyone to shop with us.</p>
          <p>We believe in transparency and honesty in our business practices, and we welcome any feedback or suggestions from our customers. Your satisfaction is our top priority, and we are committed to providing you with an exceptional shopping experience.</p>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid" style={{backgroundColor: "#ccffcc"}} >
        <div className="container">
          <h1 className="display-4">Meet Our Team of Dedicated Students</h1>
          <p className="lead">We are working hard to make this <strong><i>istore</i></strong> website a success.</p>
          <hr className="my-4"/>
          <ul>
            <li><strong>Mani Rohit</strong> - lcb2022017@iiitl.ac.in</li>
            <li><strong>Jaswanth Reddy</strong> - lci2022010@iiitl.ac.in</li>
            <li><strong>Venkata vamsi</strong> - lcb2022024@iiitl.ac.in</li>
            <li><strong>Roopesh</strong> - lcb2022032@iiitl.ac.in</li>
            <li><strong>J.Shashank</strong> - lcb2022033@iiitl.ac.in</li>
            <li><strong>Shashivardhan</strong> - lci2022018@iiitl.ac.in</li>
          </ul>
        </div>
      </div>
      <div className="jumbotron">
      <div className="container">

        <h1>About Us</h1>
        <p>Here is some information about our organization.</p>
        <p>IIIT Lucknow Address: <br/> Indian Institute of Information Technology Lucknow <br/> Chak Ganjaria, C G City <br/> Lucknow - 226002 <br/> Uttar Pradesh, India</p>
      </div>
      </div>
    </div>
  )
}



