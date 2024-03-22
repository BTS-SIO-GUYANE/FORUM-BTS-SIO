import Layout from "../components/Layout";
import style from "./Stage.module.css";
import IMT from "../image/IMT.png";
import Apynow from "../image/Apynow.jpeg";
import Remire from "../image/Remire.png";
import MairiDeCayenne from "../image/MairaiDeCayenne.jpg";

function Stages() {
  return (
    <Layout>
      <div className={style.page}>
        <h1 className={style.titleStage}>
          Recherche de <br /> Stage
        </h1>
        <p className={style.pargraph}>
          Nous vous proposons ici, plusieurs entreprises dans lesquelles vous
          pouvez effectuer vos stages. Que soyez un étudiant spécialisé en SLAM
          ou en SISR, vous trouverez des différentes entreprises qui sont
          susceptibles de vous accueillir afin d’effectuer vos stages. Prenez
          d’abord connaissance de toutes les exigences de l’entreprise, et
          postulez en envoyant vos documents nécéssaires.{" "}
        </p>

        <div className={style.separation}></div>

        <div className={style.Card}>
          {/* colonne */}
          <div className={style.OneCol}>
            <a href="https://www.imtconcept.com/" target="blank">
              <img src={IMT} alt="" className={style.IMT} />
            </a>
          </div>
          {/* colonne */}
          <div className={style.TwoCol}>
            <p className={style.textStage}>
              {" "}
              <a href="https://www.imtconcept.com/" target="blank">
                IMT Concept
              </a>{" "}
              <br />
              Création d’application mobile et site web Créons ensemble l’outil
              numérique qui propulsera votre businessau niveau supérieur.
            </p>
          </div>
        </div>

        <div className={style.separation}></div>

        <div className={style.Card}>
          {/* colonne */}
          <div className={style.OneCol}>
            <a href="https://www.pagesjaunes.fr/pros/57887580" target="blank">
              <img src={Apynow} alt="" className={style.Apynow} />
            </a>
          </div>
          {/* colonne */}
          <div className={style.TwoCol}>
            <p className={style.textStage}>
              {" "}
              <a href="https://www.pagesjaunes.fr/pros/57887580" target="blank">
                Entre Aynow
              </a>
              <br />
              Entreprise de Management et juridique Le 7 AV LOUIS PASTEUR 97300
              CAYENNE.
            </p>
          </div>
        </div>

        <div className={style.separation}></div>

        <div className={style.Card}>
          {/* Premier colonne */}
          <div className={style.OneCol}>
            <a href="http://www.remire-montjoly.fr/" target="blank">
              <img src={Remire} alt="" className={style.Remire} />
            </a>
          </div>
          {/* Deuxième colonne */}
          <div className={style.TwoCol}>
            <p className={style.textStage2}>
              {" "}
              <a href="http://www.remire-montjoly.fr/" target="blank">
                Cybert Carbet de Remire Montjoly
              </a>{" "}
              <br />
              Pour un accès à informatique et à internet pour tous, le Cyber
              Carbet de Rémire-Montjoly vous accueille du lundi au vendredi de
              12h30 à 18h30. Dans votre Cyber Carbet vous pourrez y réaliser
              différents ateliers autour du numérique et de l’informatique qui
              permettent :
              <ul className={style.textStage2}>
                <li>
                  Le développement de connaissances et de compétences-Un
                  accompagnement social et/ou scolaire.
                </li>
                <li>
                  Une aide sociale ou professionnelle grâce aux outils
                  numérique.
                </li>
                <li>
                  Une initiation et un perfectionnement des jeunes et des moins
                  jeunes à l’utilisation des outils numériques.
                </li>
              </ul>
              Afin de bénéficier de l’ensemble de ces services rendez vous au
              DSU de Montjoly se situant aux Ames claires
            </p>
          </div>
        </div>

        <div className={style.separation}></div>

        <div className={style.Card}>
          {/* Premier colonne */}
          <div className={style.OneCol}>
            <a href="http://www.ville-cayenne.fr/" target="blank">
              <img src={MairiDeCayenne} alt="" className={style.Cayenne} />
            </a>
          </div>
          {/* Deuxième colonne */}
          <div className={style.TwoCol}>
            <p className={style.textStage}>
              {" "}
              <a href="http://www.ville-cayenne.fr/" target="blank">
                Mairie de Cayene
              </a>
              <br />
              La mairie de Cayenne propose des services informatiques, tel que :
              le réseau, la gestion des bases de donnée..{" "}
            </p>
          </div>
        </div>

        <div className={style.separation}></div>
      </div>
    </Layout>
  );
}

export default Stages;
