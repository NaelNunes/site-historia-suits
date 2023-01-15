import "./styles.css";
import Grupofoto from "../../assets/fotodogrupo.png";
import Footer from "../../components/Footer/index";

export default function Main() {
  return (
    <body className="primerbody">
      <div className="intr">
        <h1>Introdução</h1>
      </div>
      <div className="int">
        <table ClassName="tabela" border="2">
          <tr>
            <td className="textoint">
              O grande advogado corporativo de Manhattan, Harvey Specter, e sua
              equipe, Donna Paulsen, Louis Litt e Alex Williams, são lançados em
              uma disputa pelo poder quando um novo sócio se junta à empresa.
              Com seus dois melhores associados desaparecidos e Jessica de volta
              a Chicago, Specter e a equipe tentam se adaptar a uma nova normal
              sem eles. A equipe enfrenta traições, relacionamentos ardentes e
              segredos que acabam sendo revelados. Velhas e novas rivalidades
              vêm à luz entre os membros da equipe, à medida que aprendem a
              lidar com o novo membro
            </td>
            <td>
              <img ClassName="yt" src={Grupofoto} alt="fotogrupo" />
            </td>
          </tr>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <h3 className="trailer">Trailer:</h3>
        <div className="video">
          <iframe
            width="720px"
            height="480px"
            src="https://www.youtube.com/embed/Ab2YIbP5xw8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </body>
  );
}
