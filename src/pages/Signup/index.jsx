import "./styles.css";
import logo from "../../assets/suitslogo.png";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/index";

export default function signup() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const acessarHandle = (evt) => {
    evt.preventDefault();
    try {
      signIn({ user, password });
      navigate("/");
    } catch (error) {
      console.log("Erro de login");
      setUser("");
      setPassword("");
    }
  };
  return (
    <body>
      <div className="content1">
        <div className="signup">
          <img src={logo} alt="logotipo" />
          <div>
            <h1 className="acs">Acessar Site</h1>
            <form className="formulario1">
              <input placeholder="Nome Completo" />
              <input placeholder="E-mail" type="email" />
              <input placeholder="Senha" type="password" />
              <input placeholder="Contra senha" type="password" />
              <button>Acessar </button>
              <button>Limpar </button>
            </form>
          </div>
          <Button className="aler" variant="primary" onClick={handleShow}>
            Fazer inscrição com o Google
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Aviso!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Os servidores do Google estão fora do ar no momento!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
          <Link to="/signin">Voltar</Link>
        </div>
      </div>
    </body>
  );
}
