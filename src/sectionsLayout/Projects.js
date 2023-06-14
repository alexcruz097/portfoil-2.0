import React from "react";
import Card from "react-bootstrap/Card";
import data from "../cardInfo.json";
import { Button, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
// importing gif
import github from "../image-icons/github.gif";
import liveGif from "../image-icons/live-video.gif";
import important from "../image-icons/important.gif";
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
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from "react-awesome-reveal";
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
            <Card.Body>
            <Fade direction="up"  >
              <Card.Title className="text-center card-title">
                {project.name}
              </Card.Title>
            
              <Card.Text className="card-description">
                <img src={important} />
                {project.description}
              </Card.Text>
              </Fade>
            </Card.Body>
            {/* iterate thru images array */}
            <JackInTheBox>
            <a src={project.url}>
              <Card.Img className="card-img" variant="top" src={thumbnail[i]} />
            </a>
            </JackInTheBox>
            <ListGroup className="list-group-flush">
              {/* iterate thru projects tools*/}
              {project.techUse.map((tool, i) => {
                return (
                  <Fade direction="up" cascade  >
                    <ListGroup.Item className="card-list">
                      {" "}
                      {i + 1}. {tool}
                    </ListGroup.Item>
                  </Fade>
                );
              })}
            </ListGroup>
            <Card.Body className="project-buttons">
              <a href={project.url} target="__blank">
                <img src={liveGif} />
                <span style={{ color: "black", display: "block" }}>
                  View Live
                </span>
              </a>

              <a href={project.gitHub} target="__blank">
                <img src={github} />
                <span style={{ color: "black", display: "block" }}>GitHub</span>
              </a>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </section>
  );
}

export default Projects;
