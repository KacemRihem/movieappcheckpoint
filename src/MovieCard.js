import React from "react";
import ReactStars from "react-rating-stars-component";
import { CardDeck, Card } from "react-bootstrap";

function MovieCard({el}) {
  return (
    <div className="movie">
        <Card>
          <Card.Img
            variant="top"
            src={el.image}
          />
          <Card.Body>
            <Card.Title>
              {el.title}
            </Card.Title>
            <Card.Text>
                {el.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <ReactStars count={5} size={24} edit={false} value ={el.rating} activeColor="#ffd700" />
            </small>
          </Card.Footer>
        </Card>
        
      ;
    </div>
  );
}

export default MovieCard;
