import React from "react";
import Card from "react-bootstrap/Card";
import data from "../cardInfo.json";
import { Button, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

// importing all images---need to find a better dry method
import echoSystem from "../thumbnail/echoSystemThumb.png";
import solidMoneyThumb from "../thumbnail/solidMoneyThumb.png";
import treesThumb from "../thumbnail/treesThumb.png";
import weatherThumb from "../thumbnail/weatherThumb.jpg";
import netflixClone from "../thumbnail/netflixClone.png";
import triviaThumb from "../thumbnail/triviaThumb.jpg";
import jobSearchThumb from "../thumbnail/jobSearchThumb.jpg";
import microThumb from "../thumbnail/microThumb.jpg";
import menuThumb from "../thumbnail/menuThumb.jpg";
import tinDogThumb from "../thumbnail/tinDogThumb.jpg";
import funThumb from "../thumbnail/funThumb.jpg";
import budgetThumb from "../thumbnail/budgetThumb.jpg";
function Projects() {
  // put all images into an array
  let thumbnail = [
    jobSearchThumb,
    netflixClone,
    triviaThumb,
    echoSystem,
    treesThumb,
    solidMoneyThumb,
    weatherThumb,
    budgetThumb,
    microThumb,
    menuThumb,
    tinDogThumb,
    funThumb,
  ];
  return (
    <section className="project-section pb-5" id="projects">
      <p className="text-center pt-5 mb-5 display-5 text-white">Projects</p>
      {/* cards */}
      {/* iterate thru json to show multiple projects */}

      <Container className="cards-container">
        {data[0].cardData.map((project, i) => (
          <Card className="card">
            {/* iterate thru images array */}
            <Card.Img className="card-img" variant="top" src={thumbnail[i]} />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {/* iterate thru projects tools*/}
              {project.techUse.map((tool, i) => {
                return (
                  <ListGroup.Item>
                    {" "}
                    {i + 1}. {tool}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
            <Card.Body className="project-buttons">
              <Button><a href={project.url} target="__blank">View Live</a></Button>
              <Button><a href={project.gitHub} target="__blank">GitHub</a></Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </section>
  );
}

export default Projects;
