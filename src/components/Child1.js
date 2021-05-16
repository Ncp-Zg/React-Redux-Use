import React from 'react'

function Child1({state}) {
    return (
        <div style={{width:200,backgroundColor:'yellow',height:200,margin:10}}>
            Child1
            <p>{state}</p>
        </div>
    )
}

export default Child1
