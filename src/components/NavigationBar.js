import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
        </ul>
    </div>
);

export default NavigationBar;