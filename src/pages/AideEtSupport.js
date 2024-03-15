import Layout from "../components/Layout";
import Article from "../components/Article";
import Support from "../image/support.jpg";

function AideEtSupport(){
    return(
       
        <Layout> 
            <section className="aideEtSupport" style={{backgroungImage: `url(${Support})`}}>
                <h1>Aide et Sup</h1>
                <div>
                    <Article/>
                </div>
            </section>
        </Layout>
 
        
    );  
}

export default AideEtSupport;