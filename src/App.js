import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [userTypeErr, setUserTypeErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});


  

 

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
     setEmail(e.target.value)
  }

  const handleUserType = (e) => {
    setUserType(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

 

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      setName("")
      setEmail("")
      setUserType("")
      setPassword("")
    }
   
  
  }
  
  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const userTypeErr = {};
    const passwordErr = {};

    let isValid = true;


    if (!name.trim()) {
      nameErr.hasError = true;
      nameErr.noName = 'Please enter your name';
      

      isValid = false;
    }
    if (!email) {
      emailErr.hasError = true;
      emailErr.noEmail = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailErr.hasError = true;
      emailErr.invalidEmail = 'Please enter a valid email address';

      isValid = false;
    }

    if (!userType) {
      userTypeErr.hasError = true;
      userTypeErr.noUserType = 'Please select a usertype'

      isValid = false;
    }

    if (!password) {
      passwordErr.hasError = true;
      passwordErr.noPassword = 'Password is required';
    } else if (password.length < 8) {
      passwordErr.hasError = true;
      passwordErr.tooShortPassword = 'Password needs to be 8 characters or more';

      isValid = false;
    }

    setNameErr(nameErr);
    setEmailErr(emailErr);
    setUserTypeErr(userTypeErr);
    setPasswordErr(passwordErr);

    return isValid;

  }

  return (
    <div className="row">
      <div className="column left">
        <div className="theForm">
          <h3>Let's set up your account</h3>
          <p>
            Already have an account? <a href="#">Sign in</a>
          </p>

          <form onSubmit={onSubmit}>
            <div>
              <input 
                type="text"
                placeholder="Your name"
                value={name}
                onChange={handleNameChange}
                className={`form-control ${nameErr.hasError ? 'message' : ''}`}
               
              />
              {Object.keys(nameErr).map((key, index) => {
                return <div key={index} style={{ color: "red", "font-size": "8px" }}>{nameErr[key]}</div>
              })}
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmail}
                className={`form-control ${emailErr.hasError ? 'message' : ''}`}
               
              />
              {Object.keys(emailErr).map((key) => {
                return <div style={{ color: "red", "font-size": "8px" }}>{emailErr[key]}</div>
              })}
            </div>
            <div>
              <select id="usertype" value={userType} onChange={handleUserType} 
                className={`form-control ${userTypeErr.hasError ? 'message' : ''}`}
               >
                <option>I would like to choose my usertype as</option>
                <option value="1">Developer</option>
                <option>Engineer</option>
                <option>Admin</option>
                <option>DevOps</option>
              </select>
              {Object.keys(userTypeErr).map((key, index) => {
                return <div key={index} style={{ color: "red", "font-size": "8px" }}>{userTypeErr[key]}</div>
              })}
            </div>

            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                className={`form-control ${passwordErr.hasError ? 'message' : ''}`}
                 
              />
              {Object.keys(passwordErr).map((key) => {
                return <div style={{ color: "red", "font-size": "8px" }}>{passwordErr[key]}</div>
              })}
              <p className="minimum">Minimum 8 characters</p>
            </div>

            <button className="btn btn-block">
              Next
          </button>
          </form>
          <p className="click">
            By clicking the "Next" button, you agree to creating a free account
            and to <a href="#">Terms of Service </a>and{" "}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
      <div className="column right">
        <div className="dummy">
          <h3>Dummy Heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit.
            Assumenda, bla bla <br></br> reprehenderit nemo iusto unde rem
            eligendi similique
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
