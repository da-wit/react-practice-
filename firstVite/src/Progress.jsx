import PropTypes from 'prop-types'
export default function Progress({numQuestions,index}) {
  return (
    <div>
        <p>Question <strong>{index + 1}</strong>/{numQuestions}</p>
    </div>
  )
}

Progress.propTypes={
    numQuestions:PropTypes.number,
    index:PropTypes.number,
}
