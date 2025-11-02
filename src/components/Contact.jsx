import "../App.css";
import "./Contact.css";
 
//ASSETS
import Whatsapp from "../assets/redesSociais/whatsapp.svg";
import Instagram from "../assets/redesSociais/instagram.svg";

function Contact() {
  return (
    <>
      <section className="contact bg-color1 fontMont">
        <div className="d-flex jc-center fd-column alg-center paddingH2">
          <h2 className="terceira-cor size-48px fw-bold h2-p">Contato</h2>
          <p className="fw-bold size-20px txt-center quarta-cor">
            Estamos prontos para criar algo especial para você. Fale conosco{" "}
            <br />e realize seu pedido personalizado!
          </p>
        </div>

        <div className="d-flex jc-center alg-center gap-buttons">
        <button className="d-flex alg-center jc-center button-one gap-button-img primeira-cor fw-bold" onClick={() => window.open("https://wa.me/5589999300439", "_blank")}>
          <img src={Whatsapp} alt="Whats ASSETS" />
          Whatsapp
        </button>
        <button className="d-flex alg-center jc-center button-two gap-button-img primeira-cor fw-bold" onClick={() => window.open("https://www.instagram.com/artesmanuais._/", "_blank")}>
          <img src={Instagram} alt="Insta ASSETS" />
          Instagram
        </button>
        </div>
      </section>
    </>
  );
}

export default Contact;
