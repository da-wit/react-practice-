import PropTypes from "prop-types"
import { useEffect } from "react"
// import useRange from "./useRange"

export default function Next({dispatch,index,answer,numQuestions}) {
    useEffect(function(){
        function enter(e){
            if(e.code.toLowerCase() === "ENTER".toLowerCase()){
                if (answer !== null){ 
                    dispatch({type:"inc"})
                }
         
            }
    
        }
         document.addEventListener("keydown",enter)

         return ()=>{
            document.removeEventListener("keydown",enter)
         }
       
    },[dispatch,answer])

   
  if(answer !== null && index < numQuestions -1){
    return <button onClick={()=>dispatch({type:"inc"})}>Next</button>
  }
  if(answer !== null && index === numQuestions -1){
    return <button onClick={()=>dispatch({type:"end"})}>Finish</button>
  }
}
  

Next.propTypes={
  dispatch: PropTypes.func,
   numQuestions: PropTypes.number,
   question: PropTypes.object,
  answer:PropTypes.number,
   index:PropTypes.number

}