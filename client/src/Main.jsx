import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: null
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/test')
    .then((response) => response.json())
    .then((json) => this.setState({ json: json }))
    .catch((err) => console.log(err))
  }

  render (){
    return (
      <h1>{this.state.json}</h1>
    )
  }
};