import Sujet from './Sujet';
// import Content from './components/content';

function Article(){
    return(
        <>
        <div class="article-conteiner">
            <Sujet index={0} heading1="Le BTS SIO"/>
            <Sujet index={1} heading2="SLAM & SISR"/>
            <Sujet index={2} heading3="HTML CSS"/>
            <Sujet index={3} heading4="programmation orientée objet"/>
        </div>
        </>
    );
  }
  
  export default Article;
  