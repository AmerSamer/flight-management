import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div>
            <div className="ui secondary pointing menu">
                <Link className="item" href="/">
                    Home
                </Link>
                <Link className="item" href="/users">
                    Clients
                </Link>
                 <Link className="item" href="/deposits">
                    Vehicle
                </Link>
                {<Link className="item" href="/transfers">
                    Car Client
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