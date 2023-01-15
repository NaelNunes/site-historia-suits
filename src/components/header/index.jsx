import logo from "../../assets/suitslogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { useAuth } from "../../context/Auth/index";
import { Navbar } from "react-bootstrap";

export default function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <nav>
      <Navbar>
        <div>
          <img src={logo} alt="logotipo" />
        </div>
        <div className="headerb">
          <div className="linksH">
            <Link to="/">Início</Link>
            <Link to="/Characters">Personagens</Link>
            <Link to="/site">Sobre o Site</Link>
            <Link to="/About">Sobre Mim</Link>
          </div>
        </div>
      </Navbar>

      <div className="button">
        {user?.id ? (
          <>
            <Navbar.Brand className="menLog">Olá, {user.usu_nome}</Navbar.Brand>
            <button className="b1" onClick={signOut}>
              {" "}
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text">Sair</span>
            </button>
          </>
        ) : (
          <button className="b2" onClick={() => navigate("/signin")}>
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front text">Entrar</span>
          </button>
        )}
      </div>
    </nav>
  );
}
