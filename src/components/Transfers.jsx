import React from 'react';
import Spinner from './Spinner';
function Transfers({ carsToUsers }) {
    return (
        <div className="ui container">
            {
                console.log(carsToUsers)
            }
            <div className="users-details">
                {
                    
                    carsToUsers ? carsToUsers.map((i, index) => {
                        // console.log(`url(${i.avatar}/${index})`);
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
                                            <p><a className="header">nameUser: {i.nameUser}</a></p>
                                            <p> <a className="header">nameCar: {i.nameCar}</a></p>
                                                <div className="meta">
                                                    {/* <span>Amount: {total[index]}</span> */}
                                                </div>
                                                {/* <div className="description">

                                                    <p>Gold: {i.isGold ? 'Yes' : 'No'}</p>
                                                    <p>available: {i.available  ? 'Yes' : 'No'}</p> 
                                          
                                                </div> */}
                                                <div className="extra">
                                                    <p>idUser: {i.idUser}</p>
                                                    <p>idCar: {i.idCar}</p>
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

        </div>
        // <div>
        //     <div className='sendRecievedInputs'>

        //         <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>

        //             <div class="ui labeled input" style={{padding:'1rem 0'}}>
        //                 <label for="amount" class="ui label">Sender ID</label>
        //                 <input type='number' name='idSender' placeholder='Sender ID' onChange={idSenderFromHandler} />
        //             </div>

        //             <div class="ui labeled input" style={{padding:'1rem 0'}}>
        //                 <label for="amount" class="ui label">Recieve ID</label>
        //                 <input type='number' name='idReciever' placeholder='Recieve ID' onChange={idRecieverToHandler} />
        //             </div>

        //             <div class="ui labeled input" style={{padding:'1rem 0'}}>
        //                 <label for="amount" class="ui label">Amount $</label>
        //                 <input type='number' name='amount' placeholder='Cash amount' onChange={cashActionHandler} />
        //             </div>

        //         </div>


                
        //         <div style={{padding:'1rem 0',display: 'flex', justifyContent: 'space-around' }}>
        //         <input className="ui button"
        //         type='button'
        //         name='bt'
        //         value='Send Cash'
        //         onClick={senderChashToRecieverHandler}
                
        //         />
        //         </div>

        //     </div>
        //     <div>
        //     {wrongMessageTransfer}
        //     </div>
        // </div>
    );
}

export default Transfers;