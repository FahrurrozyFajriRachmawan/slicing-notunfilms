import { Container, Row, Col, Card } from "react-bootstrap";
import imgUncharted from "../assets/images/uncharted-cinema.jpg";
import imgWakanda from "../assets/images/wakanda-cinema.jpg";
import imgIronman from "../assets/images/ironman-cinema.jpg";
import imgThor from "../assets/images/thor-cinema.jpg";
import imgDoctorStranger from "../assets/images/dr.stranger-cinema.jpg";
import imgAvatar from "../assets/images/avatar-cinema.jpg";
import imgCaptmarvel from "../assets/images/captainmarvel-cinema.jpg";
import imgSquidgame from "../assets/images/squidgame-cinema.jpg";
import imgVenom from "../assets/images/venom-cinema.jpg";
import imgAdam from "../assets/images/adam-cinema.jpg";
import iconPlay from "../assets/images/btn-play.png";
import iconStar from "../assets/images/icon-star.png";

const TrendingSection = () => {
  return (
    <>
      <Container fluid className="trending-section" id="trending">
        <Row>
          <div className="title-trending">
            <h1>Trending Movie</h1>
          </div>
          <Col className="img-trending">
            <a href="#">
              <img src={imgUncharted} className="img-cinema"></img>
              <img src={iconPlay} className="icon-play-trending"></img>
              <h1>Uncharted</h1>
              <p>
                <img src={iconStar} className="icon-star-trending"></img>
                <strong>8.1</strong> · Action · 2022
              </p>
            </a>
          </Col>
          <Col className="img-trending">
            <a href="#">
              <img src={imgWakanda} className="img-cinema"></img>
              <img src={iconPlay} className="icon-play-trending"></img>
              <h1>Wakanda</h1>
              <p>
                <img src={iconStar} className="icon-star-trending"></img>
                <strong>8.1</strong> · Action · 2022
              </p>
            </a>
          </Col>
          <Col className="img-trending">
            <a href="#">
              <img src={imgIronman} className="img-cinema"></img>
              <img src={iconPlay} className="icon-play-trending"></img>
              <h1>IronMan</h1>
              <p>
                <img src={iconStar} className="icon-star-trending"></img>
                <strong>8.1</strong> · Action · 2022
              </p>
            </a>
          </Col>
          <Col className="img-trending">
            <a href="#">
              <img src={imgThor} className="img-cinema"></img>
              <img src={iconPlay} className="icon-play-trending"></img>
              <h1>Thor</h1>
              <p>
                <img src={iconStar} className="icon-star-trending"></img>
                <strong>8.1</strong> · Action · 2022
              </p>
            </a>
          </Col>
          <Col className="img-trending">
            <a href="#">
              <img src={imgDoctorStranger} className="img-cinema"></img>
              <img src={iconPlay} className="icon-play-trending"></img>
              <h1>Doctor Stranger</h1>
              <p>
                <img src={iconStar} className="icon-star-trending"></img>
                <strong>8.1</strong> · Action · 2022
              </p>
            </a>
          </Col>
          <Col className="img-trending">
            <a href="#">
              <img src={imgAvatar} className="img-cinema"></img>
              <img src={iconPlay} className="icon-play-trending"></img>
              <h1>Avatar</h1>
              <p>
                <img src={iconStar} className="icon-star-trending"></img>
                <strong>8.1</strong> · Action · 2022
              </p>
            </a>
          </Col>
          <Col className="img-trending">
            <a href="#">
              <img src={imgCaptmarvel} className="img-cinema"></img>
              <img src={iconPlay} className="icon-play-trending"></img>
              <h1>Captain Marvel</h1>
              <p>
                <img src={iconStar} className="icon-star-trending"></img>
                <strong>8.1</strong> · Action · 2022
              </p>
            </a>
          </Col>
          <Col className="img-trending">
            <a href="#">
              <img src={imgSquidgame} className="img-cinema"></img>
              <img src={iconPlay} className="icon-play-trending"></img>
              <h1>Squid Game</h1>
              <p>
                <img src={iconStar} className="icon-star-trending"></img>
                <strong>8.1</strong> · Action · 2022
              </p>
            </a>
          </Col>
          <Col className="img-trending">
            <a href="#">
              <img src={imgVenom} className="img-cinema"></img>
              <img src={iconPlay} className="icon-play-trending"></img>
              <h1>Venom</h1>
              <p>
                <img src={iconStar} className="icon-star-trending"></img>
                <strong>8.1</strong> · Action · 2022
              </p>
            </a>
          </Col>
          <Col className="img-trending">
            <a href="#">
              <img src={imgAdam} className="img-cinema"></img>
              <img src={iconPlay} className="icon-play-trending"></img>
              <h1>Adam Project</h1>
              <p>
                <img src={iconStar} className="icon-star-trending"></img>
                <strong>8.1</strong> · Action · 2022
              </p>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TrendingSection;
