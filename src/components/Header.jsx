import Navbar from "./Navbar";
import logo from '../image/mg.png';

console.log(logo);
function Header(){
    return(
        <header>
            
            <div className="container"> 
            <diV className="forum">
             <a href="*"><img src={logo} alt="Logo" id="logo"/></a>
             <h1 id="titre-logo">{/* Logo */}<a href='/'>FORUM BTS SIO</a></h1>
            </diV>   
               
               <Navbar/>
            </div>
            
        </header>
    );  
}

export default Header;