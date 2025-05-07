"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
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
};

export default function Slider1() {
  return (
    <>
      <section className="banner-section">
        <Swiper
          {...swiperOptions}
          className="banner-carousel owl-carousel owl-theme default-navs"
        >
          {/* Slide Item */}
          <SwiperSlide className="slide-item">
            <div
              className="bg-image"
              style={{ backgroundImage: "url(images/main-slider/slider-b-2.jpg)" }}
            />
            <div className="auto-container">
              <div
                className="content-box"
                style={{ marginTop: "-5px", paddingLeft: "43px" }}
              >
                <h1 className="title animate-1 text-dark">
                  Optimisez vos processus métiers grâce à des solutions ERP sur 
                  mesure,
                  <br /> pensées pour la performance et l’agilité
                </h1>
                <div
                  className="btn-box animate-2"
                  style={{ paddingLeft: "6px" }}
                >
                  <Link
                    href="/erp"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">En Savoir plus</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <div
              className="bg-image"
              style={{ backgroundImage: "url(images/main-slider/Hévéa.jpg)" }}
            />
            <div className="auto-container">
              <div
                className="content-box"
                style={{ marginTop: "-5px", paddingLeft: "43px" }}
              >
                <h1 className="title animate-1">
                Farmsio, l’agriculture connectée et durable.
                </h1>
                <p className="text-white" style={{fontSize:"20px"}}>Optimisez vos rendements grâce à la technologie, la donnée et l’innovation au service des producteurs.</p>

                <div
                  className="btn-box animate-2"
                  style={{ paddingLeft: "6px" }}
                >
                  <Link
                    href="/"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">En Savoir plus</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide Item */}

          <SwiperSlide className="slide-item">
            <div
              className="bg-image"
              style={{ backgroundImage: "url(images/main-slider/energie-1.jpg)" }}
            />
            <div className="auto-container">
              <div className="content-box"  style={{ marginTop: "-5px", paddingLeft: "43px" }}>
                <h1 className="title animate-1">
                  {" "}
                  L’énergie propre pour un avenir durable
                  <br />
                  
                </h1>
                <p className="text-white" style={{fontSize:"20px"}}>Des solutions solaires, éoliennes et hybrides pour une énergie autonome et responsable</p>
                <div className="btn-box animate-2">
                  <Link
                    href="/page-about"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">En Savoir plus</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-item">
            <div
              className="bg-image"
              style={{
                backgroundImage: "url(images/main-slider/Slider-btp-1.jpeg)",
              }}
            />
            <div className="auto-container">
              <div className="content-box"  style={{ marginTop: "-5px", paddingLeft: "43px" }}>
                <h1 className="title animate-1">
                  {" "}
                 Avec KOOTHE Construire aujourd’hui, bâtir pour demain
                  <br />
                </h1>
                <p className="text-white" style={{fontSize:"20px"}}>Des solutions durables, innovantes et sur mesure pour tous vos projets de construction et d’infrastructure</p>
                <div className="btn-box animate-2">
                  <Link
                    href="/btp-construction-industrielle"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">En Savoir plus</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-item">
            <div
              className="bg-image"
              style={{
                backgroundImage:
                  "url(images/main-slider/slider-import-export-3.jpg)",
              }}
            />
            <div className="auto-container">
              <div className="content-box"  style={{ marginTop: "-5px", paddingLeft: "43px" }}>
                <h1 className="title animate-1">
                  {" "}
                  KOOTHE vous connecte aux   <br /> marchés, 
                  propulse votre croissance.
                </h1>
                <p className="text-white" style={{fontSize:"20px"}}>Nous facilitons l'importation et l'exportation de vos produits en toute sécurité, fiabilité et efficacité, partout dans le monde.</p>
                <div className="btn-box animate-2">
                  <Link
                    href="/import-export"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">En Savoir plus</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-item">
            <div
              className="bg-image"
              style={{
                backgroundImage: "url(images/main-slider/slider-ai.jpg)",
              }}
            />
            <div className="auto-container">
              <div className="content-box "  style={{ marginTop: "-5px", paddingLeft: "43px" }}>
                <h1 className="title animate-1">
                  {" "}
                  L’intelligence artificielle<br/> au service de votre performance
                  
                </h1>
                <p className="text-white" style={{fontSize:"20px"}}>Optimisez vos processus, anticipez vos besoins et transformez vos données en valeur grâce à des solutions AI innovantes.</p>
                <div className="btn-box animate-2">
                  <Link
                    href="/intelligence-artificielle"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">En Savoir plus</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="owl-nav" style={{ zIndex: "999" }}>
            <div
              className="owl-prev h1p"
              style={{ position: "absolute", left: "0px" }}
            >
              <span className="fa fa-long-arrow-alt-left" />
            </div>
            <div className="owl-next h1n">
              <span className="fa fa-long-arrow-alt-right" />
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
}
