
import PropTypes from 'prop-types'
export default function Finished({points,totalPoint,highScore,dispatch}) {
    const percent = points/ totalPoint * 100;
    let emoji;
    if(percent >= 80){
        emoji = "😁"
    }
    if(percent >= 50 && percent < 80){
        emoji = "😉"
    }
    if(percent >=25 && percent< 50){
        emoji = "👍"
    }
    if(percent> 10 && percent< 25){
        emoji = "😥"
    }
    if(percent <= 10  ){
        emoji = "🤦‍♂️"
    }
    

  return (
    <div>
        <p>{emoji} Your got <strong>{points}</strong> out of the {totalPoint}({Math.ceil(percent)}%) </p>
        <p>HighScore: {highScore} Points</p>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        <button onClick={()=>dispatch({type:"resetAll"})}>Reset with out saving</button>
    </div>
  )
}

Finished.propTypes={
    points:PropTypes.number,
    totalPoint:PropTypes.number,
    highScore:PropTypes.number,
    dispatch:PropTypes.func

}