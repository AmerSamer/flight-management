import React from 'react';
import Spinner from './Spinner';
function Deposits({ cart }) {
    // console.log(cart.origin);
    return (
        <div className="ui container">
           {/* {cart.origin} */}
           <p style={{textAlign: 'center' , fontSize:'larger'}}>Your Cart</p>
             <div className="users-details">
                {
                    cart ? cart.map((i, index) => {
                        return (
                            <div key={index} >
                            <div className="ui segment">
                                    <div className="ui divided items">
                                        <div className="item">
                                            <div className="image">
                                                <div style={{
                                                    backgroundImage:`url(${i.avatar})`,
    
                                                    height: '150px',
                                                    width: '150px',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat'
                                                }}></div>
                                            </div>
                                            <div className="content">
                                            <p><a className="header">From: {i.origin}</a></p>
                                            <p> <a className="header">To: {i.destination}</a></p>
                                                <div className="meta">
                                                </div>
                                                <div className="description">
                                                <p>departureTime: {i.departureTime}</p>
                                                    <p>landingTime: {i.landingTime}</p>
                                                </div>
                                                <div className="extra">
                                                <p>airline: {i.airline}</p>
                                                    <p>id Airplan: {i.id}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : ''
                }
            </div> 

        </div>
    );
}

export default Deposits;