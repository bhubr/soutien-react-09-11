import React from 'react';
import './Banner.css';

function Banner(props) {
  console.log(props)
  return (
  <div className="Banner">
    <h1>{props.title}</h1>
    <img src = {props.img} alt={props.title} />
  </div>)
}

export default Banner;