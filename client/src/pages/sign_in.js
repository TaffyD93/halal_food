// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function SignIn() {
    return(
        <div className="login-container-page">
            <div className="login-container">
                <form className="form">
                    <div className="register">
                        <h1>Register</h1>
                        <input type="text" placeholder="Create Username" />
                        <input type="text" placeholder="Create Password"/>
                        <button className="submit"> Register </button>
                    </div>
                    <div className="login">
                        <h1>Log in</h1>
                        <input type="text" placeholder="Enter Username" />
                        <input type="password" placeholder="Enter Password" />
                        <button className="submit"> Log In </button>
                    </div>
                </form>
            </div>
        </div>
    )
}