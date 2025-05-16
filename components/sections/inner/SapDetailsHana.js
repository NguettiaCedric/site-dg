import dynamic from "next/dynamic";
import CtaBusiness from "@/components/sections/Ctabusiness"


import SliderB1 from "../SliderB1";

export default function SapDetailsHana() {
  return (
    <>
       <section className="team-details">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/saps4hana.jpg" alt="saps4hana" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <h3 className="">Trouvez la solution ERP idéale pour piloter la croissance de votre Entreprise</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    SAP S/4HANA est la solution de gestion intégrée de référence pour les grandes entreprises. Conçue pour offrir une puissance et une flexibilité inégalées, 
                    SAP S/4HANA vous permet d'optimiser et de centraliser la gestion de vos processus métier complexes. Grâce à ses fonctionnalités avancées et à sa capacité à s'intégrer parfaitement à vos systèmes existants,
                    SAP S/4HANA vous aide à relever les défis les plus exigeants de votre entreprise tout en améliorant votre efficacité opérationnelle et votre prise de décision stratégique.
                    </p>
                    <p className="text-justify" style={{textAlign: 'justify'}}>
                    De la comptabilité à la budgétisation, en passant par les achats et la gestion des stocks, jusqu'aux ventes, 
                    la gestion de la relation client et la gestion de projet, SAP S/4HANA offre une plateforme centralisée 
                    pour tous vos besoins opérationnels. Avec SAP S/4HANA, vous pouvez être assuré(e) que vos processus de gestion
                     demeureront efficaces, sécurisés et rentables. Cette solution intégrée vous permet de rationaliser vos opérations, d'optimiser vos ressources 
                    et de garantir la conformité tout en maintenant un niveau élevé de performance et de protection des données.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="team-details mb-0">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">

             <div className="col-xl-6 col-lg-6 col-md-6">

                <div className="team-details__top-left">

                  <div className="team-details__top-content">
                      <h3 className="mb-4">Qu'est-ce qu'un ERP ?</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Un ERP, ou Enterprise Resource Planning (Planification des ressources de l'entreprise en français), est un système intégré de gestion des processus métier d'une entreprise. 
                        Il s'agit d'un logiciel centralisé qui permet à une organisation de collecter,
                        stocker, gérer et interpréter des données provenant de différentes activités commerciales. <br></br>

                        L'ERP est conçu pour rationaliser et automatiser les processus métier dans des domaines tels que la finance, la comptabilité, 
                        la gestion des ressources humaines, la gestion de la chaîne d'approvisionnement, la gestion des ventes et du marketing, la gestion de la production, etc. En consolidant toutes ces fonctions au sein d'un seul système, un ERP permet une meilleure coordination entre les différents départements et fonctions d'une entreprise.
                      </p>
                      
                    </div>

                </div>

              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right">

                  <div className="team-details__top-img mt-5">
                    {" "}
                    <img src="images/resource/erp.jpg" alt="" />
                  </div>

                  </div>
              </div> 

            </div>
          </div>
        </div>
      </section>


      <section className="team-details">
        <div className="container pb-0">
          <div className="">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Qu'est-ce que SAP S/4HANA ?</h3>
                        <p className="" style={{textAlign: 'justify'}}>
                          SAP S/4HANA est une suite logicielle ERP (Enterprise Resource Planning) développée par SAP, l'un des principaux fournisseurs mondiaux de solutions logicielles d'entreprise. 
                          Cette plateforme représente une évolution majeure dans le domaine des systèmes d'entreprise, en intégrant des fonctionnalités avancées et en exploitant les dernières avancées technologiques.
                        </p>  

                        <span className="" style={{color:"black", fontWeight:'bold', fontSize:'29px',}}>Découvrez quelques caractéristiques clés de SAP S/4HANA :</span>
                    
                      <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Base de données en mémoire (in-memory) :</h5>
                              <p> 
                                Contrairement aux systèmes ERP traditionnels, SAP S/4HANA repose sur une architecture en mémoire, 
                                ce qui lui permet de traiter et d'analyser de grandes quantités de données en temps réel. Cela accélère 
                                considérablement les performances des applications et des processus métier.
                              </p>
                          </div>
                      </div>
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Interface utilisateur intuitive : </h5>
                              <p> 
                                SAP S/4HANA propose une interface utilisateur moderne et conviviale, conçue pour simplifier l'expérience utilisateur et améliorer la productivité. 
                                Les utilisateurs peuvent accéder aux informations pertinentes plus rapidement et prendre des décisions éclairées grâce à des tableaux de bord interactifs et des analyses en temps réel.
                              </p>
                          </div>
                      </div>                      

                      {/* <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Flexibilité et agilité : </h5>
                              <p>
                                SAP S/4HANA offre une architecture flexible et évolutive, ce qui permet aux entreprises de s'adapter rapidement aux changements du marché et de répondre aux besoins métier en constante évolution. 
                                Les entreprises peuvent personnaliser la plateforme selon leurs besoins spécifiques et intégrer facilement de nouvelles fonctionnalités et applications.
                              </p>
                          </div>
                      </div> 
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" />   Intégration complète : </h5>
                              <p>
                                SAP S/4HANA est conçu pour s'intégrer de manière transparente avec d'autres solutions logicielles SAP ainsi qu'avec des applications tierces, offrant ainsi une vue unifiée et cohérente de l'ensemble de l'entreprise. Cela permet aux entreprises de rationaliser leurs processus métier et d'améliorer la collaboration entre les différentes fonctions et départements.
                              </p>
                          </div>
                      </div>                 */}
                                       
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right">
                    <div className="team-details__top-img">
                      {" "}
                      <img src="images/resource/saps4.png" alt="" />
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Flexibilité et agilité : </h5>
                              <p>
                                SAP S/4HANA offre une architecture flexible et évolutive, ce qui permet aux entreprises de s'adapter rapidement aux changements du marché et de répondre aux besoins métier en constante évolution. 
                                Les entreprises peuvent personnaliser la plateforme selon leurs besoins spécifiques et intégrer facilement de nouvelles fonctionnalités et applications.
                              </p>
                          </div>
                      </div> 
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" />   Intégration complète : </h5>
                              <p>
                                SAP S/4HANA est conçu pour s'intégrer de manière transparente avec d'autres solutions logicielles SAP ainsi qu'avec des applications tierces, offrant ainsi une vue unifiée et cohérente de l'ensemble de l'entreprise. Cela permet aux entreprises de rationaliser leurs processus métier et d'améliorer la collaboration entre les différentes fonctions et départements.
                              </p>
                          </div>
                      </div> 
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Intelligence intégrée :</h5>
                              <p>
                              La plateforme intègre des fonctionnalités d'intelligence artificielle et d'apprentissage automatique pour automatiser les tâches répétitives, prédire les tendances futures et fournir des insights exploitables. 
                              Cela permet aux entreprises de prendre des décisions plus éclairées et de rester compétitives sur le marché.
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
           
      <div className="container pb-0 mt-5">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/sap-avantage_.png" alt="saps4hana" />
                  </div>
                  <div className="info-box">
                      <div className="inner">
                          <h5 className="title"><i className="icon fa fa-circle-check" /> Innovation technologique : </h5>
                          <p> 
                          SAP S/4HANA intègre les dernières avancées technologiques telles que l'intelligence artificielle, l'apprentissage automatique, 
                          l'Internet des objets (IoT) et l'analyse avancée. Cela permet aux entreprises d'innover et de tirer 
                          parti de nouvelles opportunités commerciales, tout en restant compétitives sur le marché.
                          </p>
                      </div>
                  </div>

                  <div className="info-box">
                      <div className="inner">
                          <h5 className="title"><i className="icon fa fa-circle-check" /> Flexibilité et évolutivité : </h5>
                          <p> 
                          SAP S/4HANA est conçu pour être flexible et évolutif, ce qui permet aux entreprises de s'adapter rapidement aux changements du marché et de 
                          faire évoluer leur système en fonction de leurs besoins. La plateforme prend en charge différents modèles d'implémentation, tels que le cloud, l'on-premise et les déploiements hybrides,
                           offrant ainsi une grande souplesse pour répondre aux exigences spécifiques de chaque entreprise.
                          </p>
                      </div>
                  </div>

                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <h3 className="mb-4">Quels sont les avantages de SAP S/4HANA ?</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                      SAP S/4HANA offre une gamme d'avantages significatifs pour les entreprises qui choisissent cette plateforme ERP de nouvelle génération. Voici quelques-uns des principaux avantages :
                    </p>

                    <div className="info-box">
                      <div className="inner">
                          <h5 className="title"><i className="icon fa fa-circle-check" /> Performance accrue : </h5>
                          <p> 
                            SAP S/4HANA repose sur une architecture en mémoire qui permet un traitement des données en temps réel. 
                            Cela se traduit par des performances améliorées, des temps de réponse plus rapides et une capacité à analyser de grandes quantités de données en un temps record.
                            Les entreprises peuvent ainsi prendre des décisions plus rapides et plus éclairées.
                          </p>
                      </div>
                    </div>
                    

                    <div className="info-box">
                      <div className="inner">
                          <h5 className="title"><i className="icon fa fa-circle-check" /> Simplicité d'utilisation : </h5>
                          <p> 
                          L'interface utilisateur de SAP S/4HANA est conçue pour être intuitive et conviviale. Les processus métier sont simplifiés, ce qui réduit le besoin de formation pour les utilisateurs et améliore leur productivité. 
                          De plus, les fonctionnalités d'automatisation intégrées contribuent à rationaliser les opérations et à éliminer les tâches manuelles répétitives.

                          </p>
                      </div>
                    </div>
                    

                    <div className="info-box">
                      <div className="inner">
                          <h5 className="title"><i className="icon fa fa-circle-check" /> Intégration transparente : </h5>
                          <p> 
                          SAP S/4HANA offre une intégration transparente avec d'autres solutions SAP ainsi qu'avec des applications tierces. 
                          Cela permet aux entreprises de rationaliser leurs processus métier, d'éliminer les silos de 
                          données et d'améliorer la collaboration entre les différentes fonctions et départements.
                          </p>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>


      <section className="team-details">
        <div className="container pb-0">
          <div className="">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Découvrez SAP S/4HANA CLOUD</h3>
                        <p className="" style={{textAlign: 'justify'}}>                      
                          SAP S/4HANA Cloud est une version cloud de la suite logicielle ERP SAP S/4HANA. Cette solution offre les mêmes fonctionnalités avancées que la version sur site 
                          (on-premise) de SAP S/4HANA, mais elle est hébergée sur le cloud, ce qui signifie qu'elle est gérée et maintenue par SAP dans des centres de données distants.



                        </p>  

                      <span className="" style={{color:"black", fontWeight:'bold', fontSize:'29px',}}>Voici quelques caractéristiques clés de SAP S/4HANA Cloud: </span>
                    
                      <div className="info-box mt-3">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Architecture Cloud-native :</h5>
                              <p> 
                              SAP S/4HANA Cloud est conçu pour fonctionner dans un environnement cloud, ce qui lui permet d'exploiter 
                              les avantages de l'évolutivité, de la flexibilité et de la disponibilité que le cloud offre.
                              </p>
                          </div>
                      </div>
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Mises à jour continues : </h5>
                              <p> 
                              Avec SAP S/4HANA Cloud, les mises à jour logicielles sont appliquées de manière régulière et transparente par SAP, 
                              ce qui garantit que les clients bénéficient toujours des dernières fonctionnalités et des correctifs de sécurité.
                              </p>
                          </div>
                      </div>  

                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Modèle de paiement basé sur l'abonnement: </h5>
                              <p> 
                              SAP S/4HANA Cloud est généralement proposé selon un modèle de paiement basé sur l'abonnement, où les clients paient des frais mensuels ou annuels pour l'utilisation du logiciel. 
                              Cela permet aux entreprises de réduire les coûts d'infrastructure et de maintenance associés à la gestion d'un système ERP sur site.
                              </p>
                          </div>
                      </div>                    

                      {/* <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Flexibilité et agilité : </h5>
                              <p>
                                SAP S/4HANA offre une architecture flexible et évolutive, ce qui permet aux entreprises de s'adapter rapidement aux changements du marché et de répondre aux besoins métier en constante évolution. 
                                Les entreprises peuvent personnaliser la plateforme selon leurs besoins spécifiques et intégrer facilement de nouvelles fonctionnalités et applications.
                              </p>
                          </div>
                      </div> 
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" />   Intégration complète : </h5>
                              <p>
                                SAP S/4HANA est conçu pour s'intégrer de manière transparente avec d'autres solutions logicielles SAP ainsi qu'avec des applications tierces, offrant ainsi une vue unifiée et cohérente de l'ensemble de l'entreprise. Cela permet aux entreprises de rationaliser leurs processus métier et d'améliorer la collaboration entre les différentes fonctions et départements.
                              </p>
                          </div>
                      </div>                 */}
                                       
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right">
                    <div className="team-details__top-img">
                      {" "}
                      <img src="images/resource/sap-cloud.jpg" alt="" />
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Simplicité d'utilisation : </h5>
                              <p>
                                SAP S/4HANA Cloud offre une interface utilisateur intuitive et conviviale, ce qui facilite la prise en main et l'utilisation du logiciel pour les utilisateurs finaux. 
                                Les processus métier sont simplifiés et optimisés pour une productivité accrue.
                              </p>
                          </div>
                      </div> 
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Intégration avec d'autres solutions cloud  : </h5>
                              <p>
                              SAP S/4HANA Cloud peut être intégré de manière transparente avec d'autres solutions cloud de SAP, telles que SAP SuccessFactors 
                              (gestion des ressources humaines) et SAP Customer Experience (gestion de la relation client),
                               offrant ainsi une suite complète de solutions pour les entreprises.
                              </p>
                          </div>
                      </div> 
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Intelligence intégrée :</h5>
                              <p>
                              La plateforme intègre des fonctionnalités d'intelligence artificielle et d'apprentissage automatique pour automatiser les tâches répétitives, prédire les tendances futures et fournir des insights exploitables. 
                              Cela permet aux entreprises de prendre des décisions plus éclairées et de rester compétitives sur le marché.
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


      {/* <Ctabusiness /> */}
        
                      
     
     
    </>
  );
}
