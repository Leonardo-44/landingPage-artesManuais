import "../App.css";
import "./About.css";

//ASSETS
import Coracao from "../assets/icons/coracao.svg";
import Estrela from "../assets/icons/estrela.svg";
import User from "../assets/icons/user.svg";

function About() {
  return (
    <>
      <section className="about bg-color2">
        <div className="d-flex alg-center fd-column paddingH2">
          <h2 className="fontMont primeira-cor size-48px fw-bold h2-p txt-center">
            Sobre Artes Manuais
          </h2>
          <p className="fontMont sexta-cor fw-bold txt-center">
            Somos uma loja de artesanato especializada em peças religiosas e
            personalizadas. Acreditamos que cada item <br />
            deve contar uma história e carregar significado especial.
            Trabalhamos com materiais de qualidade para criar <br />
            produtos que vão além do comum, transformando momentos em memórias
            duradouras.
          </p>
        </div>

        <div className="container fontMont d-flex jc-center jc-between card-padding">
          <article className="card-about d-flex fd-column jc-center alg-center">
            <div className="fundo-card d-flex jc-center alg-center marginImg">
              <img src={Coracao} alt="Coração Asset" />
            </div>
            <h3 className="fw-bold terceira-cor h3-p">Artes em Resina</h3>
            <p className="quinta-cor size-12px txt-center">
              Cada peça é criada com dedicação <br />e carinho especial
            </p>
          </article>

          <article className="card-about d-flex fd-column jc-center alg-center">
            <div className="fundo-card d-flex jc-center alg-center marginImg">
              <img src={Estrela} alt="Coração Asset" />
            </div>
            <h3 className="fw-bold terceira-cor h3-p">Qualidade Artesanal</h3>
            <p className="quinta-cor size-12px txt-center">
              Produtos únicos com acabamento <br />
              de excelência
            </p>
          </article>

          <article className="card-about d-flex fd-column jc-center alg-center">
            <div className="fundo-card d-flex jc-center alg-center marginImg">
              <img src={User} alt="Coração Asset" />
            </div>
            <h3 className="fw-bold terceira-cor h3-p">Personalização</h3>
            <p className="quinta-cor size-12px txt-center">
              Adaptamos suas ideias em peças <br />
              exclusivas
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default About;
