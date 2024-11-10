import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFail,
} from "../redux/user/userSlice";
import OAuth from '../components/OAuth';

export default function Login() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user); // State for error message
  const navigate = useNavigate(); // Initialize navigate function
  const dispatch = useDispatch();

  // Update form data as user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("API response data:", data);

      if (data.success === false) {
        dispatch(signInFail(data.message));
        return;
      }

      // If no error message, redirect to login page
      dispatch(signInSuccess(data)); // Dispatch success action with token
      navigate("/login"); // Redirect to login
    } catch (error) {
      dispatch(signInFail(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Login"}
        </button>
          <OAuth/>
      </form>

      <div className="flex gap-2 mt-5"> 
        <p>Don't have an account?</p>
        <Link to="/register">
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>

      {error && (
        <p style={{ color: "red", fontSize: "16px", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
