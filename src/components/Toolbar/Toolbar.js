import React from 'react';

import './toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = (props) => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            {/* <div className="toolbar_logo"><a href="/" >The LOGO</a></div>
            <div className="spacer"></div> */}
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="#">Pourquoi imprimer en 3D</a></li>
                    <li><a href="#">Nos Réalisations</a></li>
                    <li><a href="#">Nos Moyens</a></li>
                    <li><a href="#">Demande de devis</a></li>
                    <li><a href="#">Qui sommes nous ?</a></li>
                    <li><a href="#" className="other-website-button">Achat de matériel</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;