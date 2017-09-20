import React, { Component } from 'react';

import Nav from './nav';

class NavBar extends Component {
  render() {
    return(
      <div>
        <Nav name='Home'/>
        <Nav name='Products'/>
        <Nav name='Services'/>
      </div>
    )
  }
}

export default NavBar;
