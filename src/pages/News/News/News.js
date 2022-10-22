import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaStar } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();

  const { title, details, image_url, author, category_id, rating } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-between">
            <p>Author: {author.name}</p>
            <p>Publish Date: {author.published_date}</p>
            <p className="d-flex justify-content-center align-items-center">
              <FaStar className="text-warning me-2"></FaStar> {rating.number}
            </p>
          </div>
        </Card.Text>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All news in this category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
