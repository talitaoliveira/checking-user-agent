import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return <div>
        <h1>Meu App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    </div>
}

export default Header;