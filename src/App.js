import Inscrire from './components/Inscrire';
import Layout from './components/Layout';
import Ordinateur2 from './image/Ordinateur2.jpg';
import "./index.css";


function App(){
  return(
    <Layout>
     
      <div id="div1">
        <div className="bts-sio">
          <h1>BTS SIO</h1>
          <p>Brevet de technicien supérieur -<br/> Sevices informatique aux organisations</p>
          <button><a href="#form">s'inscrire</a></button>
        </div>
        <diV className="ordi2">
          <img id='dim' src={Ordinateur2} alt='picture2' />
        </diV>
      </div>
      <div id="msgBienvenue">
        <h1>Message de bienvenue</h1>
        <p>Dans un but d'unir les étudiants du BTS SIO à l'établissement Melkior et Garré, les développeurs de la deuxième année crée ce forum qui permet aux étudiants d'échanger entre eux et avec les enseignants. 
          Nous vous souhaitons la bienvenue sur le forum avec beaucoup d'enthousiasme. N'hésitez pas à poser des questions.</p>
      </div>
      <Inscrire/>
     
    </Layout>
  );
}

export default App;
