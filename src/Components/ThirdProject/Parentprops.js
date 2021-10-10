import React from 'react'
import ChildProp from './ChildProp'

const Data=[
    {
        id:"1",
        name:"collins",
        age:"23"
    },
    {
        id:"2",
        name:"Kemboi",
        age:"25"
    },
    {
        id:"3",
        name:"salma",
        age:"33"
    }
]
const Parentprops =(props) =>{
    return (
        <div>
            {Data.map((item)=>(
                <ChildProp key={item.id} name={item.name} age={item.age} />
            ))}
            
        </div>
    )
}

export default Parentprops
