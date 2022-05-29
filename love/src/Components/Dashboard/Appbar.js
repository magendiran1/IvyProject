
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import './Appbar.css'
import { useHistory } from 'react-router-dom';
const Appbar = () => {

    const history = useHistory()

    return (
        <AppBar position='static'>
            <Toolbar className='menu_items' >
                <div >
                    <Button onClick={() => history.push('/Calculator')} size="medium" variant="contained">Calculator</Button>
                    <Button onClick={() => history.push('/Movies')} size="medium" variant="contained">Movies</Button>
                    <Button size="medium" variant="contained">Calculator</Button>
                    <Button size="medium" variant="contained">Calculator</Button>
                </div>
                <div  >
                    <Button size="medium" variant="contained">LogOut</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar;