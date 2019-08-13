import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/images/')
    .then((response) => response.json())
    // .then((images) => this.setState({ images }))
    .then((images) => console.log(images))
    .catch((err) => console.log(err))
  }

  render (){
    return (
      <div>
        <h1>before dynamical rendering of the array of my objects</h1>
        {/* <h1>{this.state.images}</h1> */}
      </div>
    )
  }
};