import "../App.css";
import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footer bg-color3 fontMont d-flex alg-center fd-column jc-center">
        <div className="fw-bold ">
          <h3 className="primeira-cor txt-center marginH3-p">Artes Manuais</h3>
          <p className="sexta-cor txt-center">Artesanato feito com amor e dedicação</p>
        </div>

        <p className="setima-cor txt-center fw-bold marginP-p">© 2025 Artes Manuais. Todos os direitos reservados.</p>
      </section>
    </>
  );
}

export default Footer;
