import "../App.css";
import "./Products.css";
import CardProduct from "./CardProduct";

//ASSETS
import Tercos from "../assets/tercos.svg";
import Pulseiras from "../assets/pulseiras.svg";
import Chaveiro from "../assets/chaveiro.svg";
import Resina from "../assets/arteResina.svg";
import ItensPersonalizados from "../assets/itensPersonalizados.svg";
import KitsPersonalizados from "../assets/kitsPersonalizados.svg";

function Products() {
  return (
    <>
      <section
        id="nossosProdutos"
        className="products d-flex jc-center bg-color1 fontMont"
      >
        <div className="d-flex alg-center fd-column paddingH2 ">
          <h2 className="fontMont terceira-cor size-48px fw-bold h2-p txt-center">
            Nossos Produtos
          </h2>
          <p className="fontMont quarta-cor fw-bold txt-center">
            Cada peça é feita à mão com atenção aos detalhes e muito carinho
          </p>

          <div className="d-flex products-grid">
            <CardProduct
              image={Tercos}
              alt="Terços ASSETS"
              title="Terços Artesanais"
              description="Terços personalizados e não personalizados, feitos com materiais nobres e muita devoção."
            />

            <CardProduct
              image={Pulseiras}
              alt="Pulseiras ASSETS"
              title="Pulseiras Infantis"
              description="Pulseiras coloridas e seguras para as crianças, 
              com designs encantadores e personalizados."
            />

            <CardProduct
              image={Chaveiro}
              alt="Chaveiro ASSETS"
              title="Chaveiros Religiosos"
              description="Chaveiros com santos, símbolos religiosos e 
              detalhes dourados feitos artesanalmente."
            />

            <CardProduct
              image={Resina}
              alt="Resina ASSETS"
              title="Artes em Resina"
              description="Peças decorativas únicas em resina com
              cores e designs exclusivos."
            />

            <CardProduct
              image={ItensPersonalizados}
              alt="itens Personalizados ASSETS"
              title="Itens Personalizados"
              description="Chaveiros e canetas personalizados com 
              nomes, datas e mensagens especiais."
            />

            <CardProduct
              image={KitsPersonalizados}
              alt="kits Personalizados ASSETS"
              title="Kits Personalizados"
              description="Kits personalizados e não personalizados, 
              feitos com materiais nobres."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
