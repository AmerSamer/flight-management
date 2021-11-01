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
    const [topDeals, setTopDeals] = React.useState(null);
    const [inputFrom, setInputFrom] = React.useState(null);
    const [inputTo, setInputTo] = React.useState(null);
    const [departureDate, setDepartureDate] = React.useState(null);
    const [landingDate, setLandingDate] = React.useState(null);
    // const [cars, setCars] = React.useState(null);
    // const [carsToUsers, setCarsToUsers] = React.useState(null);

    React.useEffect(() => {
        getDataFlights();
    }, [])

    const getDataFlights = async () => {
        const response = await axios.get(`https://617c2bf2d842cf001711c288.mockapi.io/flights`);
        // console.log(response.data);
        setFlights(response.data)
        getDeals(response.data)
    }
   const getDeals = (flightsDeals) => {
       let arrayyHelper = []
    const foundFirstDeal = flightsDeals.find(element => (element.origin === 'Israel'));
    const foundSecondDeal = flightsDeals.find(element => ((element.origin === 'Israel') && ( foundFirstDeal.id != element.id )));
    const foundThirdDeal = flightsDeals.find(element => ((element.origin === 'Israel') && ( foundFirstDeal.id != element.id ) && ( foundSecondDeal.id != element.id )));
    arrayyHelper.push(foundFirstDeal , foundSecondDeal , foundThirdDeal)
    setTopDeals(arrayyHelper)
   }
   const fromInput = (e) => {
       console.log(e.target.value);
       setInputFrom(e.target.value)
    // const foundFirstDeal = flightsDeals.find(element => (element.origin === 'Israel'));
   }
   const toInput = (e) => {
    console.log(e.target.value);
    setInputTo(e.target.value)
 // const foundFirstDeal = flightsDeals.find(element => (element.origin === 'Israel'));
}
const dateDeparture = (e) => {
    console.log(e.target.value);
    setDepartureDate(e.target.value)
 // const foundFirstDeal = flightsDeals.find(element => (element.origin === 'Israel'));
}
const dateLanding = (e) => {
    console.log(e.target.value);
    setLandingDate(e.target.value)
 // const foundFirstDeal = flightsDeals.find(element => (element.origin === 'Israel'));
}
    return (
        <div className="ui container ">
            <div className="ui segment">

                {/* main menu */}
                <Header />

                <div className="ui segment">
                    <Route path="/">
                       {
                           (topDeals !== null) ? <Home topDeals={topDeals}/> : <Spinner/>
                       }
                        
                    </Route>

                    <Route path="/search">
                    {
                           (flights !== null) ? <Users flights={flights} fromInput={fromInput} toInput={toInput} dateDeparture={dateDeparture} dateLanding={dateLanding}/> : <Spinner/>
                       }
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