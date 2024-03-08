function Sujet({heading1, heading2, heading3, heading4, index}){
    return(
        <>
        <div class="card-article">
            <div class="card-article-content">
                {index===0 &&<h3>{heading1}</h3>}
                {index===1 &&<h3>{heading2}</h3>}
                {index===2 &&<h3>{heading3}</h3>}
                {index===3 &&<h3>{heading4}</h3>}
            </div>
        </div>
        </>
    );
}
export default Sujet;