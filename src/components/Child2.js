import React from 'react'
import Child2Child from "./Child2Child"

function Child2({state}) {
    return (
        <div style={{width:200,backgroundColor:'tomato',height:200,margin:10}}>
            Child2
            <p>{state}</p>
            <Child2Child state={state}/>
        </div>
    )
}

export default Child2
