
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';

import './Loginpage.css'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import { Button, Typography } from '@mui/material';
import Link from '@mui/material/Link';


import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import PersonIcon from '@mui/icons-material/Person';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';

import {useHistory} from 'react-router-dom'
function Loginpage() {


    let history =useHistory()
    return (
        <Grid>
            <Paper elevation={24} className="paper-cont">
                <Grid align="center">
                    <Avatar className='avatar' ><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <div className='input-field'>
                    <PersonIcon />
                    <TextField  label="user name" type="text" variant="standard" required placeholder=' enter your name' fullWidth />
                </div>
                <div className='input-field'>
                    <VisibilitySharpIcon />
                <TextField label="password" type="password" variant="standard" required placeholder=' enter your password' fullWidth />
                </div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                <Button className='btn' type='submit' variant="contained" fullWidth>Sign In</Button>
                <Typography className='forgot-account'>
                    <Link href='#' underline="none">Forgot Password ?</Link>
                </Typography>
                <Typography className='forgot-account'>Do you have an account ?
                    <Link href='#' underline="none" onClick={()=>history.push('/Signup')}>Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>

    )
}

export default Loginpage;