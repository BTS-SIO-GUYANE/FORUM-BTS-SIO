import React, { Component } from "react";
import style from "./footer.module.css";
import button from "../icon/button2.png";

class Footer extends Component {
  render() {
    return (
      <>
        <div className={style.footer}>
          
            <div className={style.align}>
              <div>
                {/* Première colonne */}
                <h3>
                  <a href="/">Mention légale</a>
                </h3>
              </div>
              {/* Deuxième colonne */}
              <div>
                <h3>
                  <a href="https://lpo-melkior-garre.eta.ac-guyane.fr/" target="blank">Melkior-Garré</a>
                  </h3>
                  <p><a href="https://lpo-melkior-garre.eta.ac-guyane.fr/" target="blank"><img src={button} alt="button" width="25px" /></a></p>
                </div>
                
              
          </div>
          </div>
      </>
    );
  }
}

export default Footer;
