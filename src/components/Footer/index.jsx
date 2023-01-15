import React from "react";
import "./styles.css";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Entre em Contato</h4>
              <ul className="list-unstyled">
                <li>São Paulo</li>
                <li>Presidente Venceslau</li>
                <li>Telefone: (18) 99623-2795</li>
              </ul>
            </div>
            {/* Column2 */}
            <div className="col-md-3 col-sm-6">
              <ul className="list-unstyled">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            {/* Column3 */}
            <div className="col-md-3 col-sm-6">
              <ul className="list-unstyled">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            {/* Column4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/about">Sobre Mim</a>
                </li>
                <li>
                  <a href="/">Início</a>
                </li>
                <li>
                  <a href="/Characters">Personagens</a>
                </li>
                <li>
                  <a href="/site">Sobre o Site</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Nathanael Nunes's Website - All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    text-decoration: none;
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLighGrey);
  }
`;
