import React, { Component } from 'react';  

class Third extends React.Component {  
    constructor() {  
        super();        
        this.state = { 
            displayBio: true
         };  
        }  
      render() { 
        const bio = this.state.displayBio ? (  
            <div>  
                <p><h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>   
          </div>  
            ) : null;   
         
              return (  
                  <div>  
                     {bio}
                     
                  </div>  
              );  
     }  
}  
export default Third;  