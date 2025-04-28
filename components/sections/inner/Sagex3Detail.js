import dynamic from "next/dynamic";
import CtaSageX3 from "@/components/sections/CtaSageX3";
// import Link from "next/link";
// import About2 from "@/components/sections/About2";
// import Testimonial1 from "../Testimonial1";
// import Slider1 from "../Slider1";
import SliderB1 from "../SliderB1";

export default function Sagex3Detail() {
  return (
    <>
      {/*  Details  */}
      {/* <section className="team-details">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img
                      src="images/resource/solution_odoo.jpg"
                      alt="solution Odoo"
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
                    <h3 className="">En quoi consiste Sage X3 ?</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      Sage X3 est un logiciel ERP (Enterprise Resource Planning)
                      complet qui aide les entreprises à gérer leurs finances,
                      leurs opérations et leur chaîne logistique, ainsi qu'à
                      améliorer leur efficacité, leur rentabilité et leur
                      réactivité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="container mt-5">
        <div className="team-details__top pb-0">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/sageX3.png" alt="" />
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Mobilité:{" "}
                      </h5>
                      <p>
                        Expérience optimisée sur mobile avec affichage et
                        fonctionnalités personnalisés.
                      </p>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Configurable:{" "}
                      </h5>
                      <p>
                        Personnalisez votre logiciel selon vos besoins
                        opérationnels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="team-details__top-right">
                <div className="team-details__top-content">
                  <h3 className="">Découvrez la puissance de Sage X3 : </h3>
                  <p>
                    Sage X3 est un logiciel ERP (Enterprise Resource Planning)
                    complet qui aide les entreprises à gérer leurs finances,
                    leurs opérations et leur chaîne logistique, ainsi qu'à
                    améliorer leur efficacité, leur rentabilité et leur
                    réactivité.
                  </p>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Collaboration:{" "}
                      </h5>
                      <p>
                        Gestion des transactions et des flux de travail de
                        plusieurs sites et entreprises.
                      </p>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Espace de
                        travail :{" "}
                      </h5>
                      <p>
                        Accédez à des pages de destination personnalisables
                        contenant des rapports et des données sur mesure en
                        fonction de chaque poste.
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
      <section className="team-details mb-0">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            {/* <h3 className="">Gestion de la production</h3> */}
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">Gestion de la production</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      Lancez vos produits sur le marché rapidement et
                      précisément en gérant l’ensemble des processus de
                      production sur un système unique.
                    </p>
                    {/* <span className="" style={{color:"black", fontWeight:'bold', fontSize:'29px',}}>Voici quelques caractéristiques clés de SAP S/4HANA Cloud: </span> */}

                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" />{" "}
                          Planification des nomenclatures{" "}
                        </h5>
                      </div>
                    </div>

                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Pilotage de
                          l’atelier{" "}
                        </h5>
                      </div>
                    </div>

                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Contrôle
                          qualité{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Gestion des
                          projets{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Gestion de
                          pro{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">Gestion de la chaîne logistique</h3>
                    <p>
                      Le contrôle des stocks en temps réel vous permet de
                      répondre à la demande et de conserver une longueur
                      d'avance.
                    </p>
                    {/* <img src="images/resource/odoo-6.jpg" alt="Odoo" /> */}
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Achats{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Gestion des
                          stocks{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Gestion des
                          ventes{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Service
                          client{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Chaîne logi{" "}
                        </h5>
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

      {/* */}
      <section className="team-details mb-0">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            {/* <h3 className="">Gestion de la production</h3> */}
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">Gestion financière</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      Suivez efficacement votre rentabilité grâce à la
                      visibilité globale en temps réel et au respect des
                      réglementations locales.
                    </p>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Budgets et
                          comptabilité{" "}
                        </h5>
                      </div>
                    </div>

                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" />{" "}
                          Immobilisations{" "}
                        </h5>
                      </div>
                    </div>

                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Reporting
                          financier{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" />{" "}
                          Multi-devises, multi-taxes, multi-sociétés{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">
                      Découvrez la puissance de Sage X3 dans le cloud
                    </h3>
                    <p>
                      Découvrez la puissance de Sage X3 dans le cloud, en toute
                      sécurité, avec Sage Service Cloud. Utilisez une solution
                      unique pour bénéficier d'une visibilité en temps réel sur
                      l'ensemble de votre activité. Gérez de manière fluide
                      chaque étape des processus complexes, de la chaîne
                      logistique aux ventes. Disposez de la flexibilité dont
                      vous avez besoin pour décupler le potentiel de votre
                      entreprise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* */}

      {/* <section className="team-details"> */}

      {/* */}

      <section className="team-details mt-5">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">Sage X3 s'adapte à votre secteur</h3>
                    <p>
                      Odoo convient à une grande variété de secteurs, tels que :
                    </p>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" />{" "}
                          Agroalimentaire :{" "}
                        </h5>
                        <p>
                          Garantissez la qualité et la sécurité alimentaire
                          grâce à la traçabilité de bout en bout et au contrôle
                          qualité.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Industries de
                        transformation :{" "}
                      </h5>
                      <p>
                        Garantissez l'homogénéité de vos activités, optimisez la
                        planification et gérez la conformité, quelles que soient
                        les devises, les régions et les réglementations.
                      </p>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Production de
                        composants :{" "}
                      </h5>
                      <p>
                        Bénéficiez d'informations approfondies et d'une
                        meilleure visibilité sur l'ensemble de vos opérations de
                        fabrication afin d'améliorer la prise de décision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/sqgeX_3.jpg" alt="" />
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Industries
                          de transformation :{" "}
                        </h5>
                        <p>
                          Garantissez l'homogénéité de vos activités, optimisez
                          la planification et gérez la conformité, quelles que
                          soient les devises, les régions et les
                          réglementations.
                        </p>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Production
                          de composants :{" "}
                        </h5>
                        <p>
                          Bénéficiez d'informations approfondies et d'une
                          meilleure visibilité sur l'ensemble de vos opérations
                          de fabrication afin d'améliorer la prise de décision.
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

      {/* Pourquoi SAP */}
      {/* <About2 /> */}
      <CtaSageX3 />

      {/* */}
      {/* <section className="team-details"> */}
      <div className="container pb-0">
        <div className="team-details__top pt-5">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/sageX3-2.png" alt="" />
                  {/* <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Facilité
                        d’utilisation :{" "}
                      </h5>
                      <p>
                        Contrairement à certains ERP plus complexes, Odoo est
                        connu pour sa prise en main rapide, sans besoin de
                        formations intensives.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="team-details__top-right">
                <div className="team-details__top-content">
                  <h3 className="">SAGE X3 Bien plus qu'un ERP: </h3>
                  <p>
                    Utilisez une solution unique pour bénéficier d'une
                    visibilité en temps réel sur l'ensemble de votre activité.
                  </p>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Une solution
                        extensible pour une croissance illimitée.{" "}
                      </h5>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Flexible et
                        personnalisable pour suivre l'évolution de vos besoins.{" "}
                      </h5>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" />{" "}
                        Fonctionnalités adaptées à de nombreux pays et systèmes
                        réglementaires{" "}
                      </h5>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Conçu pour les
                        besoins spécifiques de votre secteur.{" "}
                      </h5>
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
