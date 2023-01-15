import { Carousel } from "react-bootstrap";
import Harvey from "../../assets/HarveySpecter.jpg";
import "./styles.css";
import MikeRoss from "../../assets/MikeRosss.jpg";
import RachelZane from "../../assets/RachelZane.jpg";
import JessicaPearson from "../../assets/JessicaPearson.jpg";

export default function Carrossel() {
  return (
    <Carousel
      variant="dark"
      className="mx-auto carrosel"
      style={{ width: "920px" }}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={Harvey} alt="Harveyy" />
        <Carousel.Caption>
          <h3>Harvey Specter</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={MikeRoss} alt="MikeRosss" />
        <Carousel.Caption>
          <h3>Mike Ross</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item variant="dark">
        <img className="d-block w-100" src={RachelZane} alt="RachelZane" />
        <Carousel.Caption>
          <h3>Rachel Zane</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item variant="dark">
        <img
          className="d-block w-100"
          src={JessicaPearson}
          alt="Jessica Pearson"
        />
        <Carousel.Caption>
          <h3>Rachel Zane</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
