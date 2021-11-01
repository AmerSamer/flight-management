import React from 'react';
import Spinner from './Spinner'
function Users({ flights , fromInput , toInput  , dateDeparture , dateLanding}) {
    return (
        <div >
            <p style={{textAlign: 'center' , fontSize: '30px'}}>Look For your own Travil</p>
            <div className='inputs' style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around"
            }}>
                <div className="ui icon input" style={{ padding: '1rem 0' }}>
                    <input type='text' name='from' placeholder='From' onChange={fromInput}/>
                    {/* onChange={idSenderHandler} */}
                    <i className="location arrow icon"></i>
                </div>
                <div className="ui icon input" style={{ padding: '1rem 0' }}>
                    <input type='text' name='to' placeholder='To' onChange={toInput}/>
                    {/* onChange={cashHandler}  */}
                    <i className="location arrow icon"></i>
                </div>
                <div className="ui icon input" style={{ padding: '1rem 0' }}>
                    <input type='date' name='time' placeholder='' onChange={dateDeparture}/>
                     
                    <i className="calendar times outline icon"></i>
                </div>
                <div className="ui icon input" style={{ padding: '1rem 0' }}>
                    <input type='date' name='time' placeholder='' onChange={dateLanding}/>
                    {/* onChange={cashHandler}  */}
                    <i className="calendar times outline icon"></i>
                </div>

                <div style={{ padding: '1rem 0' }}>
                    <input className="ui button"
                        type='button'
                        name='bt'
                        value='Search'
                    // onClick={adminChashToAccountHandler}

                    />
                </div>
            </div>
            {/* <div>
        {wrongMessage}
        </div> */}
        </div>
    );
}

export default Users;