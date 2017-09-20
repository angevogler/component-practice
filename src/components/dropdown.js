import React, { Component } from 'react';

import DropDownItem from './dropdown-item';

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuActive: false,
    }
  }

  toggleMenu(ev) {
    if (this.state.menuActive === false) {
      this.setState({
        menuActive: true,
      });
    } else {
      this.setState({
        menuActive: false,
      });
    }
  }

  render() {

    return (
      <div>
      <p onClick={ () => this.toggleMenu()}>File</p>
        <ul>
          <DropDownItem active={this.state.menuActive} name='New'/>
          <DropDownItem active={this.state.menuActive} name='Save'/>
          <DropDownItem active={this.state.menuActive} name='Exit'/>
        </ul>
      </div>
    )
  }
}

export default DropDown;
