import React from 'react';

import './sideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if(props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
)};

export default SideDrawer;