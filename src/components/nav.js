import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    }
  }

  handleClick(option) {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    let linkStyle;
    if (this.state.clicked) {
      linkStyle = {background: 'lightCoral'}
    } else {
      linkStyle = {background: 'white'}
    }
    return(
        <a style={linkStyle}
          onClick={(option) => this.handleClick(option)}>{this.props.name}</a>
    )
  }
}

export default Nav;
