import PropTypes from 'prop-types';
export default function Start({numQuestions,dispatch}) {
  return (
    <div>
      <h1>Welcome to React Quiz</h1>
      <h3> {numQuestions} Questions to test your react mastery </h3>
      <button onClick={()=>dispatch({type:"start"})} >Let`s Start</button>
    </div>
  );
}

Start.propTypes ={
  numQuestions: PropTypes.number,
  dispatch: PropTypes.func

}

