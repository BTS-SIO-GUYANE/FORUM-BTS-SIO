import Header from './components/Header';
import Footer from './components/Footer';
import Ordinateur2 from './image/Ordinateur2.jpg';
import "./index.css";

function App(){
  return(
    <>
      <header>
             <Header/>
      </header>
      <div id="div1">
        <div className="bts-sio">
          <h1>BTS SIO</h1>
          <p>Brevet de technicien supérieur -<br/> Sevices informatique aux organisations</p>
          <button>s'inscrire</button>
        </div>
        <diV className="ordi2">
          <img id='dim' src={Ordinateur2} alt='picture2' />
        </diV>
      </div>
      <div></div>
      <Footer/>
    </>
  );
}

export default App;
