import Link from "next/link";
import CtaImportExport from "@/components/sections/CtaImportExport";

export default function ImportExp() {
  return (
    <>
      {/*  Details  */}
      <section className="team-details">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img
                      src="images/resource/export-import-3.jpg"
                      alt="solution divalto"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6"
                style={{ marginTop: "42px" }}
              >
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <h3 className="">Import-Export chez KOOTHE</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      KOOTHE propose des services d'importation et d'exportation
                      en Côte d'Ivoire, adaptés aux besoins des entreprises de
                      toutes tailles. L'objectif est de faciliter les échanges
                      internationaux en prenant en charge chaque étape du
                      processus, de l'approvisionnement en produits jusqu'au
                      respect des réglementations douanières. <br />
                      Grâce à une expertise locale et à un réseau mondial,
                      KOOTHE offre des solutions complètes pour assurer des
                      transactions internationales fluides et efficaces.
                      L'entreprise s'occupe de la documentation douanière, de la
                      gestion logistique et du conseil en conformité, permettant
                      ainsi aux clients de se concentrer sur le développement de
                      leur activité sans se soucier des complexités liées au
                      commerce international.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* </section> */}

      <CtaImportExport />

      {/* <sections> */}
      <div className="container pb-0">
        <div className="team-details__top pt-5">
          <div className="row">
            <h3 className="title text-center mb-5">
            Les services couvrent plusieurs <br/> aspects clés du commerce extérieur :
            </h3>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="team-details">
                <div className="team-details__top-content">
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> {" "}Approvisionnement de produits{" "}
                      </h5>
                      <p style={{ textAlign: "justify" }}>
                      Recherche des meilleures sources pour les marchandises, <br /> en assurant qualité et régularité.
                      </p>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" />{" "} 
                        Documentation douanière :{" "}
                      </h5>
                      <p style={{ textAlign: "justify" }}> Gestion de toutes les formalités administratives pour  <br /> assurer le respect des réglementations en vigueur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="team-details">
                <div className="team-details__top-content">
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> {" "} Logistique mondiale :{" "}
                      </h5>
                      <p style={{ textAlign: "justify" }}> Réseau de transport permettant une gestion fluide  <br /> des expéditions tant à l'import qu'à l'export.
                      </p>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" />{" "}
                        Conseil en conformité :{" "}
                      </h5>
                      <p style={{ textAlign: "justify" }}> Offre de conseils personnalisés pour garantir que les opérations respectent toutes les normes internationales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div>
                <p style={{ textAlign: "justify" }}>KOOTHE intervient dans divers secteurs d'activité, notamment l'industrie manufacturière, le commerce de détail et l'agriculture, offrant des solutions adaptées à chaque domaine.
                Que vous soyez une petite entreprise ou une grande société, KOOTHE s'engage à fournir un service de qualité, garantissant la réussite des projets d'import-export en Côte d'Ivoire et au-delà.
                </p>

            </div>

        </div>

      </div>
      {/* </section> */}
      {/* */}
    </>
  );
}
