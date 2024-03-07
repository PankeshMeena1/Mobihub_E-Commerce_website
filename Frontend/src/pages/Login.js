import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaUserPlus,FaGoogle } from 'react-icons/fa'; // Import UserPlus icon from react-icons
import "../css/Login.css"; // Import external CSS file
import { useState } from "react";
 import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [formData, setFormData] = useState({});
    const navi = useNavigate();
  
  
    // Function to handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Function to handle form submission
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
        // Make a POST request to your backend API endpoint
        await axios.post("http://localhost:5000/api/user/login", formData).then((res)=>{
          const { Email } = res.data;
           if (formData.Email === Email) {
            const token = res.data.token;
            localStorage.setItem('token', token);
            navi("/admin_layout/Admin_dashboard");
          }
          else {
            alert("Your email is invalid");
          }
      });
  
  
        // Handle successful login (e.g., redirect to dashboard)
        // alert("Login successful:");
        // navi("/Home");
      } catch (error) {
        // Handle login error (e.g., display error message)
        
        alert("Login failed:");
      }
    };
  
    
    const loginwithgoogle = ()=>{
      window.open("http://localhost:5000/google/callback","_self")
  }
  
    return (
        <div className="container">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1598327105740-820e04db502e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="abc" />
            </div>
            <div className="form">
                <h2>Login Form</h2>

                <div className="input-group">
                    <input type="email"  className='hi' id="email" placeholder="Email" required 
                      name="Email" value={formData.Email} onChange={handleInputChange}/>
                </div>

                <div className="input-group">
                    <input type="password" className='hi' id="password" placeholder="Password" required
                     name="Password" value={formData.Password} onChange={handleInputChange} />
                </div>

                <div className="checkbox">
                    <input type="checkbox" id="keepLoggedIn" />
                    <label htmlFor="keepLoggedIn">Keep me logged in</label>
                </div>
                <button type="button" className="button" onClick={handleFormSubmit}>Login Now</button>

                <div className="or-section">
                    <span className="line"></span>
                    <span className="or">Or</span>
                    <span className="line"></span>
                </div>

                <div className="google-login">
                    <button type="button" className="google-login-btn" onClick={loginwithgoogle}>
                        <FaGoogle className="google-icon" />
                        Login with Google
                    </button>
                </div>

                <div className="register-now">
                    <p>New to our mobile shop? <Link to="/registration">Please register now!! <FaUserPlus /></Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
