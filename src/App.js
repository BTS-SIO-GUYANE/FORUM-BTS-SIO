import Header from './components/Header';
import Footer from './components/Footer';
import Ordinateur2 from './image/Ordinateur2.jpg';

function App(){
  return(
      <header>
             <Header/>
             <h1>Accueil</h1>
             <diV className="ordi2"><div><img id='dim' src={Ordinateur2} alt='picture2' /></div></diV>
      </header>
        <Footer/>
  );
}

export default App;
