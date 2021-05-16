import React from 'react'
import {useSelector} from "react-redux"

function Child2Child() {
    const state = useSelector(state => state)
    console.log(state)
    return (
        <div style={{width:100,backgroundColor:'yellow',height:100,margin:"auto"}}>
            {state}
        </div>
    )
}

export default Child2Child
