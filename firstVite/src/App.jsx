import { 
  // useEffect,
   useReducer } from 'react'
// 
import './App.css'
import useRange from './useRange'
import PropTypes from 'prop-types';

const initialState = {count:0,range:1}

function reducer(state,action){
   switch(action.type){
    case "dec":
      return{...state, count:state.count - state.range} 
    case "inc":
      return{...state,count:state.count + state.range}
    case "setCount":
      console.log(state)
      return{...state,count:action.payload}
    case "setRange":
      return{...state,range:action.payload}   
    case "res":
      return initialState   
    case "incRange":
      return{...state,range: state.range + 1}
    case "decRange":
      return{...state,range: state.range - 1}
    default:
      throw new Error("Unknown")
   }
  // console.log(state,action)
  // if(action.type=== "dec"){return state - action.payload}
  // if(action.type=== "inc"){return state + action.payload}
  // if(action.type=== "res"){return action.payload}
  // if(action.type=== "setCount"){return action.payload}


}


export default function App(){

  // const [range,setRange] = useState(1)
  // const [count,setCount] = useState(0)
  
  // const initialState = {count:0,range:1}

  const [values,dispatch] = useReducer(reducer , initialState)
  const {count,range} = values
 
 function handleReset(){
  // setRange(1)
  // setCount(0)
  dispatch({type:"res"})

 }


  function handleSub(){
    // setCount(count=> count - range)
    dispatch({type: "dec"})
  }

  function handleAdd(){
    // setCount(count=> count + range)
    dispatch({type: "inc"})
  }
  function handleCount(value){
    // setCount(()=>value)
    dispatch({type:"setCount", payload: value})

  }

  function handleSetRange(value){
    // setRange(()=>value)
    dispatch({type:"setRange", payload:value})
  }

  function handleUpRange(){
    // setRange((range)=>range+1)
    dispatch({type:"incRange"})
  }
  function handleDownRange(){
    if(range > 0){
      dispatch({type:"decRange"})
    }
  }
  // useRange("Escape",setRange)
useRange("Escape",function(){
  dispatch({type:"res"})
  // setRange(0)
  // setCount(1)
})
useRange("ArrowRight",function(){
  handleAdd()
})

useRange("ArrowLeft",function(){
  handleSub()
  
})

useRange("ArrowUp",function(){
  handleUpRange()
})
useRange("ArrowDown",function(){
  handleDownRange()
})



  // useEffect(function(){
  //   function callBack(e){
  //     if(e.code === "Escape"){
  //       setRange(1)
  //     }
  //   }

  //   document.addEventListener("keydown",callBack)

  //   return function(){
  //     document.removeEventListener("keydown",callBack)
  //   }
  // },[])
 
  return <div>
    <Range range={range} handleSetRange={handleSetRange}/>
    <View handleCount={handleCount} count={count} handleAdd={handleAdd} handleSub={handleSub}/>
    <Reset handleReset={handleReset}/>
  </div>
}


function Range({range,handleSetRange}){
  return <div>
    <input type='range' value={range} min={1} max={20} onChange={(e)=>handleSetRange(Number(e.target.value))}/> <span>{range}</span>
  </div>
}
Range.propTypes={
  range : PropTypes.number,
  handleSetRange:PropTypes.func
}


View.propTypes={
  count : PropTypes.number,
  handleCount:PropTypes.func,
  handleAdd:PropTypes.func,
  handleSub:PropTypes.func,
}

function View({handleCount,count , handleAdd ,handleSub}){
  const time = new Date()
  time.setDate(time.getDate() + count)
  
  return <div>
    <Sub handleSub={handleSub}/>
    <Amount handleCount={handleCount} count={count}/>
    <Add handleAdd={handleAdd}/>
    {
      count ?  (count > 0 ? <p>{count} days aways from today is {time.toDateString()}</p> :  <p>{Math.abs(count)} days ago was {time.toDateString()}</p>)
      :
      <p>Today is {time.toDateString()}</p>

    }
   
  </div>

}

function Sub({handleSub}){
  return <button onClick={handleSub}>➖</button>

}
Sub.propTypes={
  handleSub:PropTypes.func
}
function Add({handleAdd}){
  return <button onClick={handleAdd}>➕</button>
}
Add.propTypes={
  handleAdd:PropTypes.func
}
function Amount({handleCount, count}){
  return <input type='text' value={count} onChange={(e)=>handleCount(Number(e.target.value))} />
}
Amount.propTypes={
  handleCount:PropTypes.func,
  count: PropTypes.number
}

function Reset({handleReset}){
  return <button onClick={handleReset}>Reset</button>
}
Reset.propTypes={
  handleReset:PropTypes.func
}