import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import './Signup.css'

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const Signup = () => {
    return (
        <Grid item xs={8} md={8}>
    
            <Paper className='paper-signup' elevation={24}>
           
                <Grid align="center">

                    <Avatar style ={{'background':"purle !important"}} > <PersonAddAltOutlinedIcon color="secondary" /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <div className='input-feild'>
                    <PersonAddAltTwoToneIcon />
                    <TextField fullWidth variant="standard" required placeholder='username/Email' label="Email/UserName" />

                </div>
                <div className='input-feild'>
                    <VisibilityOffTwoToneIcon />
                    <TextField fullWidth variant="standard" required placeholder='Password' label="Password" />

                </div>
                <Button className='btn' variant="contained" fullWidth >Sign up</Button>
                <hr />
               
                <div className="social-icons">                    
                <h3 >log in via</h3>
                <div className='social'>
                <FacebookIcon color="secondary" />
                    <InstagramIcon color="success" />
                    <GoogleIcon color="secondary" />
                    </div>
                </div>
            </Paper>
        </Grid>

    )
}

export default Signup;