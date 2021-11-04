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
import Login from './Login';

const Main = () => {
    let ar = []
    const [flights, setFlights] = React.useState(null);
    const [topDeals, setTopDeals] = React.useState(null);
    const [inputFrom, setInputFrom] = React.useState(null);
    const [inputTo, setInputTo] = React.useState(null);
    const [departureDate, setDepartureDate] = React.useState(null);
    // const [landingDate, setLandingDate] = React.useState(null);
    const [resultsSearch, setResultsSearch] = React.useState(null);
    const [cart, setCart] = React.useState([]);
    const [email, setEmail] = React.useState(null);
    const [psw, setPsw] = React.useState(null);
    const [message, setMessage] = React.useState(null);
    const [users, setUsers] = React.useState(null);
    const [loginEmail, setLoginEmail] = React.useState(null);
    const [loginPsw, setLoginPsw] = React.useState(null);
    const [loginMessage, setLoginMessage] = React.useState(null);
    const [youShouldLogin, setYouShouldLogin] = React.useState(null);

    

    


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
// const dateLanding = (e) => {
//     console.log(e.target.value);
//     setLandingDate(e.target.value)
//  // const foundFirstDeal = flightsDeals.find(element => (element.origin === 'Israel'));
// }
const searchForDealHandler = async () => {
    let arrHelper = []
    //  console.log(inputFrom);
     const foundInputFrom = flights.filter(element => element.origin === inputFrom);
     for (let i = 0; i < foundInputFrom.length; i++) {
        if((foundInputFrom[i].destination === inputTo) && (departureDate < foundInputFrom[i].departureTime)){
            console.log(foundInputFrom[i]);
            arrHelper.push(foundInputFrom[i])
         }         
     }
     arrHelper.length === 0 ? setResultsSearch(['No Results']) : setResultsSearch(arrHelper)
    //  setResultsSearch(arrHelper)
}
const addToCartHandler = (e) => {
    const found = flights.find(val => val.id === e.target.id)
    console.log(found);
    const foundActive = users.find(val => val.active === true)
    // console.log(foundActive.id);
    if((foundActive != null)){
        let temp = [...cart]
        temp.push(found)
        setCart(temp)
    }else{
        setYouShouldLogin('You Should Login To Continue')
    }
  
}
const emailHandler = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value)
}
const passwordHandler = (e) => {
    // console.log(e.target.value);
    setPsw(e.target.value)

}
React.useEffect(() => {
    getDataUsers();
}, [])

const getDataUsers = async () => {
    const response = await axios.get(`https://617c2bf2d842cf001711c288.mockapi.io/users`);
    // console.log(response.data);
    setUsers(response.data)
    // getDeals(response.data)
}
const addNewUserHandler = async () => {
    const found = users.find(element => element.email === email);
    console.log(found);
    if ((email != null) && (psw != null) && (found == null )) {
        let newAction = {
            "email": email,
            "password": psw
        }
        await axios.post(`https://617c2bf2d842cf001711c288.mockapi.io/users`, newAction)
        setMessage('Succesfully Adding')
    }else{
        setMessage('Something went wrong! Please Try Again')
    }
}
const loginEmailHandler = (e) => {
    // console.log(e.target.value);
    setLoginEmail(e.target.value)
}
const loginPasswordHandler = (e) => {
    // console.log(e.target.value);
    setLoginPsw(e.target.value)
}
const loginUserHandler = async () => {
    const found = users.find(element => element.email === loginEmail);
    if ((loginEmail != null) && (loginPsw != null) && (found != null ) && (loginPsw == found.password)) {
        // console.log('loged in');
        let newAction = {
            "active": true
        }
        await axios.put(`https://617c2bf2d842cf001711c288.mockapi.io/users/${found.id}`, newAction)
        setLoginMessage('Succesfully Login')
    }else{
        // console.log('Something went wrong! Please Try Again');
        setLoginMessage('Something went wrong! Please Try Again')
    }
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
                           (flights !== null) ? <Users flights={flights} fromInput={fromInput} toInput={toInput} dateDeparture={dateDeparture} searchForDealHandler={searchForDealHandler} resultsSearch={resultsSearch} addToCartHandler={addToCartHandler} youShouldLogin={youShouldLogin}/>: <Spinner/>
                       }
                    </Route>

                    <Route path="/cart">
                    {
                           (cart !== null) ? <Deposits cart={cart} /> : <Spinner/>
                       }
                        {/* <Deposits cart={cart} /> */}
                    </Route>

                    <Route path="/signUp">
                        {
                            <Transfers emailHandler={emailHandler} passwordHandler={passwordHandler} addNewUserHandler={addNewUserHandler} message={message}/>
                        }
                    </Route>
                    <Route path="/login">
                        {
                            <Login loginEmailHandler={loginEmailHandler} loginPasswordHandler={loginPasswordHandler} loginUserHandler={loginUserHandler} loginMessage={loginMessage}/>
                            // <Transfers emailHandler={emailHandler} passwordHandler={passwordHandler} addNewUserHandler={addNewUserHandler} message={message}/>
                        }
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default Main;