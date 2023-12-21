import Layout from "../components/Layout";
import style from "./AideEtSupport.module.css";

function AideEtSupport(){
    return(
        <Layout> 

            {/* Les titres */}
               <section className={style.backSupport}>
                 

                 {/* Première colonne */}
                <div className={style.containerSup}>
                <div className={style.colonne1Sup}>

                {/* Le titre de la première colonne */}
                <h1 className={style.titleSup}>Les sujet</h1>

                {/* Les cards des sujets */}

                {/* Premier sujet BTS SIO */}
                <div className={style.cardSup}>
                <a href="https://info.digital-campus.live/formation-distance-bts-services-informatiques-organisations/?utm_source=google&utm_medium=SEA&utm_campaign=digital-campus-search-hm-acq-informatique&utm_content=dc-informatique-d-bts-sio&utm_term=bts%20services%20informatiques%20aux%20organisations&gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT_sD8_b6_emukh4-2tTVkZ1pgTcivQ7yWvtJWNALJ2NKgL7lJoQAicaAiVvEALw_wcB" target="blank" className={style.lienSup}> <h1 className={style.ParagSup}>Le BTS SIO</h1></a>
                </div>
                {/* Deuxième sujet Choix entre SLAM et SISR */}
                <div className={style.cardSup}>
                    <a href="/" target="blank" className={style.lienSup}><h1 >Choix entre SLAM et SISR</h1></a>
                </div>

                {/* troisième sujet HTML & CSS  */}
                <div className={style.cardSup}>
                    <a href="/" target="blank" className={style.lienSup}><h1 >HTML & CSS</h1></a>
                </div>

                {/* Quatrième sujet Programmation orientée objet */}
                <div className={style.cardSup}>
                    <a href="/" target="blank" className={style.lienSup}><h1 >Programmation orientée objet POO</h1></a>
                    </div> 
                </div>
                
                

                {/* Deuxième Colonne */}
                <div className={style.colonne2Sup}>
                    <h1 className={style.titleSup2}>Les articles</h1>

                    {/* card descriptif pour le sujet BTS SIO */}
                    <p className={style.ParagSup1}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, iure impedit nemo animi voluptate nam rerum quam commodi magni vero sapiente sit ab perferendis nesciunt. Magni, expedita voluptatum pariatur sed cum quam eveniet ipsum accusamus consectetur deserunt earum mollitia non cumque voluptas! Excepturi at corrupti ipsam nostrum. Magnam quaerat provident, voluptatem quam nobis molestiae qui nam culpa, sunt sed, repellendus iusto ad natus. Quae illum repellendus quam possimus, sunt laborum, libero alias nam tempore soluta rem tempora! Porro ab aliquam rerum dolorum sapiente, quam necessitatibus placeat tempora nulla sequi laboriosam vel magni molestiae sunt reprehenderit autem? Voluptates id dignissimos explicabo.</p>

                    {/* Card descriptif pour le sujet Choix entre SLAM et SISR */}
                    <p className={style.ParagSup1}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, iure impedit nemo animi voluptate nam rerum quam commodi magni vero sapiente sit ab perferendis nesciunt. Magni, expedita voluptatum pariatur sed cum quam eveniet ipsum accusamus consectetur deserunt earum mollitia non cumque voluptas! Excepturi at corrupti ipsam nostrum. Magnam quaerat provident, voluptatem quam nobis molestiae qui nam culpa, sunt sed, repellendus iusto ad natus. Quae illum repellendus quam possimus, sunt laborum, libero alias nam tempore soluta rem tempora! Porro ab aliquam rerum dolorum sapiente, quam necessitatibus placeat tempora nulla sequi laboriosam vel magni molestiae sunt reprehenderit autem? Voluptates id dignissimos explicabo.</p>

                    {/* Card descriptif pour le sujet html css */}
                    <p className={style.ParagSup1}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, iure impedit nemo animi voluptate nam rerum quam commodi magni vero sapiente sit ab perferendis nesciunt. Magni, expedita voluptatum pariatur sed cum quam eveniet ipsum accusamus consectetur deserunt earum mollitia non cumque voluptas! Excepturi at corrupti ipsam nostrum. Magnam quaerat provident, voluptatem quam nobis molestiae qui nam culpa, sunt sed, repellendus iusto ad natus. Quae illum repellendus quam possimus, sunt laborum, libero alias nam tempore soluta rem tempora! Porro ab aliquam rerum dolorum sapiente, quam necessitatibus placeat tempora nulla sequi laboriosam vel magni molestiae sunt reprehenderit autem? Voluptates id dignissimos explicabo.</p>

                    {/* Card descriptif pour le sujet Programmation orientée objet */}
                    <p className={style.ParagSup1}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, iure impedit nemo animi voluptate nam rerum quam commodi magni vero sapiente sit ab perferendis nesciunt. Magni, expedita voluptatum pariatur sed cum quam eveniet ipsum accusamus consectetur deserunt earum mollitia non cumque voluptas! Excepturi at corrupti ipsam nostrum. Magnam quaerat provident, voluptatem quam nobis molestiae qui nam culpa, sunt sed, repellendus iusto ad natus. Quae illum repellendus quam possimus, sunt laborum, libero alias nam tempore soluta rem tempora! Porro ab aliquam rerum dolorum sapiente, quam necessitatibus placeat tempora nulla sequi laboriosam vel magni molestiae sunt reprehenderit autem? Voluptates id dignissimos explicabo.</p>
                </div>
                </div>
               </section>  
        </Layout>
    );  
}

export default AideEtSupport;