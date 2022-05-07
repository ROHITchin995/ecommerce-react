import "./../styles/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const BASE_URL = 'http://13.235.87.215:4000';

function Login() {
    const [showSignup, setShowSignup] = useState(false);
    const [message, setMessage] = useState('');

    const toogleSignup = () => {
        setShowSignup(!showSignup);
    };

    function loginFn(){
        const username =document.getElementById("username");
        const password =document.getElementById("password");
        setMessage('');
        const data = {
            username: username.value,
            password: password.value
        }
        axios.post(BASE_URL + '/api/v1/user/login', data)
        .then(
            function(response){
                if(response.status == 200){
                    localStorage.setItem("username",response.data.username);
                    localStorage.setItem("userId",response.data.id);
                    localStorage.setItem("token",response.data.accessToken);
                }else{
                    setMessage("invalid username or password")
                }
            }
        ).catch(function(error){
            setMessage(error.response.data.message);
        })
    }

    return (
        <div id="loginPage">
            <div id="header">
                <div className="container bg-light py-3">
                    <div className="head-wrapper d-flex justify-content-center align-items-center">
                        <div>
                            <Link to={"/"} className="text-decoration-none text-dark">
                                Ecommerce
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-center">Welcome to Ecommerce</h2>
                        </div>
                        <div>
                        {!showSignup ? (
                            <div className="login-wrapper">
                                <h4 className="text-center">Login</h4>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder="username"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="password"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="submit"
                                        value="Log in as User"
                                        className="btn btn-primary"
                                    />
                                </div>
                                <div className="text-center text-info" onClick={toogleSignup}>
                                    Don't have an account? Signup
                                    <div className="text-danger text-center">{message}</div>
                                </div>
                            </div>
                        ) : (
                            <div className="login-wrapper">
                                <h4 className="text-center">SignUp</h4>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder="username"
                                        className="form-control"
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="password"
                                        className="form-control"
                                    />
                                </div>
                               
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="email"
                                        className="form-control my-1"
                                    />
                               
                                <div className="input-group">
                                    <input
                                        type="submit"
                                        value="Signup as User"
                                        className="btn btn-primary"
                                        onClick={loginFn}
                                    />
                                </div>
                                <div className="text-center text-info" onClick={toogleSignup}>
                                    Already have an account? SignIn
                                </div>
                                <div className="text-danger text-center">{message}</div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
