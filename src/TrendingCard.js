import React from "react";
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Col
  } from "reactstrap";

  const TrendingCard = ( { film }) => {
      return (
          <Col xs="6" md="4" xl="3">
        <Card>
        <CardImg top className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${film.backdrop_path}`} alt="Card image cap" />
        <CardBody>
          <CardTitle>{film.title}</CardTitle>
          <CardText>{film.overview}</CardText>
          <CardText>
            <small className="text-muted">{film.release_date}</small>
          </CardText>
        </CardBody>
      </Card>
          </Col>
      )
  }

  export default TrendingCard;