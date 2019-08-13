import React from 'react';

const Image = (props) => {
  return (
    <div>
      <img src={props.image.url} />
    </div>
  )
}

export default Image;
