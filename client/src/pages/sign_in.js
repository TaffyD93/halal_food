// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Axios from "axios";

export default function SignIn() {

    const [login, setLogin] = useState()
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [usernameLog, setUsernameLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    
    const register = () => {
        Axios.post('http://localhost:3001/register',{
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };

    const logIn = () => {
        Axios.post('http://localhost:3001/login',{
            username: usernameLog,
            password: passwordLog,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            }else{
                setLoginStatus(response.data[0].username);
            }
        });
    };
    
    function isLogin(){
        setLogin(!login)
    }
        if(login===true){
            return(
                <div className="login-container-page">
                    <div className="login-container">
                        <form className="form">
                            <div className="login">
                                <h1>Log in</h1>
                                <input 
                                type="text" placeholder="Enter Username" 
                                onChange={(e) => {
                                    setUsernameLog(e.target.value);
                                }}
                                />
                                <input 
                                type="password" placeholder="Enter Password" 
                                onChange={(e) => {
                                    setPasswordLog(e.target.value);
                                }}
                                />
                                <button className="submit" onClick={logIn}> Log In </button>
                            </div>
                        </form>
                        <button onClick={isLogin}>register</button>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="login-container-page">
                    <div className="login-container">
                        <form className="form">
                            <div className="register">
                                <h1>Register</h1>
                                <input 
                                type="text" placeholder="Create Username" 
                                onChange={(e) => {
                                    setUsernameReg(e.target.value);
                                }}
                                />
                                <input 
                                type="text" placeholder="Create Password" 
                                onChange={(e) => {
                                    setPasswordReg(e.target.value);
                                }}
                                />
                                <button className="submit" onClick={register}> Register </button>
                            </div>
                        </form>
                        <button onClick={isLogin}>login</button>
                    </div>
                    <h1>{loginStatus}</h1>
                </div>
            )
        }       
}