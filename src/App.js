import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Navbar from './components/navbar';



class App extends Component {

  render() {

    return (
      <div style={{height: '100%'}}>
        <Navbar />

      </div>
    );
  }
}

export default App;
