import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';



class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Toolbar />
        <SideDrawer />
        <div style={{marginTop: '74px'}}>
          <p>This is the page content !</p>
        </div>
      </div>
    );
  }
}

export default App;
