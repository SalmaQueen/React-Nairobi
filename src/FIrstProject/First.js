import React from 'react'
import './First.css'
import man from './Images/download.jpeg'


function First() {
  return (
    <div className="first-div">
      <p>Web Designer</p>
     <img src={'https://media.istockphoto.com/photos/while-others-are-sleeping-hes-succeeding-picture-id815666242?b=1&k=20&m=815666242&s=170667a&w=0&h=8UlI8CTjsFqxQiAcB-iTwrfFY6i0cXrTN5A0IYYYqFY='} alt="" />
     <br/>
    <img src={man} alt=""/>
    </div>
  
  );
}

export default First;
