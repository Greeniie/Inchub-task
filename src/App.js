import React, { useState } from "react";


function App() {

 const      [user, setUser] = useState({});
  const      [formErrors, setFormErrors] = useState({});

  return (
    <div className="row">
      <div className="column left">
        <div className="theForm">
          <h3>Let's set up your account</h3>
          <p>
            Already have an account? <a href="#">Sign in</a>
          </p>

          <form className="login">
            <div className="form-control">
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-control">
              <input
                type="email"
                id="email"
                pattern=".+@+."
                placeholder="Email address"
                formNoValidate
              />
            </div>
            <div className="form-control">
              <select id="usertype">
                <option>I would like to choose my usertype as</option>
                <option>Developer</option>
                <option>Engineer</option>
                <option>Admin</option>
                <option>DevOps</option>
              </select>
            </div>

            <div className="form-control">
              <input
                type="password"
                id="pass"
                name="password"
                minlength="8"
                placeholder="Password"
              />
              <p className="minimum">Minimum 8 characters</p>
            </div>

            <button className="btn btn-block">Next</button>
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
