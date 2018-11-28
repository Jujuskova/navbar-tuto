import React from 'react';

import './sideDrawer.css'

const SideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
);

export default SideDrawer;