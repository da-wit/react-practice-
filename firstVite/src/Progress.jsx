import PropTypes from 'prop-types'
export default function Progress({numQuestions,index,totlaPoint,points,answer}) {
  return (
    <div >
      <progress style={{width:"80%" , marginLeft:"150px"}} max={numQuestions} value={index + Number(answer !== null)} ></progress>
      <div style={{display:"flex",justifyContent:"space-between", margin:"2px 100px"}} >
        <p>Question <strong>{index + 1}</strong>/{numQuestions}</p>

        <p>Points <strong>{points}</strong>/ {totlaPoint}</p>
       </div>
    </div>
  )
}

Progress.propTypes={
    numQuestions:PropTypes.number,
    index:PropTypes.number,
    points:PropTypes.number,
    totlaPoint:PropTypes.number,
    answer:PropTypes.number,
}
