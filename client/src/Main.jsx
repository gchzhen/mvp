import React from 'react';
import Image from './Image.jsx';
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
    // .then((images) => console.log( images ))
    .then((images) => this.setState({ images }))
    .catch((err) => console.log(err))
  }

  render (){
    return (
      <div>
      {
        this.state.images.map((image, i) => {
          return (
            <Image image={image} key={i.toString()}/>
          )
        })
      }
      </div>
    )
  }
};


    // const images = this.state.images
    // return (
    //   {images.map(image => (
    //     <Image
    //       image={image}
    //     />
    //   ))}
    // )
