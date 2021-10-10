import React, { Component } from 'react'
import Child from './Child';

//we sill use this object to pass props to the child.
const data=[{
    name:"queen",
    age:"23",
    height:"5.7"
}]

export default class Props extends Component {
    constructor(props){
        super(props);
        this.state= {
            
            name: "Financial Spreadsheets",
            age:"23",
            height:"6.0"
            
            
          };
    }
    render() {
        const items=data.map((item)=>(
            <Child key ={item.id} name={item.name} age={item.age} height={item.height}/>
        ))
        return (
            <div>
                {/* THis is to access the above state */}
               <h1>{this.state.name}</h1> 
                <p>{this.state.age}</p>
                <p>{this.state.height} </p>
           
           {/* This child is to access props, we will put some data in a constant then use the child
           component to wrap up the data */}
            {items}
                
            </div>
        )
    }
}



// import React, { Component } from 'react'
// // import Child from './Child';


// export default class Parent extends Component {
    // constructor(props){
    //     super(props);
    //     this.state= {
            
    //         name: "Financial Spreadsheets",
            
    //       };
    // }
//     render() {
       
//         return (
//             <div>
//                 {/* <Child/> */}
                
//             </div>
//         )
//     }
// }


