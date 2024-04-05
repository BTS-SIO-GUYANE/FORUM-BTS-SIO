import Layout from '../components/Layout';
import imgcode from '../image/imgcode.jpg';
import Card from '../components/Card';
function Annonces() {
  return(
    <>
      <Layout>
      <section className="annonce" style={{ backgroundImage:`url(${imgcode})` }}>
        <div style={{ marginTop: '-4rem' }}>
          <h2>ANNONCE</h2>
          <div className='cardConteiner' style={{ marginTop: '2rem' }}>
            <Card index={0} heading1="SLAM"/>
            <Card index={1} heading2="LYCEE MELKIOR GARRE"/>
            <Card index={2} heading3="SISR" />
          </div>
        </div>
    </section>
  </Layout>
  </>
  );
};

export default Annonces;
