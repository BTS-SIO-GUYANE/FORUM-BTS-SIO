import Layout from './components/Layout';
import Ordinateur2 from './image/Ordinateur2.jpg';
import Inscrire from './components/Inscrire';

function App(){
  return(
      <Layout>
            
             <h1>Accueil</h1>
             <div className="ordi2"><div><img id='dim' src={Ordinateur2} alt='picture2' /></div></div>
             <Inscrire/>
      </Layout>     
  )
}

export default App;
