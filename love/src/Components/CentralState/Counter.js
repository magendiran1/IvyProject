
import {connect} from 'react-redux'
import {CounterAction} from './CounterAction'
const Counter = (props) => {
console.log(props)
    return (
        <div>
{props.count}
<button  onClick={props.incrementCount} style={{"color":"red"}}>Increment</button>
        </div>
    )
}

const mapStateToProps =state =>{
    return {
      count :state.count  
    }
}

const mapDispatchToProps =(dispatch)=>{
 return {
     incrementCount :()=>dispatch(CounterAction())
 }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Counter);