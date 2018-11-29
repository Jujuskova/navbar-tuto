import React from 'react';

import './toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

class Toolbar extends React.Component {

    showEmailInfo = () => {
        let emailText = document.getElementById('toolbarMailText');
        if (emailText.style.display === "none") {
            emailText.style.display = "inline";
        } else {
            emailText.style.display = "none";
        }
    }

    showPhoneInfo = () => {
        let phoneText = document.getElementById('toolbarPhoneText');
        if (phoneText.style.display === "none") {
            phoneText.style.display = "inline";
        } else {
            phoneText.style.display = "none";
        }
    }

    render() {
        return (
            <header className="toolbar">
            <nav className="toolbar_navigation">
    
                <div className="toolbar-email" onClick={this.showEmailInfo}>
                <i className="fas fa-envelope" ></i>
                <span id="toolbarMailText">contact@3dvp.com</span>
                </div>
                <div className="toolbar-phone" onClick={this.showPhoneInfo}>
                <i className="fas fa-phone"></i>
                <span id="toolbarPhoneText">04 04 04 04 04</span>
                </div>
                <div className="spacer"></div> 
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={this.props.drawerClickHandler}/>
                </div>
                {/* <div className="toolbar_logo"><a href="/" >The LOGO</a></div>*/}
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><a href="#">Pourquoi imprimer en 3D ?</a></li>
                        <li><a href="#">Nos Réalisations</a></li>
                        <li><a href="#">Nos Moyens</a></li>
                        <li><a href="#">Demande de devis</a></li>
                        <li><a href="#">Qui sommes nous ?</a></li>
                        <li><a href="#" className="other-website-button">Achat de matériel</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        )
    }
}



export default Toolbar;