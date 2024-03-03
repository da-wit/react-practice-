import { useEffect } from "react"
import PropTypes from "prop-types"
export default function Time({remaingTime ,dispatch}) {
    const min = Math.floor(remaingTime / 60)

    const sec = remaingTime % 60

    useEffect(function(){
        const count =setInterval(function(){
            dispatch({type:"track"})            
        },1000)
        return ()=>clearInterval(count)
    },[dispatch])
  return (
    <div>{min < 10 && "0"}{min}:{sec < 10 && "0"}{sec}</div>
  )
}

Time.propTypes={
    remaingTime:PropTypes.number,
    dispatch:PropTypes.func,

}