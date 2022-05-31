import { Button, TextField } from "@mui/material";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";

import { useHistory,useParams } from "react-router-dom";
const EditMovie = () => {

    let {id} =useParams()
console.log(id)

const [editMovie ,setEditMovie] =useState(null)


useEffect(()=>{
    fetch(`https://615042b3a706cd00179b73dc.mockapi.io/movies/${id}`)
    .then(res =>res.json())
    .then(resdata=>setEditMovie(resdata))
    .catch(err =>console.log(err,"testing"))
},[])

// console.log(editMovie)

    return (
        <div>
        {editMovie? <UpdatedMovieDetails movie ={editMovie} />:"" }  
        </div>
    )
}


const UpdatedMovieDetails =({movie})=>{

    const [name, setName] = useState(movie.name)
    const [rating, setRating] = useState(movie.rating)
    const [summary, setSummary] = useState(movie.summary)
    const [poster, setPoster] = useState(movie.poster)
    
    // console.log(name,rating,summary,poster)

const history =useHistory()
    const editedMovie =()=>{

        let finalMovie ={name,rating,summary,poster}

        fetch(`https://615042b3a706cd00179b73dc.mockapi.io/movies/${movie.id}`,
        {
            method:"PUT",
            body:JSON.stringify(finalMovie),
            headers:{"Content-Type":"application/json"}
    }).then(()=>history.push('/Movies'))

    }

    return(
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100vh',
            justifyContent: 'center'
        }}>
            <h1>EDits Movies Data</h1>
            <Paper elevation={24} >
                <TextField fullWidth variant="standard" value={name}  onChange={(e)=>setName(e.target.value)} margin="normal" placeholder="enter movie name" />
                <TextField fullWidth variant="standard" value={rating} onChange={(e)=>setRating(e.target.value)} margin="normal" placeholder="enter rating" />
                <TextField fullWidth variant="standard" value={summary} onChange={(e)=>setSummary(e.target.value)} margin="normal" placeholder="enter Summary" />
                <TextField fullWidth variant="standard" value={poster} onChange={(e)=>setPoster(e.target.value)} margin="normal" placeholder="enter Poster" />
                <Button onClick={editedMovie} >Add Movie</Button>
            </Paper>
        </Container>
    )
}



export default EditMovie;