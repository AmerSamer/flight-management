import React from 'react';
import Spinner from './Spinner';
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
{/* 
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required /> */}

                {/* <label> */}
                    {/* <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: '15px' }} /> Remember me */}
                {/* </label> */}

                <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

                <div class="clearfix">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn" onClick={addNewUserHandler}>Sign Up</button>
                </div>
            </div>
            {message === 'Succesfully Adding' ? <div style={{ textAlign: 'center' , fontSize: 'larger' , color: 'green'}}>{message}</div> : <div style={{ textAlign: 'center' , fontSize: 'larger' , color: 'red'}}>{message}</div>}
            {/* </form> */}
            {/* <div className="users-details">
                {
                    carsToUsers ? carsToUsers.map((i, index) => {
                        return (
                            <div key={index} >
                                <div className="ui segment">
                                    <div className="ui divided items">
                                        <div className="item">
                                            <div className="image">
                                                {<div style={{
                                                    backgroundImage: `url(${i.imgCar}/${index})`,

                                                    height: '150px',
                                                    width: '150px',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat'
                                                }}></div>}
                                            </div>
                                            <div className="content">
                                                <p><a className="header">nameUser: {i.nameUser}</a></p>
                                                <p> <a className="header">nameCar: {i.nameCar}</a></p>
                                                <div className="meta">
                                                </div>
                                                <div className="extra">
                                                    <p>idUser: {i.idUser}</p>
                                                    <p>idCar: {i.idCar}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        )
                    }) : <Spinner />
                }
            </div> */}
        </div>
    );
}

export default Transfers;
{/* <div>
                                    id: {i.id} name: {i.name} userName: {i.userName} country: {i.country} total Amount: {total[index]}
                                </div>
                                <hr/> */}
{/* {index<users.length-1 ? <hr/>:""} */ }