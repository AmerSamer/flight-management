import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div>
            <div className="ui secondary pointing menu">
                <Link className="item" href="/">
                    Home
                </Link>
                <Link className="item" href="/search">
                    Search Travil
                </Link>
                 <Link className="item" href="/cart">
                    Cart 🛒
                </Link>
                {<Link className="item" href="/signUp">
                    Sign Up
                </Link> }
                {/* <div className="right menu">
                    <a className="ui item" href="www.google.com">
                        Logout
                    </a>
                </div> */}
            </div>
            <div className="ui segment">
                <p style={{ textAlign: 'center' }}>Welcome to Flights Management</p>
            </div>
        </div>
    );
};

export default Header;