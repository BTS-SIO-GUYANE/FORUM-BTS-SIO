import React, { Component } from "react";
import TêteATête from "../image/TêteATête.jpg";
import style from "./Inscrire.module.css";

class Inscrire extends Component {
  render() {
    return (
      <section className={style.inscrireContainer}>
          <img src={TêteATête} alt="" className={style.BackImage} />
          <div className={style.inscrire}>
            <div className={style.contenu}>
              <h1 className={style.titleInscrit}>Vous inscrire</h1>
              <form action="" id="form">
                <table>
                  <td>
                    <tr>
                      <input type="text" placeholder="Votre nom complet"className={style.Input} required/>
                      </tr>
                      <tr>
                      <input type="text" placeholder="Votre pseudo" className={style.Input} required/>
                      </tr>
                      <tr>
                      <input type="email" placeholder="Votre adresse mail" className={style.Input} required/>
                      </tr>
                      <tr>
                      <input type="password" placeholder="Créez votre mot de passe" className={style.Input} required/>
                      </tr>
                      <tr>
                      <input type="password" placeholder="Confirmez votre mot de passe" className={style.Input} required/>
                    </tr>
                    <tr>
                      <input type="submit" name="" id="" className={style.Submit} />
                    </tr>
                  </td>
                </table>
              </form>
            </div>
          </div>
      </section>
    );
  }
}

export default Inscrire;
