import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';



class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        sideDrawerOpen: false
        }
    }

    drawToggleClickHandler = () => {
        this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
        })
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop clickBackdrop={this.backdropClickHandler}/>
        }
        return (
        <div style={{height: '100%'}}>
            <Toolbar drawerClickHandler={this.drawToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} clickCross={this.backdropClickHandler} />
            {backdrop}

        </div>
        );
    }
}

export default Navbar;