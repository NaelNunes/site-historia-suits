import "./styles.css";
import euu from "../../assets/euu.jpeg";
import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer/index";
import Card1 from "../../components/Card/index";

export default function About() {
  return (
    <body>
      <div>
        <h1 className="h1Ab">Perfil Pessoal</h1>
      </div>
      <Card1 />
      <div></div>

      <Footer />
    </body>
  );
}
