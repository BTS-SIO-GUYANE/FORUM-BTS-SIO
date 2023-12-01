import React from "react";
import "../index.css";

function Navbar() {
  // console.log(window.location.pathname)

  // function isPage(pageName) {
  //     // if(window.location.pathname.includes(pageName)) {
  //     //     return true
  //     // }
  //     // return false
  //     return window.location.pathname.includes(pageName)
  // }

  const isPage = (pageName) => window.location.pathname.includes(pageName);

 
  
    // console.log(window.location.pathname)

    // function isPage(pageName) {
    //     // if(window.location.pathname.includes(pageName)) {
    //     //     return true
    //     // }
    //     // return false
    //     return window.location.pathname.includes(pageName)
    // }

    const isPage = (pageName) => window.location.pathname.includes(pageName)

    return(
       <>

        <nav>
            <ul id="menu">
                <li><a href='/'className={isPage('App') ? 'active' : ''}>Accueil</a></li>
                <li><a href='/Annonces' className={isPage('Annonces') ? 'active' : ''}>Annonces</a></li>
                <li><a href='/Stages' className={isPage('Stages') ? 'active' : ''}>Stages</a></li>
                <li><a href='/AideEtSupport'className={isPage('AideEtSupport') ? 'active' : ''}>Aide et support</a></li>
                <li><a href='/Contact' className={isPage('Contact') ? 'active' : ''}>Contact</a></li>
                <li><a href='/EspaceEtudiant'className={isPage('EspaceEtudiant') ? 'active' : ''}>Espace étudiant</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Navbar;
