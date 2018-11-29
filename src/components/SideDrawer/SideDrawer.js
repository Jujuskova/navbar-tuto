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
            <li><a href="#">Pourquoi imprimer en 3D</a></li>
            <li><a href="#">Nos Réalisations</a></li>
            <li><a href="#">Nos Moyens</a></li>
            <li><a href="#">Demande de devis</a></li>
            <li><a href="#">Qui sommes nous ?</a></li>
            <li><a href="#" className="other-website-button">Achat de matériel</a></li>
        </ul>
    </nav>
)};

export default SideDrawer;