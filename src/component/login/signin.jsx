import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Signin = () => {
    return (
        <div className="base-container">
            <div class="form-container sign-in-container">
                <h1>Sign In</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input className="input" type="email" placeholder="Email" />
                <input className="input" type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button className="btn">Sign In</button>

            </div>
            <div class="overlay-container">
		<div class="overlay">
        <div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<Link to='signup'>
                <button class="ghost" id="signUp">Sign Up</button>
                </Link>
            </div>
        </div>
        </div>
        </div>

    )

}
