import React from 'react';
import Spinner from './Spinner';
import './style.css';

function Home({ topDeals }) {
    return (
        <div>
            <p style={{ textAlign: 'center', fontSize: '40px' }}>Top Deals for Christmas And New Year's Eve</p>
            {
                topDeals ? topDeals.map((i, index) => {
                    return (
                        <div key={index} >
                            <div className="ui segment">
                                <div className="ui divided items">
                                    <div className="item">
                                        <div className="image">
                                            {<div style={{
                                                backgroundImage: `url(${i.avatar})`,
                                                height: '150px',
                                                width: '150px',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat'
                                            }}></div>}
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
                }) : <Spinner />
            }
        </div>
    );
}
export default Home;