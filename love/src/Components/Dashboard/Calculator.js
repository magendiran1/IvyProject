
// import { TextField } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import { useState } from 'react';

import './Calculator.css';

// const Calculator = () => {

//     const [num, setNum] = useState("0")




//     const clearfunction =()=>{

//      setNum(0)

//     }

//     const keyboardnum =(e)=>{

//    setNum(num.toString().concat(e))

//     }

//     const addition =() =>{



//     }

//     const module =() =>{

//     }

//     const Division =()=>{

//     }

//     return (

//         <Grid className="calc">
//             <Grid align="center" className='number-list'>

//              <TextField type="text" value={num} fullWidth></TextField>

//                 <Grid className='data-list'>
//                     <Paper onClick={() => clearfunction()} elevation={24} className='input-data'>AC</Paper>
//                     <Paper onClick={addition()}   elevation={24} className='input-data'>+</Paper>
//                     <Paper  onClick={module()} elevation={24} className='input-data'>%</Paper>
//                     <Paper  onClick={Division()} elevation={24} className='input-data'>/</Paper>
//                 </Grid>
//                 <Grid className='data-list'>
//                     <Paper  onClick={()=>keyboardnum(7)} elevation={24} className='input-data'>7</Paper>
//                     <Paper onClick={()=>keyboardnum(8)} elevation={24} className='input-data'>8</Paper>
//                     <Paper onClick={()=>keyboardnum(9)} elevation={24} className='input-data'>9</Paper>
//                     <Paper onClick={()=>keyboardnum(7)} elevation={24} className='input-data'>*</Paper>
//                 </Grid>
//                 <Grid className='data-list'>
//                     <Paper onClick={()=>keyboardnum(4)} elevation={24} className='input-data'>4</Paper>
//                     <Paper onClick={()=>keyboardnum(5)} elevation={24} className='input-data'>5</Paper>
//                     <Paper onClick={()=>keyboardnum(6)} elevation={24} className='input-data'>6</Paper>
//                     <Paper onClick={()=>keyboardnum(7)} elevation={24} className='input-data'>-</Paper>
//                 </Grid>
//                 <Grid className='data-list'>
//                     <Paper onClick={()=>keyboardnum(1)} elevation={24} className='input-data'>1</Paper>
//                     <Paper onClick={()=>keyboardnum(2)} elevation={24} className='input-data'>2</Paper>
//                     <Paper onClick={()=>keyboardnum(3)} elevation={24} className='input-data'>3</Paper>

//                 </Grid>

//                 <Grid className='data-list'>
//                     <Paper onClick={()=>keyboardnum(0)} elevation={24} className='input-data test-vale'>0</Paper>
//                     <Paper elevation={24} className='input-data'>,</Paper>
//                     <Paper elevation={24} colum className='input-data test-vale2'>=</Paper>
//                 </Grid>
//             </Grid>

//         </Grid>

//     )

// }


const Calculator = () => {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ["*", "/", "+", "-", "."]

    const UpdateCalc = (value) => {
debugger;
        if (ops.includes(value) && calc === "" || ops.includes(value) && ops.includes(calc.slice(-1))) {
            return;
        }

        setCalc(calc + value)

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString())
        }
    }
    const createDigits = () => {

        const digits = []
        for (let i = 1; i < 10; i++) {

            digits.push(<button key={i} onClick={() => UpdateCalc(i.toString())} >{i}</button>)
        }
        return digits;
    }

    const Calculate = () => {
        setCalc(eval(calc).toString())
    }

    const Delete = () => {

        if (calc === "") {
            return;
        }
        else {
            let values = calc.slice(0, -1)
            setCalc(values)

        }
    }
    return (
        <div className="app">
            <div className="container">
                <div className="display">
                    {result ? <span>{result}</span> : ""} {calc || "0"}
                </div>
                <div className="operator">
                    <button onClick={() => UpdateCalc('/')} ></button>
                    <button onClick={() => UpdateCalc('*')}>*</button>
                    <button onClick={() => UpdateCalc("+")}>+</button>
                    <button onClick={() => UpdateCalc("-")}>-</button>
                    <button onClick={() => Delete()}>Del</button>

                </div>
                <div className="digits">
                    {createDigits()}
                    <button onClick={() => UpdateCalc("0")}>0</button>
                    <button onClick={() => UpdateCalc(".")}>.</button>
                    <button onClick={() => Calculate()}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
