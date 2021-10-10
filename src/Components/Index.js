// import React, { Component } from 'react'

// class Index extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             name:"salma",
//             age:"30",
//             height:"6.0"
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <p>{this.state.age}</p>
//                 <p>{this.state.height}</p>
                
//             </div>
//         )
//     }
// }

// export default  Index;


// import React from 'react';  

// class Index extends React.Component {  
//  constructor(props) {  
//       super(props);        
//       this.state = { 
//           displayBio: true
//         };  
//         this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  

//       } 
      
//       toggleDisplayBio(){  
//         this.setState(
//             {
//                 displayBio: !this.state.displayBio
//             }

//         );  
//         }  


//       render() {  
      
//         const bio=this.state.displayBio ? (   
//             <div>  
//                 <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>  
//                 <button onClick={this.toggleDisplayBio}> Show Less </button>  
//           </div>  
//             ) : (  
//                 <div>  
//                     <button onClick={this.toggleDisplayBio}> Read More </button>  
//                 </div>  
//             )  
//               return (  
//                   <div>  
//                       <h1> Welcome to JavaTpoint!! </h1>  
//                      {bio}
//                   </div>  
//               );  
//      }  
// }  
// export default Index;  



// import React, { Component } from 'react'

// export default class Index extends Component {
//     constructor(){
//         super();
//         this.state={
//             isMember:true
//         }
//     }
//     render() {

//         const checkUp=this.state.isMember ? 
//         //true
//         (
//             <p>$2.00 </p>
//         ):
//         (
//             <p>$1.00 </p>
//         );

//         return (
//             <div>
//              <h1>salma</h1>   
//              {checkUp}
//             </div>
//         )
//     }
// }



