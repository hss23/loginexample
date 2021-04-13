import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Signup=()=> {
    return (
        <div className="base-container">
            <div class="form-container sign-up-container">
                <h1>Create Account</h1>
                <div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			    </div>
                <span>or use your email for registration</span>
                <input className="input" type="text" placeholder="Name" />
			    <input className="input" type="email" placeholder="Email" />
			    <input className="input" type="password" placeholder="Password" />
			    <button className="btn">Sign Up</button>
            </div>
            <div class="overlay-container">
		<div class="overlay">
        <div class="overlay-panel overlay-right">
				<h1>Welcome Back!!</h1>
				<p>Enter your personal details and start journey with us</p>
				<Link to=''>
                <button class="ghost" id="signIn">SignIn</button>
                </Link>
            </div>
        </div>
        </div>
    </div>
    )
}