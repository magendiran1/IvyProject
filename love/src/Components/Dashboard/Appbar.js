
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
                <Button onClick={() => history.push('/Calculator')} size="medium" variant="contained">Calculator</Button>
                <Button onClick={() => history.push('/Movies')} size="medium" variant="contained">Movies</Button>
                <Button onClick={() => history.push('/Addmovie')} size="medium" variant="contained">Addmovie</Button>
                <Button   size="medium" variant="contained">Calculator</Button>
                <Button onClick={() => history.push('/Counter')} size="medium" variant="contained">Counter</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar;