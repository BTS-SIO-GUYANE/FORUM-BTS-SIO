function Card({heading1, heading2, heading3, index}){
    return(
        <>     
  <div class="card">
  <div class="card-content">
    {index === 0 &&<h3>{heading1}</h3>}
    {index === 1 && <h3>{heading2}</h3>}
    {index === 2 &&<h3>{heading3}</h3>}
   

  </div> 
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px'}}>
  <button className="large-button" style={{ backgroundColor: "#004166", color: "white"}}>ACTUALITE
  </button></div>
</div> 
 </>
 
    );
  
}
export default Card;


