import React from 'react';
import ReactStars from "react-rating-stars-component";
import MovieCard from './MovieCard'
import { CardDeck, Card } from "react-bootstrap";


function Movielist(props) {
    return(
        <CardDeck>
            {
                props.movieList.map(el =><MovieCard el={el}/> )            
            }
            
        </CardDeck>
    )
}

export default Movielist;