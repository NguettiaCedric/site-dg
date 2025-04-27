import dynamic from "next/dynamic";
import CtaBusiness from "@/components/sections/Ctabusiness"
// import Link from "next/link";
// import About2 from "@/components/sections/About2";
// import Testimonial1 from "../Testimonial1";
// import Slider1 from "../Slider1";
import SliderB1 from "../SliderB1";

export default function SapDetails() {
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
                    <img src="images/resource/imgb1_.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <h3 className="">Trouvez la solution ERP idéale pour piloter la croissance de votre PME avec SAP Business One</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    SAP Business One est la référence en matière de solution de gestion intégrée spécialement conçue pour les petites 
                    et moyennes entreprises. Reconnue pour sa facilité d'utilisation et sa puissance, elle vous apporte tous les outils 
                    nécessaires pour optimiser et centraliser la gestion de vos processus métier au quotidien.

                    </p>
                    <p className="text-justify" style={{textAlign: 'justify'}}>
                      De la comptabilité à la budgétisation, en passant par les
                      achats et la gestion des stocks, jusqu’aux ventes, la
                      gestion de la relation client et la gestion de projet…
                      tout est réuni en un seul et même endroit ! Avec SAP
                      Business One, vous avez la certitude que vos processus de
                      gestion resteront efficaces, protégés et rentables !
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
                      <h3 className="">Pourquoi Choisir SAP Business One ?</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Choisir SAP Business One, c’est opter pour une solution qui permet de révéler le plein potentiel de votre entreprise.
                        Voici pourquoi SAP Business One est le choix idéal pour votre entreprise :
                      </p>
                      {/* <span className="" style={{color:"black", fontWeight:'bold', fontSize:'29px',}}>Voici quelques caractéristiques clés de SAP S/4HANA Cloud: </span> */}
                    
                      <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Intégration Totale : </h5>
                              <p> 
                                	Gérez toutes vos activités principales - des finances et des ventes à la gestion de la relation client et des opérations - au sein d'un seul système.
                              </p>
                          </div>
                      </div>
                      <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Visibilité en Temps Réel  : </h5>
                              <p> 
                                  Accédez à des informations précises et en temps réel, ce qui vous permet de prendre des décisions éclairées et d'agir rapidement.
                              </p>
                          </div>
                      </div>
                      <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Facilité d'Utilisation : </h5>
                              <p> 
                                  Une interface intuitive et conviviale qui réduit le temps de formation et augmente la productivité des utilisateurs.
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
                      <img src="images/resource/imgb2.jpg" alt="" />
                      <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Scalabilité  : </h5>
                              <p> 
                                  SAP Business One s'adapte à la croissance de votre entreprise, vous permettant d'ajouter des fonctionnalités et des utilisateurs au fur et à mesure de vos besoins.
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
                    <img src="images/resource/imgb3.jpg" alt="" />
                    <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Gestion Financière : </h5>
                              <p> 
                                  Automatisez vos tâches financières et gagnez en précision pour la comptabilité, la banque, et les rapports financiers.
                              </p>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                      <h3 className="">Quelques fonctionnalités clés : </h3>
                      
                      <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Gestion des Ventes et des Clients : </h5>
                              <p> 
                                  Suivez l'ensemble du cycle de vente, de la prospection au service après-vente, pour améliorer la satisfaction client.
                              </p>
                          </div>
                      </div>
                      <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Gestion des Achats et des Stocks : </h5>
                              <p> 
                                  Optimisez votre chaîne d'approvisionnement avec une gestion efficace des achats, des stocks et des fournisseurs.
                              </p>
                          </div>
                      </div>                 
                      <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Reporting et Analyse : </h5>
                              <p> 
                                  Utilisez des outils de reporting puissants pour analyser vos données et obtenir des insights précieux.
                              </p>
                          </div>
                      </div>                 
                      <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Gestion de Projets : </h5>
                              <p> 
                                  Suivez et gérez vos projets de A à Z, en garantissant le respect des budgets et des délais.
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
                      <h3 className="">Découvrez quelques avantages de SAP Business One</h3>
                      <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Amélioration de l'Efficacité : </h5>
                              <p> 
                                 Réduisez les redondances et les erreurs grâce à l'automatisation des processus et à une gestion centralisée des informations.
                              </p>
                          </div>
                      </div>
                      
                    </div>
                    
                    <div className="info-box mt-3">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-check" /> Réduction des Coûts : </h5>
                            <p> 
                              Optimisez vos ressources et minimisez les coûts opérationnels grâce à une meilleure gestion de vos activités.
                            </p>
                        </div>
                    </div>
                    <div className="info-box mt-3">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-check" /> Meilleure Prise de Décision : </h5>
                            <p> 
                              Des données en temps réel et des analyses approfondies permettent une prise de décision rapide et éclairée.
                            </p>
                        </div>
                    </div>
                  
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right">
                    <div className="team-details__top-img">
                      {" "}
                      <img src="images/resource/imgb4.jpg" alt="" />
                      <div className="info-box mt-3">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-check" /> Flexibilité et Mobilité : </h5>
                            <p> 
                              Accédez à vos données depuis n'importe où avec les options de déploiement sur site ou dans le cloud.
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

      {/* <SliderB1 /> */}

      {/* <section className="team-details mb-5">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Pourquoi Choisir SAP Business One ?</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Grâce à des modules dédiés à la comptabilité, aux finances, aux ventes, aux achats, à la logistique et aux projets, 
                        SAP Business One vous permet de suivre en temps réel l'ensemble de vos activités : commandes clients, stocks, facturation, trésorerie, production, planning... 
                        Depuis un seul tableau de bord, gagnez en réactivité pour piloter efficacement la performance de votre entreprise.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right">
                    <div className="team-details__top-img">
                      {" "}
                      <img src="images/resource/sap-business-one.png" alt="" />
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </section> */}


                      
      {/* */}
      
      {/* Pourquoi SAP */}
        {/* <About2 /> */}
      <CtaBusiness />
      
                    
      {/* */}
                       
      {/* */}

      {/* <Testimonial1 /> */}
      {/* <Slider1 /> */}
      <SliderB1 />
     
    </>
  );
}
