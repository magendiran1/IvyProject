

import { useState } from 'react';
import './MoviesList.css'
import Badge from '@mui/material/Badge';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { pink } from '@mui/material/colors';
const MovieList = ({ name, poster, rating, summary, id }) => {


    const [Like, setLikes] = useState(0)
    const [disLike, setDislike] = useState(0);
    const [showDesc,setShowDesc] =useState(true)

    return (
        <div className="container">
            <div>
                <img className="banner" src={poster} alt={name} />
                <div className="content">
                    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                        <h3 className='movie-name'>{name}</h3>
                        {showDesc ? <ExpandLessIcon onClick={()=>setShowDesc(!showDesc)}/> :<ExpandMoreIcon onClick={()=>setShowDesc(!showDesc)}/>}
                        <h2>⭐{rating}/10</h2>
                    </div>
                    {showDesc ? <h4>{summary}</h4>:null}
                    <div className='likes'>
                        <Badge badgeContent={Like} onClick={() => setLikes(Like + 1)} color="success" > <ThumbUpOutlinedIcon color="success" /> </Badge>
                        <Badge badgeContent={disLike} onClick={() => setDislike(disLike + 1)} color="warning"><ThumbDownAltOutlinedIcon sx={{ color: pink[500] }} /></Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieList;