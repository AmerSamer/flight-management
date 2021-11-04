import React from 'react';
// import Spinner from './Spinner';
import './style.css'
function Transfers({ emailHandler , passwordHandler , addNewUserHandler , message }) {
    return (
        <div className="ui container">
            <form style={{ border: '1px solid #ccc' }} />
            <div class="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required onChange={emailHandler} />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required onChange={passwordHandler}/>

                <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

                <div class="clearfix">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn" onClick={addNewUserHandler}>Sign Up</button>
                </div>
            </div>
            {message === 'Succesfully Adding' ? <div style={{ textAlign: 'center' , fontSize: 'larger' , color: 'green'}}>{message}</div> : <div style={{ textAlign: 'center' , fontSize: 'larger' , color: 'red'}}>{message}</div>}
            
        </div>
    );
}

export default Transfers;
