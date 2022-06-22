
import axios from "axios"
import { useState, useEffect } from "react"

import MovieList from './MovieList'
const Movies = () => {
    const [movies, setMovies] = useState([])
    // const getMoviesList = () => {

    //     fetch("https://615042b3a706cd00179b73dc.mockapi.io/movies")
    //         .then((res) => res.json())
    //         .then((resdata) => setMovies(resdata))
    //         .catch((e) => setMovies([]))


    // }



    useEffect(() => {
        // fetch("https://615042b3a706cd00179b73dc.mockapi.io/movies")
        //     .then((res) => res.json())
        //     .then((resData) => setMovies(resData))
        //     .catch((e) => setMovies([]))
        const movieSource = axios.CancelToken.source();
        axios.get("https://615042b3a706cd00179b73dc.mockapi.io/movies", { cancelToken: movieSource.token })
            .then((res) => {
                setMovies(res.data)
            })
            .catch(e => setMovies([]))

        return () => {
            movieSource.cancel("Landing Component got unmounted")
        }
    }, [])

    const removeMovie = (id) => {

        let filterMovies = movies.filter((item) => item.id !== id)
        setMovies(filterMovies)

    }

    return (
        <section style={{ margin: '12px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {movies && movies.length > 0 ? movies.map(({ name, poster, rating, summary, id }) => (
                <MovieList key={id} name={name} poster={poster} rating={rating} summary={summary} id={id} removeMovie={removeMovie} />
            )) : <p style={{ color: "red" }}>No Data Found</p>}
        </section>
    )
}

export default Movies;