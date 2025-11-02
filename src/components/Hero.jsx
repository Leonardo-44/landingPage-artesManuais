import "../App.css";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="imgHero">
        <div className="d-flex jc-center alg-center heigth fd-column">
          <h1 className="fontPlay primeira-cor size-96px fw-regular">Artes Manuais</h1>
          <p className="txt-center size-20px fontMont setima-cor">
            Artesanato feito com amor, dedicação e fé. <br />
            Peças únicas que transformam momentos em memórias especiais.
          </p>

          <button className="buttonHero fw-bold"><a href="#nossosProdutos">Conheça nossos produtos</a></button>

        </div>
      </section>
    </>
  );
}

export default Hero;
