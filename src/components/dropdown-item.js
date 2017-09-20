import React, { Component } from 'react';

class DropDownItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    }
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover,
    });
  }

  handleClick(option) {
    console.log(this.props.name + ' was selected')
  }

  render() {
    if(this.props.active) {
      let linkStyle;
      if (this.state.hover) {
        linkStyle = {color: 'blue'}
      } else {
        linkStyle = {color: 'black'}
      }
      return(
            <li style={linkStyle}
              onMouseOver={(event) => this.toggleHover(event)}
              onMouseOut={(event) => this.toggleHover(event)}
              onClick={(option) => this.handleClick(option)}>{this.props.name}</li>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default DropDownItem;
