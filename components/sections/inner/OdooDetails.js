import dynamic from "next/dynamic";
import CtaOdoo from "@/components/sections/CtaOdoo";
// import Link from "next/link";
// import About2 from "@/components/sections/About2";
// import Testimonial1 from "../Testimonial1";
// import Slider1 from "../Slider1";
import SliderB1 from "../SliderB1";

export default function OdooDetails() {
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
                    <h3 className="">
                      Trouvez la solution ERP idéale pour piloter la croissance
                      de votre PME avec Odoo
                    </h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      Aujourd’hui, Odoo offre plus de 30 modules principaux
                      (comme la gestion des ventes, la comptabilité, la gestion
                      des projets, etc.) et des milliers d’applications tierces
                      disponibles dans son App Store, permettant ainsi une
                      grande flexibilité et la personnalisation du système en
                      fonction des besoins spécifiques de chaque entreprise.
                    </p>
                    {/* <p className="text-justify" style={{textAlign: 'justify'}}>
                      De la comptabilité à la budgétisation, en passant par les
                      achats et la gestion des stocks, jusqu’aux ventes, la
                      gestion de la relation client et la gestion de projet…
                      tout est réuni en un seul et même endroit ! Avec SAP
                      Business One, vous avez la certitude que vos processus de
                      gestion resteront efficaces, protégés et rentables !
                    </p> */}
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
                    <h3 className="">Pourquoi utiliser Odoo ?</h3>
                    <p className="" style={{ textAlign: "justify" }}>
                      Odoo présente de nombreux avantages pour les entreprises
                      qui cherchent à centraliser et à optimiser leur gestion.
                      Voici les raisons pour lesquelles Odoo est un excellent
                      choix :
                    </p>
                    {/* <span className="" style={{color:"black", fontWeight:'bold', fontSize:'29px',}}>Voici quelques caractéristiques clés de SAP S/4HANA Cloud: </span> */}

                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Réduction
                          des coûts opérationnels :{" "}
                        </h5>
                        <p>
                          Odoo permet de réduire les coûts de gestion en
                          centralisant tous les besoins d’une entreprise sur une
                          seule plateforme. Plutôt que de jongler entre
                          plusieurs outils pour chaque département, Odoo
                          centralise les fonctions dans une interface unifiée.
                          Cela limite les coûts de licence et de maintenance de
                          logiciels multiples et favorise l’efficacité.
                        </p>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" />{" "}
                          Automatisation et efficacité :{" "}
                        </h5>
                        <p>
                          Grâce aux fonctionnalités d’automatisation d’Odoo, les
                          tâches répétitives peuvent être minimisées. Par
                          exemple, le traitement des commandes, la génération
                          des factures et le suivi des stocks peuvent être
                          automatisés, ce qui permet aux employés de se
                          concentrer sur des tâches à plus forte valeur ajoutée.
                        </p>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" />{" "}
                          Personnalisation avancée :{" "}
                        </h5>
                        <p>
                          L’un des principaux avantages d’Odoo réside dans sa
                          personnalisation. Que ce soit en intégrant de nouveaux
                          modules ou en adaptant des modules existants, les
                          entreprises peuvent configurer Odoo selon leurs
                          besoins. Les développeurs peuvent personnaliser le
                          code, et Odoo offre des options de personnalisation de
                          l’interface, des workflows, et même des rapports.
                        </p>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Support
                          technique et mises à jour continues :{" "}
                        </h5>
                        <p>
                          Odoo met régulièrement à jour ses logiciels avec des
                          améliorations et des fonctionnalités nouvelles. Les
                          utilisateurs de la version Enterprise bénéficient d’un
                          support technique et de mises à jour qui garantissent
                          la sécurité et la performance de leur instance Odoo.
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
                    <img src="images/resource/odoo-6.jpg" alt="Odoo" />
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          {/* <i className="icon fa fa-circle-check" />
                          Évolutivité :{" "} */}
                          <i className="icon fa fa-circle-check" /> Évolutivité
                          :{" "}
                        </h5>
                        <p>
                          Odoo est conçu pour grandir avec l’entreprise. Il
                          convient aux startups et aux PME, mais il est aussi
                          assez robuste pour répondre aux besoins des grandes
                          entreprises. Cette évolutivité fait d’Odoo un choix
                          idéal pour les entreprises en croissance qui veulent
                          éviter les coûts liés à la migration vers un nouveau
                          logiciel.
                        </p>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Une forte
                          communauté de soutien :{" "}
                        </h5>
                        <p>
                          Avec une communauté mondiale de développeurs, de
                          consultants et d’utilisateurs, Odoo bénéficie d’un
                          soutien important. Cela permet de trouver des
                          ressources d’apprentissage, des modules
                          complémentaires, des corrections de bugs, et des
                          conseils d’optimisation. Il existe également de
                          nombreux forums, blogs et formations en ligne.
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

      {/* <section className="team-details"> */}
      <div className="container pb-0">
        <div className="team-details__top pb-0">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/Odoo-2.jpg" alt="" />
                  <div className="info-box mt-3">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="team-details__top-right">
                <div className="team-details__top-content">
                  <h3 className="">
                    Odoo vs Autres ERP : Ce qui le différencie :{" "}
                  </h3>
                  <p>
                    Comparé à d’autres ERP comme SAP, Oracle ou Microsoft
                    Dynamics, Odoo offre certains avantages distincts :
                  </p>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Prix :{" "}
                      </h5>
                      <p>
                        La version Community est gratuite, et même la version
                        Enterprise est moins coûteuse que les autres ERP
                        traditionnels.
                      </p>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Flexibilité
                        open source :{" "}
                      </h5>
                      <p>
                        La possibilité de modifier le code source est un atout
                        majeur pour les entreprises ayant des besoins très
                        spécifiques.
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

      <section className="team-details mb-5">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">
                      Odoo : Pour quels types d’entreprises ?
                    </h3>
                    <p>
                      Odoo convient à une grande variété de secteurs, tels que :
                    </p>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Commerce de
                          détail :{" "}
                        </h5>
                        <p>Gestion des stocks, ventes et comptabilité</p>
                      </div>
                    </div>
                  </div>

                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Fabrication :{" "}
                      </h5>
                      <p>
                        Gestion des processus de production, des stocks, et des
                        achats
                      </p>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Services
                        professionnels :{" "}
                      </h5>
                      <p>Gestion de projet, facturation, suivi des heures</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/Odoo-4.png" alt="" />
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> Éducation et
                          formation :{" "}
                        </h5>
                        <p>Planification des cours, gestion des élèves</p>
                      </div>
                    </div>
                    <div className="info-box mt-3">
                      <div className="inner">
                        <h5 className="title">
                          <i className="icon fa fa-circle-check" /> E-commerce :{" "}
                        </h5>
                        <p>
                          Gestion des commandes, ventes, inventaires et
                          marketing
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
      <CtaOdoo />

      {/* */}
      {/* <section className="team-details"> */}
      <div className="container pb-0">
        <div className="team-details__top pt-5">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  {" "}
                  <img src="images/resource/Odoo-5.png" alt="" />
                  <div className="info-box mt-3">
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
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="team-details__top-right">
                <div className="team-details__top-content">
                  <h3 className="">
                    Les défis potentiels d’Odoo :{" "}
                  </h3>
                  <p>
                    Bien qu’Odoo soit un excellent ERP, il peut présenter certains défis :
                  </p>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Courbe d’apprentissage :{" "}
                      </h5>
                      <p>
                      Bien que l’interface soit intuitive, la complexité de certains modules avancés peut 
                      nécessiter une formation initiale pour une utilisation optimale.
                      </p>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Personnalisation coûteuse pour les grandes entreprises :{" "}
                      </h5>
                      <p>
                        Pour certaines grandes entreprises avec des besoins très spécifiques, le coût de la personnalisation peut augmenter.
                      </p>
                    </div>
                  </div>
                  <div className="info-box mt-3">
                    <div className="inner">
                      <h5 className="title">
                        <i className="icon fa fa-circle-check" /> Intégration avec des systèmes tiers :{" "}
                      </h5>
                      <p>
                      Selon les systèmes déjà en place dans une entreprise, l’intégration d’Odoo peut nécessiter des développements supplémentaires pour une compatibilité complète.
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
