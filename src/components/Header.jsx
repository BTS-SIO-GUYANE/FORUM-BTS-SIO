import Navbar from "./Navbar";


function Header(){
    return(
        <header>
            <div className="container">
                <h1>{/* Logo */}<a>FORUM BTS SIO</a></h1>
                <Navbar/>
            </div>
             
        </header>
    );
}

export default Header