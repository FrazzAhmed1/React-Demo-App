import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => { 
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationMessage, setValidationMessage] = useState(""); 

  const handleLogin = () => { 
    if (phoneNumber.trim() === "") {
      setValidationMessage("Phone number is required.");
      return;
    } 
    else if (phoneNumber.trim() === "+254712345678") {
      setValidationMessage("");
      setPhoneNumber(""); 
      navigate("/main"); 
    } 
    else {
      setValidationMessage("Invalid phone number.");
      return; 
    }
  };
    
  return ( 
    <div className="login-container"> 
      <div className="login-box">
        <h1 className="login-title">Login</h1>

        <input 
          type="text"
          placeholder="Enter phone number" 
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="login-input" 
        /> 

        <button onClick={handleLogin} className="login-button">
          Login
        </button>

        {validationMessage && (
          <p className="error-message">{validationMessage}</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
