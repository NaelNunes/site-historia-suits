import { Button } from "react-bootstrap";
import { Card, ListGroup, CardGroup } from "react-bootstrap";
import "./styles.css";
import euu from "../../assets/euu.jpeg";

export default function Card1() {
  return (
    <body>
      <div className="carddiv">
        <CardGroup>
          <Card bg="dark" text="white" style={{ width: "32rem" }}>
            <Card.Img variant="top" src={euu} alt="EU" />
            <Card.Body>
              <Card.Title>Nathanael Nunes Teodoro</Card.Title>
              <Card.Text>Desenvolvedor deste site</Card.Text>
            </Card.Body>
            <Card.Body className="Links1">
              <Card.Link href="https://twitter.com/nael_tiodoro">
                Twitter
              </Card.Link>
              <Card.Link href="https://github.com/NaelNunes">Git Hub</Card.Link>
              <Card.Link href="https://www.instagram.com/naelnunes_/">
                Instagram
              </Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          {/* <Card style={{ width: "32rem" }}>
            <Card.Body>
              <Card.Title>Sobre o desenvolvedor</Card.Title>
              <Card.Text>
                Estudante de informática, estuda na escola ETEC prof.: Milton
                Gazzetti, atualmente cursando o 2º Info.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
        </CardGroup>
      </div>
    </body>
  );
}
