import dynamic from "next/dynamic";
import CtaIA from "@/components/sections/CtaIA";
// import Link from "next/link";
// import About2 from "@/components/sections/About2";
// import Testimonial1 from "../Testimonial1";
// import Slider1 from "../Slider1";
import SliderB1 from "../SliderB1";

export default function AiDetails() {
  return (
    <>
      {/*  Details  */}
      <section className="team-details">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-5 order-2 order-md-1">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img
                      src="images/resource/IA-1.jpg"
                      alt="solution divalto"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 order-1 order-md-2"
                style={{ marginTop: "42px" }}
              >
                <div className="team-details__top-right">
                  <div className="team-details__top-content Aiposi">
                    <h3 className="">Solutions personnalisées​</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      Des solutions d'IA sur mesure avec une propriété complète
                      du code et des niveaux maximums de personnalisation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section> */}
      <section className="team-details">
        <div className="container" style={{ marginTop: "-90px" }}>
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-content Aiposi">
                    <h3 className="">Cloud IA​</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      Des solutions d'IA basées sur des services et des outils
                      cloud de Microsoft, AWS, Google, IBM ou SAP.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/IA-2.jpg" alt="Divalto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section> */}

      {/* <section> */}
      <section className="team-details">
        <div className="container" style={{ marginTop: "-192px" }}>
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 order-2 order-md-1">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img
                      src="images/resource/IA-8.jpg"
                      alt="solution divalto"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 order-1 order-md-2"
                style={{ marginTop: "42px" }}
              >
                <div className="team-details__top-right">
                  <div className="team-details__top-content Aiposi">
                    <h3 className="">Solutions de tiers​</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      Implémentation de solutions déjà existantes sur le marché
                      telles que des copilotes et des assistants virtuels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section> */}

      {/* <section> */}
      <section className="team-details">
        <div className="container" style={{ marginTop: "-192px" }}>
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 ">
                <div className="team-details__top-left">
                  <div className="team-details__top-content Aiposi">
                    <h3 className="">Intégration de l'IA</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      Adaptation et paramétrage de toute solution d'IA pour
                      l'intégrer à notre écosystème technologique tel que l'ERP
                      ou le CRM.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/IA-7.jpg" alt="Divalto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section> */}

      {/* <section> */}
      <div className="container pt-4">
        <div className="team-details__top">
          <div className="row">
            <h3 className="title text-center">
              NOS SOLUTIONS <br /> D'INTELLIGENCE ARTIFICIELLE
            </h3>

            <div className="col-xl-4 col-lg-4 col-md-4 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/IA-10.jpg" alt="" />
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">IA Générative</h5>
                      <p style={{ textAlign: "justify" }}>
                        Création de nouvelles idées et de nouveaux contenus,
                        tels que des conversations, des histoires, des images,
                        des vidéos et de la musique, par l'apprentissage de
                        grandes quantités de données et de modèles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/IA-11.jpg" alt="" />
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">Machine Learning</h5>
                      <p style={{ textAlign: "justify" }}>
                        Utilisation des données pour l'identification de schémas
                        dans les
                        <strong>
                          big data et la réalisation de prédictions{" "}
                        </strong>
                        à travers des algorithmes avancés.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/IA-12.jpg" alt="" />
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">
                        Vision par ordinateur
                      </h5>
                      <p style={{ textAlign: "justify" }}>
                        C'est la technologie qui permet aux machines{" "}
                        <strong>
                          d'interpréter et de comprendre l'information visuelle
                        </strong>{" "}
                        des images numériques ou des vidéos pour effectuer des
                        tâches telles que la reconnaissance d'objets, la
                        détection d'événements et la navigation autonome.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}

      <CtaIA />

      {/* <section> */}
      <div className="container pb-0">
        <div className="team-details__top pb-0">
          <div className="row">
            <h3 className="title text-center">Nos solutions</h3>

            <div className="col-xl-4 col-lg-4 col-md-4 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/IA-4.jpg" alt="" />
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">
                        {/* <i className="icon fa fa-circle-check" />  */}
                        Solutions Numériques​
                      </h5>
                      <p>
                        Développement de solutions pour une expérience optimale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/IA-5.jpg" alt="" />
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">
                        Applications professionnelles
                      </h5>
                      <p>
                        Applications pour une gestion efficace des données et la
                        prise de décisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/IA-6.jpg" alt="" />
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">
                        {/* <i className="icon fa fa-circle-check" />  */}
                        Technologie
                      </h5>
                      <p>
                        Évolution des infrastructures et migration vers le
                        Cloud.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
}
