import React, { Component } from 'react';

class City extends Component {

    render() {

    return (
      <div className="City">
      <h3>{this.props.city.name}</h3>
      </div>
    );
  }
}

export default City;