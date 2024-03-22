import Layout from "../components/Layout";
import style from "./contact.module.css";
import Map from "../components/Map";
import Mg from "../image/mg.png"
    
function Contact() {
  return (
    <Layout>
      <div className={style.page}>
      <div className={style.container}>
      <div className={style.colonne1}>
        <h1 className={style.title}>Contactez nous</h1>
        <p className={style.paragraphe}>
          Pour toute demande particulière, veillez remplir ce formulaire. Nous
          vous répondrons dans un délai relativement court.
        </p>
        <div className={style.formulaire}>
            <form action="" className={style.lesContenus}>
        <table>
                <tr> 
                    <td><label htmlFor="">NOM </label></td>
                    <td><input className={style.space} type="text" name="nom" placeholder="Votre nom" required/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">PRENOM </label></td>
                    <td><input className={style.space} type="text" name="prenom" placeholder="Votre prénom" required/></td>
                </tr>
                <tr>
                    <td><label htmlFor=""> MAIL </label></td>
                    <td><input className={style.space} type="email" name="mail" placeholder="Votre adresse mail" required/></td>
                </tr>
               
                <tr>
                    <td><label htmlFor="">CLASSE </label></td>
                    <td><input className={style.space} type="text" name="classe" placeholder="Votre classe" required/></td>
                </tr>
                
                <tr>
                    <td><label htmlFor=""> MESSAGE </label></td>
                    <td><textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Ecrivez votre message"
                required
                className={style.space}
                ></textarea></td>
                </tr> 
                <tr>
                    <td><input type="submit" name="" id="" /></td>
                </tr>
        </table>
         </form>
          </div>
          </div>
        <div className={style.colonne2}>
            <img src={Mg} alt="" className={style.image}/>
            <Map/>
        </div>
        </div>
        </div> 
    </Layout>
  );
}

export default Contact;
