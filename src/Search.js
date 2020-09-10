import React from 'react';
import ReactStars from "react-rating-stars-component";

function Search() { 
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return(
        <div>
            <input type="text" value="search" />;
            <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            />
        </div>
    )
}

export default Search;