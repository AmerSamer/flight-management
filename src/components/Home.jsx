import React from 'react';
import Spinner from './Spinner';
// import image from './bg.jpg'
import './style.css';

function Home( { dealsGet , timeData} ) {
    return (
        <div>
            {
            // timeData
            dealsGet ? dealsGet.map((i, index) => {
                // console.log(i.first[2]);
                return (
<div key={index} >
                            <div className="ui segment">
                                    <div className="ui divided items">
                                        <div className="item">
                                            <div className="image">
                                                { <div style={{
                                                    backgroundImage: `url(${i.imgCar}/${index})`,
                                                    // <img src="https://placeimg.com/640/480/any">
                                                    // ${i.avatar/${index}}
                                                    height: '150px',
                                                    width: '150px',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat'
                                                }}></div>}
                                            </div>
                                            <div className="content">
                                            <p><a className="header">From: {i.first[2]}</a></p>
                                            <p> <a className="header">To: {i.second[2]}</a></p>
                                                <div className="meta">
                                                    {/* <span>Amount: {total[index]}</span> */}
                                                </div>
                                                <div className="description">

                                                    {/* <p>Gold: {i.isGold ? 'Yes' : 'No'}</p>
                                                    <p>available: {i.available  ? 'Yes' : 'No'}</p>  */}
                                                    <p>{timeData}</p>
                                                </div>
                                                <div className="extra">
                                                    <p>idFrom: {i.first[0]}</p>
                                                    <p>idTo: {i.second[0]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div>
                                    id: {i.id} name: {i.name} userName: {i.userName} country: {i.country} total Amount: {total[index]}
                                </div>
                                <hr/> */}
                                    {/* {index<users.length-1 ? <hr/>:""} */}
                                </div>
                            </div>
                )
            }) : <Spinner />
            }
        </div>
    );
}
// const found = flights.find(element => (element[2] === 'israel') );
export default Home;