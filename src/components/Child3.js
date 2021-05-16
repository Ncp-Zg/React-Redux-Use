import React from 'react'
import {useDispatch} from "react-redux"
import {increase, increaseByEntered, resetNumber} from "../redux/action-creators/actions"
import {useState} from "react"
import {useSelector} from "react-redux"


function Child3({setState}) {
    const[counter,setCounter]=useState(0)
    

    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(increaseByEntered(counter))
    }

    const handleChange=(e)=>{
        setCounter(Number(e.target.value)) 
    }


    const state = useSelector(state => state)

    const resetNum=(e)=>{
        e.preventDefault();
        dispatch(resetNumber(state))
    }

   

    


    return (
        <div style={{width:200,backgroundColor:'cyan',height:200,margin:10,display:"flex",flexDirection:"column"}}>
            <form onSubmit={handleSubmit}>
                <input type="number" onChange={handleChange} value={counter}/>
                <button type="submit">xxxx</button>
            </form>
            
            
            <button onClick={()=>setState(s=>s+1)}>increase</button>
            <button onClick={()=>dispatch(increase())}>increase by Redux</button>
           

            <form onSubmit={resetNum}>
                <button type="submit">reset</button>
            </form>
        </div>
    )
}

export default Child3
