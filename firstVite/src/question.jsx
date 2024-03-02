
import PropTypes from "prop-types"
export default function Question({children}) {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", }}>
        {children}
    </div>
  )
}

Question.propTypes ={
  children : PropTypes.any

}