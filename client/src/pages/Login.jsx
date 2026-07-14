import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await api.post("/auth/login", {
        email,
        password
      });


      localStorage.setItem(
        "token",
        res.data.token
      );


      if (res.data.user?.role) {
        localStorage.setItem(
          "role",
          res.data.user.role
        );
      }


      alert("Login Successful ✅");


      if (res.data.user?.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }


    } catch (error) {

      console.log(error);
      alert(
        error.response?.data?.message ||
        "Login Failed ❌"
      );

    }
  };


  return (

    <div className="auth-container">

      <div className="auth-card">

        <h2>
          🛕 Welcome Back
        </h2>

        <p>
          Login to book your divine darshan
        </p>


        <form onSubmit={handleLogin}>


          <input
            className="form-control mb-3"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />


          <input
            className="form-control mb-3"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />


          <button className="btn btn-warning w-100">
            Login
          </button>


        </form>


      </div>

    </div>

  );
}


export default Login;

