import React from 'react';
import Home from './Home';
import Users from './Users';
import Deposits from './Deposits';
import Transfers from './Transfers';
import Route from './Route';
import Header from './Header';
import axios from 'axios';
import './style.css';
import Spinner from './Spinner';

const Main = () => {
    // let idFoundArray = []
    const [flights, setFlights] = React.useState(null);
    const [timeData, setTimeData] = React.useState(null);
    const [dealsGet, setDealsGet] = React.useState(null);
    // const [cars, setCars] = React.useState(null);
    // const [carsToUsers, setCarsToUsers] = React.useState(null);

    React.useEffect(() => {
        getDataFlights();
    }, [])

    const getDataFlights = async () => {
        const response = await axios.get(`https://opensky-network.org/api/states/all`);
        console.log(response.data);
        setFlights(response.data.states)
        setTimeData(response.data.time)
        getDeals(response.data.states , response.data.time)
    }
   const getDeals = (flightss , time) => {
       let arrayyHelper = []
    const foundFirstDeal = flightss.find(element => (element[2] == 'Israel'));
    const foundSecondDeal = flightss.find(element => ((element[2] == 'Israel') && ( foundFirstDeal[0] != element[0] )));
    const foundThirdDeal = flightss.find(element => ((element[2] == 'Israel') && ( foundFirstDeal[0] != element[0] ) && ( foundSecondDeal[0] != element[0] )));
    const foundFourthDeal = flightss.find(element => ((element[2] == 'Italy') ));
    const foundFifthDeal = flightss.find(element => ((element[2] == 'France') ));
    const foundSixthDeal = flightss.find(element => ((element[2] == 'Spain') ));
    arrayyHelper.push({first:foundFirstDeal, second:foundFourthDeal} , {first:foundSecondDeal , second:foundFifthDeal} , {first:foundThirdDeal , second:foundSixthDeal})
    console.log(arrayyHelper);
    // console.log(foundFirstDeal);
    // console.log(foundSecondDeal);
    // console.log(foundThirdDeal);
    // console.log(foundFourthDeal);
    // console.log(foundFifthDeal);
    // console.log(foundSixthDeal);
    // console.log(time);
    timeConvert(time)
    setDealsGet(arrayyHelper)
   }
   const timeConvert = (time) => {
    // const unixTimestamp = 1575909015

    const milliseconds = time * 1000 // 1575909015000

    const dateObject = new Date(milliseconds)

    const timeHuman =  dateObject.toLocaleString(); //2019-12-9 10:30:15
    setTimeData(timeHuman)
   }
    return (
        <div className="ui container ">
            <div className="ui segment">

                {/* main menu */}
                <Header />

                <div className="ui segment">
                    <Route path="/">
                       {
                           ((dealsGet !== null) && (timeData !== null)) ? <Home dealsGet={dealsGet} timeData={timeData}/> : <Spinner/>
                       }
                        
                    </Route>

                    <Route path="/users">
                        {/* <Users /> */}
                    </Route>

                    <Route path="/deposits">
                        {/* <Deposits /> */}
                    </Route>

                    <Route path="/transfers">
                        {
                            // carsToUsers ? <Transfers carsToUsers={carsToUsers}/> : <Spinner/>
                        }
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default Main;