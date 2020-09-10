import React from 'react';
import ReactStars from "react-rating-stars-component";
import MovieCard from './MovieCard'

function Movielist() {
    return(
        <div>
            <MovieCard />
            <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            />
        </div>
    )
}

export default Movielist;