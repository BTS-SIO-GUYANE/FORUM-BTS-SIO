import Header from "../components/Header";
import article from "../image/article.jpg";

function AideEtSupport(){
    return(

        <>
        
               <Header/>
        
        <section className="aideEtSupport" style={{ backgroundImage:`url(${article})` }}>
        <h2>Aide Et Support</h2>

        </section>
        
        </>
    ); 
}

export default AideEtSupport;