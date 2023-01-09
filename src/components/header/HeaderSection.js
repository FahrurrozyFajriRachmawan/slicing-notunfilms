import { Container, Row } from "react-bootstrap";
import "../header/HeaderSection.scss";
import spiderman from "../../assets/images/spiderman.png";
import ironman from "../../assets/images/ironman3.png";
import avenger from "../../assets/images/avenger.png";
import avatar from "../../assets/images/avatar.png";
import thewalkingdead from "../../assets/images/the-walking-dead.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSection = () => {
  // Slick JS
  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,

    draggable: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    touchThreshold: 1000,
  };

  return (
    <>
      <Container fluid className="title-header">
        <Row>
          <h1>WATCH MOVIE</h1>
          <p>for free without using a ticket</p>
        </Row>
      </Container>

      <Container className="img-header">
        <Row>
          <div>
            <Slider {...settings}>
              <>
                <div>
                  <img src={spiderman}></img>
                </div>
              </>
              <>
                <div>
                  <img src={ironman}></img>
                </div>
              </>
              <>
                <div>
                  <img src={avenger}></img>
                </div>
              </>
              <>
                <div>
                  <img src={avatar}></img>
                </div>
              </>
              <>
                <div>
                  <img src={thewalkingdead}></img>
                </div>
              </>
            </Slider>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default HeaderSection;
