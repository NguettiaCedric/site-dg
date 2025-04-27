"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
  },
};

export default function SliderB1() {
  return (
    <>
      <section className="testimonial-section">
        <div className="bg bg-pattern-7" />
        <div className="auto-container">
          <div className="row">
            {/* Title Column */}
           
            <h3>
              Options de déploiement de SAP Business One sur site et dans le
              cloud
            </h3>
            <div className="testimonial-column col-lg-12 col-md-12">
              <div className="inner-column">
                <Swiper
                  {...swiperOptions}
                  className="testimonial-carousel owl-carousel default-navs"
                >
                  <SwiperSlide className="testimonial-block">
                    <div className="inner-box">
                      <h3>Sur site</h3>
                      <img src="images/resource/site.jpg" alt="site" />
                      <h4 className="mt-2">Principaux avantages : </h4>

                      <div className="content-box1">
                        <div className="text">
                          <div className="info-box1">
                            <div className="inner">
                              <h5 className="title">
                                <i className="icon fa fa-circle-check" />{" "}
                                Conformité aux politiques internes concernant la
                                sécurité des données
                              </h5>
                            </div>
                          </div>
                          <div className="info-box1">
                            <div className="inner">
                              <h5 className="title">
                                <i className="icon fa fa-circle-check" />{" "}
                                Contrôle et accès directs à vos données, pour
                                plus de flexibilité dans l'accès destiné aux
                                rapports locaux
                              </h5>
                            </div>
                          </div>
                          <div className="info-box1">
                            <div className="inner">
                              <h5 className="title">
                                <i className="icon fa fa-circle-check" />{" "}
                                Facilité accrue pour personnaliser et étendre
                                les processus de votre entreprise
                              </h5>
                            </div>
                          </div>
                          <div className="info-box1">
                            <div className="inner">
                              <h5 className="title">
                                <i className="icon fa fa-circle-check" />{" "}
                                S'appuie sur le matériel interne,
                                l'infrastructure et les ressources informatiques
                                existantes
                              </h5>
                            </div>
                          </div>
                          <div className="info-box1">
                            <div className="inner">
                              <h5 className="title">
                                <i className="icon fa fa-circle-check" />{" "}
                                Licence perpétuelle, les frais à l'acquisition
                                sont plus élevés mais les frais de possession à
                                long terme sont plus intéressants
                              </h5>
                            </div>
                          </div>
                          <div className="info-box1">
                            <div className="inner">
                              <h5 className="title">
                                <i className="icon fa fa-circle-check" /> Moins
                                dépendant d'une connexion Internet permanente
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="testimonial-block">
                    <div className="inner-box">
                      <h3>En mode cloud </h3>
                      <img src="images/resource/cloud.png" alt="cloud" />
                      <h4 className="mt-2">Principaux avantages : </h4>

                      <div className="content-box1">
                        <div className="text">
                          <div className="info-box1">
                            <div className="inner">
                              <h5 className="title">
                                <i className="icon fa fa-circle-check" />{" "}
                                Déploiement facile et abordable
                              </h5>
                            </div>
                          </div>
                          <div className="info-box1">
                            <div className="inner">
                              <h5 className="title">
                                <i className="icon fa fa-circle-check" /> Accès
                                sûr par navigateur, quels que soient l'endroit
                                et le moment
                              </h5>
                            </div>
                          </div>
                          <div className="info-box1">
                            <div className="inner">
                              <h5 className="title">
                                <i className="icon fa fa-circle-check" /> Accès
                                aux fonctionnalités les plus récentes, sans
                                avoir besoin de ressources informatiques sur
                                place pour assurer la maintenance de la solution
                              </h5>
                            </div>
                          </div>
                          <div className="info-box1">
                            <div className="inner">
                              <h5 className="title">
                                <i className="icon fa fa-circle-check" />{" "}
                                Licence par abonnement qui permet d'éviter les
                                dépenses d'investissement et offre de la
                                souplesse au niveau des dépenses opérationnelles
                              </h5>
                            </div>
                          </div>
                          <div className="info-box1">
                            <div className="inner">
                              <h5 className="title">
                                <i className="icon fa fa-circle-check" /> Gère
                                les fonctions les plus critiques de votre
                                entreprise dans votre navigateur web
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* <SwiperSlide className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="content-box1">
                                                <div className="text">
                                                    <div className="info-box1">
                                                        <div className="inner">
                                                            <h5 className="title"><i className="icon fa fa-circle-check" /> Import des données existantes depuis votre ancien système</h5>
                                                        </div>
                                                    </div>
                                                    <div className="info-box1">
                                                        <div className="inner">
                                                            <h5 className="title"><i className="icon fa fa-circle-check" /> Personnalisation de l'interface et des workflows selon vos process</h5>
                                                        </div>
                                                    </div>
                                                    <div className="info-box1">
                                                        <div className="inner">
                                                            <h5 className="title"><i className="icon fa fa-circle-check" /> Formation des super-utilisateurs en interne</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="content-box1">
                                                <div className="text">
                                                    <div className="text">
                                                        <div className="info-box1">
                                                            <div className="inner">
                                                                <h5 className="title"><i className="icon fa fa-circle-check" />	Tests et recettes fonctionnelles</h5>
                                                            </div>
                                                        </div>
                                                        <div className="info-box1">
                                                            <div className="inner">
                                                                <h5 className="title"><i className="icon fa fa-circle-check" /> Accompagnement au démarrage et montée en charge</h5>
                                                            </div>
                                                        </div>
                                                        <div className="info-box1">
                                                            <div className="inner">
                                                                <h5 className="title"><i className="icon fa fa-circle-check" /> Assistance à la bascule de l'ancien vers le nouveau système</h5>
                                                            </div>
                                                        </div>
                                                        <div className="info-box1">
                                                            <div className="inner">
                                                                <h5 className="title"><i className="icon fa fa-circle-check" /> Support et maintenance dans la durée</h5>
                                                            </div>
                                                        </div>
                                                    </div>                                              
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide> */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
