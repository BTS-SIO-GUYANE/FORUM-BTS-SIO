import React from 'react';
import '../index.css';
import image from '../image/mg1.png';
function image(){
    return image;
    <img src={mg1} alt=""/>
  } 


function Navbar(){

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
       
        <nav>
            <ul id="menu">
                <li><a href='/App.js'className={isPage('App') ? 'active' : ''}>Accueil</a></li>
                <li><a href='/pages/Annonces.js' className={isPage('Annonces') ? 'active' : ''}>Annonces</a></li>
                <li><a href='/pages/Stages.js' className={isPage('Stages') ? 'active' : ''}>Stages</a></li>
                <li><a href='/pages/Aide_et_support.js'className={isPage('Aide_et_support') ? 'active' : ''}>Aide et support</a></li>
                <li><a href='/pages/Contact.js' className={isPage('Contact') ? 'active' : ''}>Contact</a></li>
                <li><a href='/pages/Espace_étuidiant.js'className={isPage('Espace_étudiant') ? 'active' : ''}>Espace étudiant</a></li>
            </ul>
        </nav>
    );
}

export default Navbar



