import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const host = "http://localhost:5000";

function Signup(props) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = details;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Account created successfully!", "success");
    } else {
      props.showAlert("invalid details!", "danger");
    }
  };

  const onChange = (event) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            autoComplete="username"
            value={details.name}
            onChange={onChange}
          />
          <div id="name" className="form-text">
            Enter Username
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            autoComplete="username"
            value={details.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            autoComplete="current-password"
            onChange={onChange}
            value={details.password}
            required
            minLength={5}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            autoComplete="current-password"
            onChange={onChange}
            value={details.cpassword}
            required
            minLength={5}
          />
        </div>

        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
