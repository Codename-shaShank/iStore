// import axios from "axios";
// import React,{ useState } from "react";
// import {  useNavigate } from "react-router-dom";
// function Register() {
  
//     const [employeename, setEmployeename] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     async function save(event) {
//         event.preventDefault();
//         try {
//           await axios.post("http://localhost:5002/api/v1/auth/register", {
//           name: employeename,
//           email: email,
//           password: password,
//           });
//           navigate("/home");
//           alert("User Registation Successfully");
         
//         } catch (err) {
//             console.log(err)
//             if(err.response.status === 400){
//               alert("Fill all the details")
//             }else if(err.response.status === 500){
//               alert("Email already exists")
//             }else
//             alert(err.message);
//         }
//       }
  
//     return (
//     <div>
//     <div className="container mt-4" >
//     <div className="card">
//             <h1  style={{textAlign:"center"}}>User Registation</h1>
    
//     <form id="signup-form" className="p-4" >
//         <div className="form-group">
//           <label>User Name</label>
//           <input type="text"  className="form-control" id="employeename" placeholder="Enter Name"
          
//           value={employeename}
//           onChange={(event) => {
//             setEmployeename(event.target.value);
//           }}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input type="email"  className="form-control" id="email" placeholder="Enter Email"
          
//           value={email}
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}
          
//           />
 
//         </div>
//         <div className="form-group">
//             <label>Password</label>
//             <input type="password"  className="form-control" id="password" placeholder="Enter password"
            
//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}
            
//             />
//           </div>
//         <button type="submit" className="btn btn-outline-primary mt-4" onClick={save} >
//         Save      
//         </button>
       
//       </form>
//     </div>
//     </div>
//      </div>
//     );
//   }
  
//   export default Register;

// import axios from "axios";
// import React,{ useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const [employeename, setEmployeename] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   function validateEmail(email) {
//     const emailRegex = /^[\w-\.]+@iiitl\.ac\.in$/;
//     return emailRegex.test(email);
//   }

//   async function save(event) {
//     event.preventDefault();

//     if (!validateEmail(email)) {
//       alert("Please enter a valid IIITL email address.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5002/api/v1/auth/register", {
//         name: employeename,
//         email: email,
//         password: password,
//       });
//       navigate("/home");
//       alert("User Registration Successful");
//     } catch (err) {
//       console.log(err);
//       if (err.response.status === 400) {
//         alert("Fill all the details");
//       } else if (err.response.status === 500) {
//         alert("Email already exists");
//       } else {
//         alert(err.message);
//       }
//     }
//   }

//   return (
//     <div>
//       <div className="container mt-4">
//         <div className="card">
//           <h1 style={{ textAlign: "center" }}>User Registration</h1>

//           <form id="signup-form" className="p-4">
//             <div className="form-group">
//               <label>User Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="employeename"
//                 placeholder="Enter Name"
//                 value={employeename}
//                 onChange={(event) => {
//                   setEmployeename(event.target.value);
//                 }}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(event) => {
//                   setEmail(event.target.value);
//                 }}
//               />
//             </div>
//             <div className="form-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(event) => {
//                   setPassword(event.target.value);
//                 }}
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn btn-outline-primary mt-4"
//               onClick={save}
//             >
//               Save
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;




import axios from "axios";
import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [employeename, setEmployeename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function validateEmail(email) {
    const emailRegex = /^[\w-\.]+@iiitl\.ac\.in$/;
    return emailRegex.test(email);
  }

  async function save(event) {
    event.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid IIITL email address.");
      return;
    }

    try {
      await axios.post("http://localhost:5002/api/v1/auth/register", {
        name: employeename,
        email: email,
        password: password,
      });
      navigate("/home");
      toast.success("User Registration Successful");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) {
        toast.error("Fill all the details");
      } else if (err.response.status === 500) {
        toast.error("Email already exists");
      } else {
        toast.error(err.message);
      }
    }
  }

  return (
    <div>
      <div className="container mt-4">
        <div className="card">
          <h1 style={{ textAlign: "center" }}>User Registration</h1>

          <form id="signup-form" className="p-4">
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                id="employeename"
                placeholder="Enter Name"
                value={employeename}
                onChange={(event) => {
                  setEmployeename(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary mt-4"
              onClick={save}
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
