import dynamic from "next/dynamic";
import CtaAlfesco from "@/components/sections/CtaAlfesco";
// import Link from "next/link";
// import About2 from "@/components/sections/About2";
// import Testimonial1 from "../Testimonial1";
// import Slider1 from "../Slider1";
import SliderB1 from "../SliderB1";

export default function AlfrescoDetails() {
  return (
    <>
      {/*  Details  */}

      {/* */}
      <section className="team-details mb-5">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className=""> Fonctionnalités principales ?</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      La plateforme Alfresco propose des services complets de
                      contenu cloud-natif. Découvrez quelques-unes des
                      principales fonctionnalités qui en font un atout puissant
                      pour toute organisation:
                    </p>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Gestion de
                          documents :{" "}
                        </h5>
                        <p>
                          Avec la plateforme Alfresco, vous pouvez rapidement
                          trouver et consulter l'information exacte que vous
                          recherchez, de n'importe où et sur n'importe quel
                          appareil, grâce à des outils de visualisation basés
                          sur le web.
                        </p>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Gestion
                          intelligente des processus :{" "}
                        </h5>
                        <p>
                          Des fonctionnalités de services de processus et de
                          contenu étroitement intégrées rationalisent les
                          processus centrés sur le contenu et permettent une
                          prise de décision plus rapide et mieux documentée.
                        </p>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" />{" "}
                          Collaboration dans l'entreprise :{" "}
                        </h5>
                        <p>
                          Les équipes peuvent bénéficier en toute transparence
                          des avantages de Microsoft 365 et de Google Docs, ce
                          qui permet d'accroître la productivité grâce aux
                          outils de collaboration de l'entreprise.
                        </p>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Élargir et intégrer :{" "}
                        </h5>
                        <p>
                        Fondée sur des normes et des API ouvertes, la plateforme Alfresco est facile à intégrer et à personnaliser pour 
                        répondre aux besoins de votre entreprise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/ALFRESCO-1.png" alt="Odoo" />
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          {/* <i className="icon fa fa-circle-check" />
                          Évolutivité :{" "} */}
                          <i className="icon fa fa-circle-check" /> Gouvernance
                          de l'information :{" "}
                        </h5>
                        <p>
                          Alfresco Governance Services automatise le cycle de
                          vie de l'information avec une intervention minimale de
                          la part des utilisateurs, ce qui réduit les risques et
                          renforce la conformité pour l'entreprise.
                        </p>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Intelligence et analyses :{" "}
                        </h5>
                        <p>
                        La plateforme Alfresco offre un moyen évolutif d'enrichir automatiquement le contenu et les métadonnées, et de fournir 
                        des renseignements clés en extrayant automatiquement des informations précieuses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* */}

      
      <CtaAlfesco />

      {/* */}
      {/* <section className="team-details"> */}
     
    </>
  );
}
