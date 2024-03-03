import { useEffect, useReducer } from "react"

import Hader from "./hader"
import Question from "./question"
import Loader from "./Loader"
import Error from "./Error"
import Start from "./Start"
import Tiyake from "./Tiyake"
import Next from "./Next"
import Progress from "./Progress"
import Finished from "./Finished"
import Time from "./Time"

const initialState = {
    Questions: [] ,
    status:"loading" ,
   index: 0,
   
   answer: null,
   points : 0,
   highScore:0,
   remaingTime:459

 }

function reducer(state,action){
   const question = state.Questions.at(state.index);
//    console.log({"lalal" : question})
    switch (action.type){
        case "getData":
            return{...state,Questions: action.payload, status:"ready"}
        case "dataFaield":
            return{...state,status:"error", error:action.payload}
        case "start":
            return{...state,status:"active" }
        case "inc":
            return{...state, index:state.index + 1,answer: null }
        case "newAnswer":
            // console.log(question)
             
            return{...state,answer:action.payload,points: (action.payload  === question.correctOption ? state.points + question.points : state.points) }

        case "end":
            return{...state,status:"finished",highScore: state.highScore < state.points? state.points : state.highScore}
        case"reset":
          return{...state,points:0,answer:null, index:0, status:"active"}
        case "resetAll":
            return{...initialState,status:"ready",Questions:state.Questions}
        case "track":
            return{...state, remaingTime: state.remaingTime -1 ,status: state.remaingTime === 0 ? "finished": state.status}

        default:
            throw new Error("action Unknown")
    }

}

export default function Quiz() {
    const[state,dispatch] = useReducer(reducer,initialState)

    const numQuestions = state.Questions.length;

    const totlaPoint = state.Questions.reduce((acc,cur)=>{
        return acc + cur.points
    },0)
 
    useEffect(function(){
        async function getQuestion(){
           try{
             const res = await fetch("http://localhost:8000/questions")
             if (!res.ok )
                throw new Error("Question not found")
             
             const data = await res.json();
             dispatch({type:"getData", payload:data})
             if(data.length < 5) throw new Error(res.status +"But Data has less than 5 items")
            //   console.log(data)
           }catch(err){
            // console.log(err.message)
            dispatch({type:"dataFaield" })
           }
          
        }
        getQuestion()

    },[])
  return (
    <div>
<Hader/>

<Question>
    {state.status === "loading" && <Loader/>}
    {state.status === "error" && <Error/>}
    {state.status === "ready" && <Start numQuestions={numQuestions} dispatch={dispatch}/>}
    {state.status === "active" && 
    <>
    <Progress index={state.index} numQuestions={numQuestions} points={state.points} totlaPoint={totlaPoint} answer={state.answer}/>
    <Tiyake  question = {state.Questions[state.index]} dispatch={dispatch} numQuestions={numQuestions} answer={state.answer}/>
    
    
    {state.status === "active"  && 
        <div>
        <Time dispatch={dispatch} remaingTime={state.remaingTime}/>
        <Next dispatch={dispatch} answer={state.answer} numQuestions={numQuestions} index={state.index}/>
        </div>}
    

    </>
    }
    {state.status === "finished" && <Finished totalPoint={totlaPoint} points={state.points} highScore={state.highScore} dispatch={dispatch}/>}
</Question>


    </div>
  )
}
