import React from "react";
import Card from "react-bootstrap/Card";
import data from "../cardInfo.json";
import { Button, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
// animations
import Fade from "react-reveal/Fade";

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
        <Fade bottom>
        <Card className="card">
              <Card.Body>
                <Card.Title className="text-center">{project.name}</Card.Title>
                <Card.Text>&#8264;{project.description}</Card.Text>
              </Card.Body>
              {/* iterate thru images array */}
              <Card.Img className="card-img" variant="top" src={thumbnail[i]} />
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
                <Button>
                  <a href={project.url} target="__blank">
                    View Live
                  </a>
                </Button>
                <Button>
                  <a href={project.gitHub} target="__blank">
                    GitHub
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Fade>
        ))}
      </Container>
    </section>
  );
}

export default Projects;
