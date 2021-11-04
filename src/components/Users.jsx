import React from 'react';
import Spinner from './Spinner'
function Users({ flights, fromInput, toInput, dateDeparture, searchForDealHandler, resultsSearch, addToCartHandler, youShouldLogin }) {
    return (
        <div >
            <p style={{ textAlign: 'center', fontSize: '30px' }}>Look For your own Travil</p>
            <div className='inputs' style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around"
            }}>
                <div className="ui icon input" style={{ padding: '1rem 0' }}>
                    <input type='text' name='from' placeholder='From' onChange={fromInput} />
                    {/* onChange={idSenderHandler} */}
                    <i className="location arrow icon"></i>
                </div>
                <div className="ui icon input" style={{ padding: '1rem 0' }}>
                    <input type='text' name='to' placeholder='To' onChange={toInput} />
                    {/* onChange={cashHandler}  */}
                    <i className="location arrow icon"></i>
                </div>
                <div className="ui icon input" style={{ padding: '1rem 0' }}>
                    <input type='date' name='time' placeholder='' onChange={dateDeparture} />

                    <i className="calendar times outline icon"></i>
                </div>
                {/* <div className="ui icon input" style={{ padding: '1rem 0' }}>
                    <input type='date' name='time' placeholder='' onChange={dateLanding} />
                    <i className="calendar times outline icon"></i>
                </div> */}

                <div style={{ padding: '1rem 0' }}>
                    <input className="ui button"
                        type='button'
                        name='bt'
                        value='Search'
                        onClick={searchForDealHandler}

                    />
                </div>

            </div>
            <div style={{ textAlign: 'center', color: 'red', padding: '20px 0', fontSize: 'larger' }}>
                {youShouldLogin ? youShouldLogin : ''}
            </div>
            <div>
                {
                    resultsSearch && resultsSearch[0] !== 'No Results' ? resultsSearch.map((i, index) => {
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
                                            <div style={{ padding: '5rem 0' }}>
                                                <input className="ui button"
                                                    type='button'
                                                    name='bt'
                                                    value='Add To Cart'
                                                    id={i.id}
                                                    onClick={addToCartHandler}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <div style={{ textAlign: 'center', color: 'red', padding: '20px 0', fontSize: 'larger' }}>No Results! Please Try Again</div>
                    // <Spinner />
                }
            </div>
        </div>
    );
}
export default Users;