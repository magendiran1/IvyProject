import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import {useHistory} from 'react-router-dom'
const Addmovie = () => {

    const [name, setName] = useState("")
    const [rating, setRating] = useState("")
    const [summary, setSummary] = useState("")
    const [poster, setPoster] = useState("")
    const history = useHistory()
    const newMoviesAdd = () => {
        const updatedMovie = { name, rating, summary, poster }
        debugger;
        fetch('https://615042b3a706cd00179b73dc.mockapi.io/movies',
            {
                method: "POST",
                body: JSON.stringify(updatedMovie),
                headers:{ "Content-Type": "application/json"}
            })
        history.push('/Movies')

    }

    return (
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100vh',
            justifyContent: 'center'
        }}>
            <h1>New Movies Data</h1>
            <Paper elevation={24} >
                <TextField fullWidth variant="standard" margin="normal" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter movie name" />
                <TextField fullWidth variant="standard" margin="normal" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="enter rating" />
                <TextField fullWidth variant="standard" margin="normal" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="enter Summary" />
                <TextField fullWidth variant="standard" margin="normal" value={poster} onChange={e => setPoster(e.target.value)} placeholder="enter Poster" />
                <Button onClick={newMoviesAdd}>Add Movie</Button>
            </Paper>
        </Container>
    )
}

export default Addmovie;