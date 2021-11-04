import React from "react";
import './styleLogin.css'
const Login = ({ loginEmailHandler , loginPasswordHandler , loginUserHandler , loginMessage }) => {
    return (
        <div className="ui container">
            <form />
            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Email" name="uname" required onChange={loginEmailHandler}/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required onChange={loginPasswordHandler}/>

                <button type="submit" onClick={loginUserHandler}>Login</button>
                <label>
                </label>
            </div>
            {loginMessage === 'Succesfully Login' ? <div style={{ textAlign: 'center' , fontSize: 'larger' , color: 'green'}}>{loginMessage}</div> : <div style={{ textAlign: 'center' , fontSize: 'larger' , color: 'red'}}>{loginMessage}</div>}

            <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
            
        </div>
    );
}
export default Login