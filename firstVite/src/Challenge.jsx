import { useReducer } from "react"
import PropTypes from "prop-types"
const initialState ={balance: 0,loan: 0,isActive: true,deposit:0,withdraw:0}

function reducer(state,action){
    switch (action.type){
        case "open":
            return {...state,balance:500 , isActive:false}
        case "deposit":
            return{...state,balance:state.balance + action.payload}
        case "withDraw":
            return{...state,balance: state.balance > 0 ? state.balance - action.payload : state.balance , isActive:state.balance === 0 && true}
        case "loan":
            if(state.loan > 0) return state;
            
            return{...state,loan:state.loan === 0  ? action.payload : state.loan , balance:state.balance + action.payload}
        case "pay":
            return{...state,loan:state.loan !==0 ? state.loan - action.payload : state.loan, balance:state.balance - state.loan}
        case "close":
            if(state.balance !== 0 || state.loan !== 0 )return state
            return(initialState)
        case "inputDeposit":
            return{...state,deposit:action.payload}
        case "inputWithdraw":
            return{...state,withdraw:action.payload}
        default:
            throw new Error("lalala")
    }

}

export default function Challenge(){
    const [{balance,loan,isActive,deposit,withdraw},dispatch] = useReducer(reducer,initialState)

    // console.log(isActive,balance,loan)



    return <div style={{marginLeft:"200px"}}>
        <h1>UseReducer hook Bank account</h1>
        <p>Balance : {balance}</p>
        <p>Loan : {loan}</p>
        <div style={{display:"flex", flexDirection:"column", width:"400px"}}>
            <Open isActive={isActive} dispatch={dispatch}/>
            <Deposit isActive={isActive}  dispatch={dispatch} value={deposit}/>
            <WithDraw isActive={isActive} dispatch={dispatch} value={withdraw}/>
            <Loan  isActive={isActive} dispatch={dispatch}/>
            <Pay   isActive={isActive} dispatch={dispatch}/>
            <Close isActive={isActive} dispatch={dispatch}/>

        </div>

    </div>
}

function Open({isActive,dispatch}){
    return <button onClick={()=>dispatch({type:"open"})} disabled={!isActive}>
        Open
    </button>
}


function Deposit({isActive,dispatch,value}){
    return <div>
        <input value={value } placeholder="enter amount" onChange={(e)=>dispatch({type:"inputDeposit",payload:Number(e.target.value)})} disabled={isActive}/>
        <button onClick={()=>dispatch({type:"deposit", payload:value})} disabled={isActive}>Deposit {value}</button>
    </div>
}
function WithDraw({isActive,dispatch,value}){
    return <div>
        <input value={value } placeholder="enter amount" onChange={(e)=>dispatch({type:"inputWithdraw",payload:Number(e.target.value)})} disabled={isActive}/>

    <button onClick={()=>dispatch({type:"withDraw", payload:50})} disabled={isActive}>Withdraw 50</button>
    </div>
}
function Loan({isActive,dispatch}){
    return <button onClick={()=>dispatch({type:"loan", payload:5000})} disabled={isActive}>Request loan of 5000</button>
}
function Pay({isActive,dispatch}){
    return <button onClick={()=>dispatch({type:"pay" ,payload:5000})} disabled={isActive}>Pay loan</button>
}
function Close({isActive,dispatch}){
    return <button onClick={()=>dispatch({type:"close"})} disabled={isActive}>Close Account</button>
}


Open.propTypes={
    
    isActive:PropTypes.bool,
    dispatch:PropTypes.func,
}
Loan.propTypes={
    isActive:PropTypes.bool,
    dispatch:PropTypes.func
}
Deposit.propTypes={
    value:PropTypes.number,
    isActive:PropTypes.bool,
    dispatch:PropTypes.func
}
Pay.propTypes={
    isActive:PropTypes.bool,
    dispatch:PropTypes.func
}
WithDraw.propTypes={
    value:PropTypes.number,
    isActive:PropTypes.bool,
    dispatch:PropTypes.func
}
Close.propTypes={
    isActive:PropTypes.bool,
    dispatch:PropTypes.func
}