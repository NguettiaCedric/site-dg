import Link from "next/link";
import CtaDeveloppement from "./CtaDeveloppement";

export default function DeveloppementWeb() {
  return (
    <>
      <section className="services-section-two pt-5">
        <div className="bg bg--12" />
        <div className="auto-container">
          <div className="sec-title text-center black">
            {/* <span className="sub-title">Découvrez</span> */}
            <h2>
              Développement web et mobile <br /> (e-commerce, CRM, dashboards)
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <h2>Développement web</h2>
              <p className="text-justify" style={{ textAlign: "justify" }}>
                Découvrez notre service de développement web sur mesure, conçu
                pour transformer vos idées en solutions numériques percutantes.
                Que vous cherchiez à créer un site web élégant, une application
                web interactive ou une plateforme e-commerce robuste, notre
                équipe d'experts en développement web est là pour répondre à vos
                besoins.
              </p>
              <p className="text-justify" style={{ textAlign: "justify" }}>
                Grâce à notre approche personnalisée, nous travaillons en
                étroite collaboration avec vous à chaque étape du processus, de
                la conception initiale au déploiement final, pour nous assurer
                que votre vision devienne une réalité numérique.
              </p>
              <p className="text-justify" style={{ textAlign: "justify" }}>
                Avec notre expertise technique, notre engagement envers la
                qualité et notre souci du détail, nous sommes prêts à relever
                tous les défis et à vous fournir des solutions web
                exceptionnelles qui dépassent vos attentes. Confiez-nous votre
                prochain projet de développement web et laissez-nous vous aider
                à concrétiser votre vision en ligne.
              </p>
              <div className="mt-4">
                <Link href="/page-demo" className="theme-btn btn-style-one">
                  <span className="btn-title">Demander un devis</span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <img
                src="images/resource/dev.jpg"
                className="img-fluid rounded"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <CtaDeveloppement /> */}
        <CtaDeveloppement />
      </section>
    </>
  );
}
