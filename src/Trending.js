import React, { useState, useEffect } from "react";
import axios from "axios";
import TrendingCard from "./TrendingCard";

function Trending() {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=7ef6152a444c38c3338ad6ca46aa51c2`)
        .then(response => {
            setMovies(response.data.results);
            console.log(response.data.results);
        })
        .catch(error => {
            console.log("the data was not returned", error);
        });
    }, [])
    return (
        <>
        {movies.map( film => {
            return <TrendingCard film={film} key={film.id} /> 
         })} 
        </>
    )
}

export default Trending;
