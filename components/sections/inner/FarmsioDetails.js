import dynamic from "next/dynamic";

import Link from "next/link";

export default function FarmsioDetails() {
  return (
    <>
      <section className="team-details ">
        {/* <div className=""></div> */}
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/formsio02.png" alt="" />
                    <div className="team-details__big-text"></div>
                  </div>
                </div>
                <p>
                  Depuis un tableau de bord centralisé, supervisez vos
                  opérations terrain pour maximiser la productivité de votre
                  exploitation.
                </p>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-content">
                    <span
                      className=""
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "29px",
                      }}
                    >
                      Assurez la traçabilité de votre chaîne d'approvisionnement
                      agricole avec notre solution innovante FARMSIO
                    </span>
                    <p className="" style={{ textAlign: "justify" }}>
                      FARMSIO est une plateforme numérique certifiée ISO 9001 :
                      2015 qui permet la digitalisation intégrale de la chaîne
                      de valeur, couvrant à la fois les processus avant et après
                      la récolte.
                    </p>

                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" />{" "}
                          Planification des cultures et calendrier des
                          semis/récoltes
                        </h5>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Gestion des
                          stocks de semences, fertilisants et produits
                          phytosanitaires
                        </h5>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Traçabilité
                          des livraisons et de la logistique aval
                        </h5>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Suivi des
                          équipements agricoles et de l'affectation des
                          ressources humaines
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

      {/*  <div>
     Quelques fonctionnalités clé :
     </div> */}
      <div class="sec-title text-center">
        <h2 class="mt-5">Quelques fonctionnalités clés :</h2>
      </div>
      {/*  */}

      <section className="team-details bg bg-pattern-7">
        <div className=""></div>
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">
                      Enregistrement des producteurs et Mapping des Champs
                    </h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      La cartographie précise des champs est au cœur de notre
                      mission chez FARMSIO. Nous utilisons des technologies de
                      pointe telles que la télédétection par satellite et les
                      drones pour créer des cartes détaillées de vos parcelles
                      agricoles. Ces cartes fournissent des informations
                      essentielles sur la topographie, la santé des cultures, la
                      qualité du sol et bien plus encore,vous permettant de
                      prendre des décisions éclairées pour optimiser les
                      rendements et améliorer la durabilité de votre
                      exploitation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-img">
                    {" "}
                    <img
                      src="images/resource/formsio06.png"
                      style={{ height: "" }}
                      alt=""
                    />
                    <div className="team-details__big-text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-details ">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/farmsio04.jpg" alt="" />
                    <div className="team-details__big-text"></div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-content">
                    <h3 className="">Traçabilité agricole intelligente</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      Farmsio révolutionne la manière dont nous percevons la
                      traçabilité dans l'industrie agroalimentaire. Notre
                      plateforme offre une solution complète pour suivre chaque
                      étape du parcours des produits agricoles, depuis leur
                      origine jusqu'à leur arrivée sur les étagères des
                      magasins. Grâce à des technologies de pointe et à une
                      infrastructure robuste, Farmsio assure une traçabilité
                      transparente et fiable, offrant une tranquillité d'esprit
                      à chaque acteur de la chaîne d'approvisionnement depuis un
                      tableau de bord centralisé.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-details bg bg-pattern-7">
        <div className="container pb-4">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">Enquêtes Agricoles Intuitives</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      FARMSIO simplifie la collecte de données agricoles grâce à
                      des enquêtes intuitives et personnalisables. Que vous
                      soyez un agriculteur indépendant ou une grande
                      exploitation, notre plateforme vous permet de créer des
                      enquêtes sur mesure pour recueillir des informations
                      vitales sur vos cultures, vos pratiques agricoles et vos
                      besoins spécifiques. De plus, nous facilitons l'obtention
                      de certifications telles que Fairtrade, UTZ, RA et ISCC
                      etc… pour les agriculteurs, garantissant ainsi la
                      conformité aux normes et aux pratiques durables. Ces
                      données vous aident à mieux comprendre votre exploitation,
                      à identifier les opportunités d'amélioration et à prendre
                      des décisions stratégiques pour optimiser vos opérations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/farmsio05.jpg" alt="" />
                    <div className="team-details__big-text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Ctarsm  /> */}
      {/* <Ctafarmsio  /> */}

      <section className="team-details">
        <div className="container pb-4">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/farmsio07.jpg" alt="" />
                    <div className="team-details__big-text"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-content">
                    <h3 className="">
                      Gestion des stocks et des approvisionnements
                    </h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      La gestion efficace des stocks et des approvisionnements
                      sont essentiels pour assurer le bon fonctionnement de
                      votre exploitation agricole. Avec FARMSIO, nous vous
                      proposons des outils avancés pour le Suivi des Stocks,
                      Gestion des Approvisionnements, Optimisation des
                      Commandes, Gestion des Livraisons et Réceptions et la
                      Sécurité pour optimiser votre activité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-details bg bg-pattern-7">
        <div className="container pb-1">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">Planification des cultures</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      La planification intelligente des cultures est la clé
                      d'une exploitation agricole prospère. Avec FARMSIO,
                      simplifiez et optimisez ce processus pour obtenir des
                      rendements maximaux et une utilisation efficace de vos
                      ressources.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/farmsio08.jpg" alt="" />
                    <div className="team-details__big-text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="team-details__top-content">
        <div className="container my-5">
          <h3 className="">Valeurs Ajoutées : </h3>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-content">
                  <h3 className="">
                    La plateforme FARMSIO, focalisée sur l'agriculture, offre
                    les possibilités de :
                  </h3>

                  <div className="team-details__top-content mt-5">
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Suivre et
                          faire l’évaluation du risque de l’exploitation
                          agricole{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Analyser
                          l’impact agricole
                        </h5>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Effectuer
                          des recherches interne avec IA / ML et télédétection
                        </h5>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Promouvoir
                          une utilisation souple et indépendante de la
                          connectivité en ligne.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-content">
                  <h3 className="">
                    FARMSIO impact les agriculteurs en leurs permettant de :{" "}
                  </h3>
                  <div className="team-details__top-content mt-5">
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Favoriser
                          les moyens de subsistance et agriculture durable
                        </h5>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Réduire le
                          coût de la culture et en fournissant des conseils pour
                          atténuer les risques climatiques
                        </h5>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Fournir une
                          solution et une plateforme de marché reliant les
                          processeurs, les acheteurs et les commerçants
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-details__top-content">
        <div className="container mb-2">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-content">
                  <h3 className="">
                    {" "}
                    FARMSIO dispose d’une architecture ouverte offrant les
                    services suivants :
                  </h3>

                  <div className="team-details__top-content mt-5">
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Service API{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Intégration
                          facile avec les logiciels existants{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Cadre
                          internet et hautement personnalisable{" "}
                        </h5>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Haute
                          évolutivité et données sécurisées
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="team-details bg"> */}
      <div className=""></div>
      <div className="container pb-0">
        <div className="team-details__top pb-0"></div>
      </div>
      {/* </section> */}

      <div className="mt-0 mb-2" style={{ textAlign: "center" }}>
        <Link
          className="theme-btn btn-style-one"
          style={{ marginLeft: "11px" }}
          href="/page-contact"
        >
          <span className="btn-title" style={{ fontSize: "18px" }}>
            Connectez-nous
          </span>
        </Link>
      </div>
    </>
  );
}
