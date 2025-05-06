import Link from "next/link";
import CtaBtp from "./CtaBtp";

export default function BtpDetail() {
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
                    <img src="images/resource/Btp-2.jpg" alt="solution btp" />
                  </div>
                </div>
                <Link href="/#" className="theme-btn btn-style-one light mt-5">
                  <span className="btn-title-text-white">Contactez-nous</span>
                </Link>
              </div>

              <div
                className="col-xl-6 col-lg-6 col-md-6"
                style={{ marginTop: "1px" }}
              >
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <h3 className="">
                      Concevoir et construire <br /> votre bâtiment
                    </h3>
                    <p
                      className=""
                      style={{ textAlign: "justify", fontSize: "14px" }}
                    >
                      Que votre projet de bâtiment soit complexe, standardisé,
                      de grande taille, sur plusieurs niveaux, éco-responsable
                      ou encore connecté, KOOTHE vous accompagne pour le
                      réaliser, clé en main. Spécialisé dans la conception, la
                      construction, la rénovation ou l’aménagement de votre
                      bâtiment, KOOTHE s’adapte et vous propose une solution
                      sur-mesure, quelle que soit la taille du bâtiment, les
                      spécificités du projet ou le type d’activité. <br />
                      Pour chaque projet, une organisation spécifique est mise
                      en place avec une équipe d’experts à votre écoute : un
                      ingénieur commercial, un directeur de projet et un
                      ingénieur projet qui suit le chantier au quotidien. Toutes
                      les compétences nécessaires à la réussite de votre projet
                      sont sollicitées en interne : directeurs d’études, BIM
                      managers, ingénieurs bâtiment durable, ingénieurs
                      thermiciens et électriciens, responsables sécurité et
                      qualité, ingénieurs achats, responsables juridiques et
                      assurances. KOOTHE vous accompagne de la conception à la
                      livraison de votre bâtiment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* */}
      <section className="team-details mb-5">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">
                      Réaliser des bâtiments durables et intelligents
                    </h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      KOOTHE a mis en place une équipe dédiée pour vous proposer
                      des solutions durables et écoresponsables autour de 5
                      thématiques : la performance énergétique, le bas-carbone,
                      la protection de la biodiversité, le confort intérieur et
                      le chantier à faible impact.
                    </p>

                    <p className="" style={{ textAlign: "justify" }}>
                      Avec l’appui du Lab et de ses ingénieurs bâtiment durable,
                      KOOTHE anticipe les réglementations à venir et vous
                      accompagne dans votre démarche environnementale, vos
                      certifications ou labellisations, tout au long de votre
                      projet.
                    </p>
                    <p className="" style={{ textAlign: "justify" }}>
                      Toujours au sein du Lab, les ingénieurs en smartbuilding
                      proposent des solutions innovantes pour préparer le
                      bâtiment de demain à être connecté et devenir communicant.
                      Avec EnerGiSE, un service d’analyses sur les consommations
                      énergétiques du bâtiment, KOOTHE vous conseille pour une
                      meilleure utilisation des ressources et un confort optimal
                      des utilisateurs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-img mt-5">
                    {" "}
                    <img src="images/resource/Btp-3.jpg" alt="btp" />
                  </div>
                  <Link
                    href="/#"
                    className="theme-btn btn-style-one light mt-5"
                  >
                    <span className="btn-title-text-white">Contactez-nous</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* */}


      <CtaBtp />

      {/* <section> */}
      <div className="container pt-3">
        <div className="team-details__top pb-0">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  {/* <img src="images/resource/btp-1.png" alt="" /> */}
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">
                        {/* <i class="icon flaticon-megaphone"></i>
                        <br /> */}
                        Recherche foncière
                      </h5>
                      <p>
                        En phase amont de votre projet, KOOTHE et son équipe
                        d’experts vous accompagnent et vous proposent des
                        solutions immobilières complètes pour l’implantation de
                        bâtiments intégrés dans leur environnement local.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  {/* <img src="images/resource/btp-1.png" alt="" /> */}
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">
                        {/* <i class="icon flaticon-megaphone"></i>
                        <br /> */}
                        Conception et ingénierie
                      </h5>
                      <p>
                        Les ingénieurs des services Bâtiment Durable, Etudes et
                        Utilités de KOOTHE vous proposent des solutions techniques
                        et adaptées selon vos besoins et selon les contraintes
                        du projet, pour une réalisation optimisée et sur-mesure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  {/* <img src="images/resource/btp-1.png" alt="" /> */}
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">
                        {/* <i class="icon flaticon-megaphone"></i> */}
                        {/* <br /> */}
                        Construction,rénovation, extension
                      </h5>
                      <p>
                        KOOTHE gère les travaux de construction, rénovation ou
                        d’extension de votre bâtiment et s’engage sur le prix,
                        la qualité et le délai de livraison. Une attention est
                        portée sur l’aspect environnemental du chantier et du
                        projet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  {/* <img src="images/resource/btp-1.png" alt="" /> */}
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">
                        {/* <i class="icon flaticon-megaphone"></i> */}
                        {/* <br /> */}
                        Aménagement / <br /> Fit out
                      </h5>
                      <p>
                        Le Lab de KOOTHE propose des solutions de design et
                        d’aménagement intérieur orientées sur le bien-être et le
                        confort des utilisateurs pour une meilleure qualité de
                        vie au travail tout en optimisant les consommations
                        énergétiques.
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
