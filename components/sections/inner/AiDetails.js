import dynamic from "next/dynamic";
import CtaDivalto from "@/components/sections/CtaDivalto";
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
                className="col-xl-6 col-lg-6 col-md-6 order-1 order-md-2" style={{ marginTop: "42px" }}
              >
                <div className="team-details__top-right">
                  <div className="team-details__top-content Aiposi">
                    <h3 className="">Solutions personnalisées​</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                    Des solutions d'IA sur mesure avec une propriété complète du code et des niveaux maximums de personnalisation.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section> */}
      <section className="team-details mb-5">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-content Aiposi">
                    <h3 className="">
                        Cloud IA​
                    </h3>
                    <p className="" style={{ textAlign: "justify" }}>
                    Des solutions d'IA basées sur des services et des outils cloud de Microsoft, AWS, Google, IBM ou SAP.
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
                className="col-xl-6 col-lg-6 col-md-6 order-1 order-md-2" style={{ marginTop: "42px" }}
              >
                <div className="team-details__top-right">
                  <div className="team-details__top-content Aiposi">
                    <h3 className="">Solutions de tiers​</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                    Implémentation de solutions déjà existantes sur le marché telles que des copilotes et des assistants virtuels.
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
      <section className="team-details mb-5">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-content Aiposi">
                    <h3 className="">
                    Intégration de l'IA 
                    </h3>
                    <p className="" style={{ textAlign: "justify" }}>
                    Adaptation et paramétrage de toute solution d'IA pour l'intégrer à notre écosystème technologique tel que l'ERP ou le CRM.
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
      <div className="container pb-0">
        <div className="team-details__top pb-0">
          <div className="row">
            <h3 className="title text-center">
              NOS SOLUTIONS<br /> D'INTELLIGENCE  ARTIFICIELL
               
            </h3>

            <div className="col-xl-4 col-lg-4 col-md-4 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/divalto-1.png" alt="" />
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">
                        {/* <i className="icon fa fa-circle-check" />  */}
                        Divalto business
                      </h5>
                      <p>
                        Contrairement à certains ERP plus complexes, Odoo est
                        connu pour sa prise en main rapide, sans besoin de
                        formations intensives :
                      </p>
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> {""}{" "}
                        l’ensemble des canaux de vente,{""}
                      </h5>
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> {""} la chaine
                        logistique,{""}
                      </h5>
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> {""} la
                        complexité des tarifs,{""}
                      </h5>
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> {""} les
                        catalogues fournisseurs,{""}
                      </h5>
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> {""} les
                        dernières innovations attendus par les acteurs du
                        secteur.{""}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/divalto-7.png" alt="" />
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">
                        Divalto field service
                      </h5>
                      <p>
                        Les entreprises offrant des services terrain ont besoin
                        d’être toujours plus réactives et de bénéficier d’une
                        visibilité en temps réel sur toutes les interactions de
                        l’entreprise (clients, fournisseurs, …). Notre Logiciel
                        ERP-CRM tout terrain, Divalto field service :
                      </p>
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> gère
                        d’importantes flottes multi-agences de techniciens,{""}
                      </h5>
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> {""} suit la
                        rentabilité des affaires et contrats pour accompagner la
                        croissance.,{""}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/divalto-6.png" alt="" />
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title text-center">
                        {/* <i className="icon fa fa-circle-check" />  */}
                        Divalto industry
                      </h5>
                      <p>
                        L’industrie est en pleine transformation : développement
                        et fabrication de produits de plus en plus
                        personnalisés, renforcement du service client, …
                        Nombreux industriels sont à la recherche de solutions
                        leur permettant de mieux gérer leurs coûts et de
                        valoriser leur savoir-faire. Notre logiciel ERP-CRM gère
                        toutes les catégories de données et offre, entre-autre,
                        une ouverture vers l’IoT qu’elles adoptent largement.
                      </p>
                      {/* <h5 className="title">
                        <i className="icon fa fa-circle-check" /> {""}{" "}
                        l’ensemble des canaux de vente,{""}
                      </h5> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}

      <CtaDivalto />

      {/* <sections> */}
      <div className="container pb-0">
        <div className="team-details__top pt-5">
          <div className="row">
            <h3 className="title text-center mb-5">
              FAQ : Nous répondons à vos questions <br /> sur les logiciels ERP
              Divalto
            </h3>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="team-details">
                <div className="team-details__top-content">
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> C’est quoi le
                        système ERP ?{" "}
                      </h5>
                      <p style={{ textAlign: "justify" }}>
                        Un logiciel ERP (Entreprise Resource Planning) est un
                        outil informatisé qui permet le pilotage de
                        l’entreprise. Sa particularité est d’embarquer, en un
                        même logiciel et une seule base de données, les
                        fonctionnalités nécessaires à la gestion de l’ensemble
                        de l’activité d’une entreprise: gestion comptable,
                        gestion commerciale ou gestion des stocks.
                      </p>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Quels sont les
                        avantages d’un ERP ?{" "}
                      </h5>
                      <p style={{ textAlign: "justify" }}>
                        Avec un logiciel ERP, l’information circule plus vite et
                        les coûts ainsi que les ressources sont mieux gérés. »
                        L’entreprise gagne du temps sur le traitement de ses
                        données et optimise ses ressources matérielles et ses
                        processus. Découvrez notre dossier complet sur les
                        logiciels ERP
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
                        <i className="icon fa fa-circle-check" /> Comment
                        choisir le bon ERP ?{" "}
                      </h5>
                      <p style={{ textAlign: "justify" }}>
                        Voici cinq questions à se poser pour bien choisir un
                        logiciel ERP pour PME et ETI : 
                        <br/> → Le logiciel ERP est-il
                        adapté à votre activité ?  <br/>
                         → La solution est-elle
                        ergonomique ?  <br/>
                        → La solution intègre-t-elle des
                        innovations ?  <br/>
                        → La solution est-elle flexible ?  <br/>
                         → Quelle
                        est la fréquence des mises à jour ? Pour faire les bon
                        choix, recevez notre guide complet « comment choisir son
                        logiciel ERP? »
                      </p>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Quels sont les
                        coûts d’un ERP ?{" "}
                      </h5>
                      <p style={{ textAlign: "justify" }}>
                        Le tarif d’un logiciel ERP dépend de plusieurs critères
                        : → du mode d’acquisition : SaaS, licence ou en
                        location, → de la gamme produit choisie, → des
                        fonctionnalités : gestion commerciale, GPAO,
                        comptabilité, → et du nombre d’utilisateurs et de leur
                        profil. Vous trouverez plus d’informations sur la page
                        tarifs ERP de Divalto.
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
      {/* */}

      {/* <Testimonial1 /> */}
      {/* <Slider1 /> */}
      {/* <SliderB1 /> */}
    </>
  );
}
