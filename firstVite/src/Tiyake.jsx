import PropTypes from 'prop-types';

export default function Tiyake({question,dispatch,answer }) {
  console.log(question)
  return (
    <div>
        <h2>{question.question}</h2>
        {question.options.map((option, index)=>( 
          <Answer op={option} index={index}  key={option} dispatch={dispatch} answer={answer} question={question} />
          
        ))}

        
    </div>
  )
}

Tiyake.propTypes = {
  question: PropTypes.object,
  option: PropTypes.array,
  dispatch:PropTypes.func,
  numQuestions: PropTypes.number,
  answer:PropTypes.number
}


function Answer({op,dispatch,index,question,answer}){
  return <div style={{display:"flex", flexDirection:'column' , margin:"10px 20%"}}>
  <button className={`btn ${index === answer ? "select" : ""} ${answer !== null? (index === question.correctOption ? "correct" : "wrong ") : ""}`} disabled={answer}
    onClick={()=>dispatch({type:"newAnswer", payload:index})}>{op}</button>
  </div>
}

Answer.propTypes={
  op: PropTypes.string,
  dispatch:PropTypes.func,
  index:PropTypes.number,
  question:PropTypes.object,
  answer:PropTypes.number
}

