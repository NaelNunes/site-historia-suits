// import Header from "../../components/Header/index";

import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import Footer from "../../components/Footer";
import Escopo from "../../assets/escopo.png";
import Objetivo from "../../assets/objetivo.png";
import Justificativa from "../../assets/justificativa.png";

export default function Site() {
  return (
    <div>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col>
            <Card
              bg="dark"
              text="white"
              className="scope"
              style={{ width: "20rem" }}
            >
              <Card.Img className="imagens" variant="top" src={Escopo} />
              <Card.Body>
                <details>
                  <summary>
                    <Card.Title>Escopo</Card.Title>
                  </summary>
                  <Card.Text>
                    Produzir um site que fale sobre a série Suits (Netflix), de
                    uma forma superficial. no momento.
                  </Card.Text>
                </details>
              </Card.Body>
              {/* <Card.Footer> */}
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
              {/* </Card.Footer> */}
            </Card>
          </Col>
          <Col>
            <Card
              bg="dark"
              text="white"
              className="objective"
              style={{ width: "20rem" }}
            >
              <Card.Img className="imagens" variant="top" src={Objetivo} />
              <Card.Body>
                <details>
                  <summary>
                    <Card.Title>Objetivo</Card.Title>
                  </summary>
                  <Card.Text>
                    Produzir um site bonito esteticamente, minimalista e
                    simplificado.
                  </Card.Text>
                </details>
              </Card.Body>
              {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer> */}
            </Card>
          </Col>
          <Col>
            <Card
              bg="dark"
              text="white"
              className="Justify"
              style={{ width: "20rem" }}
            >
              <Card.Img className="imagens" variant="top" src={Justificativa} />
              <Card.Body>
                <details>
                  <summary>
                    <Card.Title>Justificativa</Card.Title>
                  </summary>
                  <Card.Text>
                    O tema abordado foi escolhido com a finalidade de
                    compartilhar esta série com um número maior de pessoas
                  </Card.Text>
                </details>
              </Card.Body>
              {/* <Card.Footer> */}
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
              {/* </Card.Footer> */}
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <div className="informacao">
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
