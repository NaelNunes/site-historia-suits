import "./styles.css";
import logo from "../../assets/suitslogo.png";
import { useAuth } from "../../context/Auth/index";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Signin() {
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

  const limparHandle = (evt) => {
    evt.preventDefault();
    setUser("");
    setPassword("");
  };
  return (
    <body>
      <div className="content">
        <div className="signin">
          <img src={logo} alt="logotipo" />
          <div>
            <h1 className="ac">Acessar Site</h1>
            <form className="formulario">
              <input
                value={user}
                onChange={(evt) => setUser(evt.target.value)}
                placeholder="Usuário"
              />
              <input
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                placeholder="Senha"
                type="password"
              />
              <button onClick={acessarHandle}>Acessar </button>
              <button onClick={limparHandle}>Limpar </button>
            </form>
            <Button className="aler" variant="primary" onClick={handleShow}>
              Fazer login com o Google
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

            <Link to="/signup">Cadastrar-se</Link>
          </div>
        </div>
      </div>
    </body>
  );
}
