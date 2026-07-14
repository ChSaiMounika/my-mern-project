import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });


  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };


  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await api.post("/auth/register", user);


      alert("Registration Successful ✅");


      navigate("/login");


    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed ❌"
      );

    }

  };


  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>
          🙏 Create Account
        </h2>

        <p>
          Start your divine journey with DarshanEase
        </p>


        <form onSubmit={handleRegister}>


          <input
            className="form-control mb-3"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleChange}
            required
          />


          <input
            className="form-control mb-3"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleChange}
            required
          />


          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Create Password"
            value={user.password}
            onChange={handleChange}
            required
          />


          <button className="btn btn-warning w-100">
            Register
          </button>


        </form>


      </div>

    </div>

  );
}


export default Register;

