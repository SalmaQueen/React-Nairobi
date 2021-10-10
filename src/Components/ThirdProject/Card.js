import React, { Component } from 'react'
// import './ChildProp.css'

export default class Card extends Component {

    render() {
        return (
            <div className="wrapper">

           <div className="card" style={{width: "18rem"}}>
  <img src="https://images.pexels.com/photos/7536199/pexels-photo-7536199.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 "
   className="card-img-top " width="200" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

                
            </div>
        )
    }
}
