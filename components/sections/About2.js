import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})
import Link from "next/link"
import Contactpage from './inner/Contact'

export default function About2() {
    return (
        <>
             {/*  */}
            <section className="about-section-two">
                <div className="anim-icons">
                    <span className="icon icon-line4" />
                    <span className="icon icon-line5" />
                    <span className="icon icon-arrow1 bounce-x" />
                    <span className="icon icon-speaker zoom-one" />
                </div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            {/* Content Column */}
                            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        {/* <span className="sub-title">Bienvenue à KOOTHE</span> */}
                                        <h2>QUI SOMMES NOUS ?</h2>
                                        <div className="text">
                                        KOOTHE est une entreprise pluridisciplinaire fondée avec une vision claire : fournir des solutions innovantes et durables aux défis du monde moderne. Basée à Abidjan; 
                                            Rabat et Barcelone avec des activités en Afrique, notamment en Côte d'Ivoire, KOOTHE intervient dans les 
                                            domaines stratégiques que sont la<strong> technologie </strong>, <strong> l'énergie </strong>, <strong>le BTP</strong>, <strong>l'import-export </strong> et <strong>le conseil </strong> et <strong> d’autres activités annexes  </strong>
                                            <br />
                                            Nous croyons en une croissance inclusive portée par l'innovation, la performance et l'excellence opérationnelle. KOOTHE conjugue compétences techniques et connaissance fine des enjeux socio-économiques pour accompagner efficacement ses clients dans leur transformation.
 
                                        <br />
                                        Forte de ses experts et de son expérience terrain, KOOTHE s'impose comme un catalyseur de transformation pour les entreprises et institutions souhaitant accélérer leur développement tout en respectant les principes de durabilité, d'éthique et d'efficacité.
                                        </div>

                                    </div>
                                    <Link
                                        href="/page-contact"
                                        className="theme-btn btn-style-one hover-light"
                                    >
                                        <span className="btn-title">Contactez-nous</span>
                                    </Link>

                                </div>
                            </div>
                            {/* Image Column */}
                            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <div className="image-box">
                                        <span className="icon-dots2" />
                                        <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about2-1.jpg" alt="" /></figure>
                                        <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about2-2.jpg" alt="" /></figure>
                                        {/* <div className="exp-box">
                                            <div className="inner">
                                                <i className="icon flaticon-promotion" />
                                                <span className="count">38+</span>
                                                <h6 className="title">Work Experience</h6>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  

                    <div className="sec-title text-center">
                        <h2>NOS VALEURS ET MISSIONS</h2>
                    </div>  
                    <div className="text-center mb-3">
                       KOOTHE est une entreprise pluridisciplinaire fondée avec une vision claire : 
                           
                     </div>
                     <div className="row">
                            <div className="info-box col-lg-6 col-md-6">
                                <div className="inner">
                                    <h5 className="title"><i className="icon fa fa-circle-arrow-right" /> Innover pour un développement durable</h5>
                                    {/* <div className="text">Knowledge of technologies rules better than anyone</div> */}
                                </div>
                            </div>
                            <div className="info-box col-lg-6 col-md-6">
                                <div className="inner">
                                    <h5 className="title"><i className="icon fa fa-circle-arrow-right" />Offrir des solutions personnalisées et efficaces</h5>
                                    {/* <div className="text">Knowledge of technologies rules better than anyone</div> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="info-box col-lg-6 col-md-6">
                                <div className="inner">
                                    <h5 className="title"><i className="icon fa fa-circle-arrow-right" />Excellence, transparence et responsabilité</h5>
                                    {/* <div className="text">Knowledge of technologies rules better than anyone</div> */}
                                </div>
                            </div>
                            <div className="info-box col-lg-6 col-md-6">
                                <div className="inner">
                                    <h5 className="title"><i className="icon fa fa-circle-arrow-right" />Engagement envers la satisfaction client</h5>
                                    {/* <div className="text">Knowledge of technologies rules better than anyone</div> */}
                                </div>
                            </div>
                        </div>
                        
                    <div className="text">
                    Nous croyons en une croissance inclusive portée par l'innovation, la performance et l'excellence opérationnelle. KOOTHE conjugue compétences techniques et connaissance fine des enjeux socio-économiques pour accompagner efficacement ses clients dans leur transformation.
                    {/* <Contactpage /> */}
                    </div>

                </div>
            </section>
             {/*  */}
            
            {/*  */}
            <section>
                <div className="auto-container">
                        <div className="outer-box">
                            <div className="row">
                                {/* Content Column */}
                                <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                                    <div className="inner-column">
                                        <div className="sec-title">
                                            <div className="text">
                                            KOOTHE ne se limite pas à livrer des prestations : nous construisons des alliances durables. Notre objectif est d'être un véritable partenaire de croissance pour les entreprises, institutions et coopératives qui nous font confiance.

                                                <br />
                                                Notre engagement se traduit par une disponibilité constante, une réactivité opérationnelle et une culture du résultat. Nous nous investissons pleinement dans la réussite de chaque mission, avec une approche sur-mesure et une posture proactive.
                                            <br />
                                            Rejoindre KOOTHE, c’est faire le choix de l’excellence, de l’éthique et de l’impact. C’est bâtir ensemble des solutions qui transforment durablement les territoires et les organisations.
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                {/* Image Column */}
                                <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                                    <div className="inner-column wow fadeInLeft">
                                        <div className="image-box">
                                            <span className="icon-dots2" />
                                            <br />
                                            <h2>ENGAGEZ UN PARTENAIRE QUI <br /> VA AU-DELÀ <br /> DE L’ATTENDU</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  

                        <div className="sec-title text-center">
                            <h2>NOS SECTEURS D’ACTIVITÉ</h2>
                        </div>  
                        <div className="text mb-3">

                        Chez KOOTHE, notre force réside dans notre capacité à intervenir dans des domaines clés du développement durable, en apportant des solutions concrètes et sur-mesure :
  
                        </div>
                        <div className="row">
                                <div className="info-box col-lg-6 col-md-6">
                                    <div className="inner">
                                        <h5 className="title"><i className="icon fa fa-circle-arrow-right" />{""} Technologie : </h5>{""}
                                        <div className="text">Intégration ERP (SAP, Odoo), développement d'applications web & mobile, cybersécurité, data analytics et traçabilité intelligente.</div>
                                    </div>
                                </div>
                                <div className="info-box col-lg-6 col-md-6">
                                    <div className="inner">
                                        <h5 className="title"><i className="icon fa fa-circle-arrow-right" />{" "}Import-Export :{" "}</h5>
                                        <div className="text">Gestion de chaînes d’approvisionnement, commerce intercontinental, logistique internationale</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="info-box col-lg-6 col-md-6">
                                    <div className="inner">
                                        <h5 className="title"><i className="icon fa fa-circle-arrow-right" />{" "}Énergie</h5>
                                        <div className="text">Mise en œuvre de projets d’énergie solaire, efficacité énergétique, réduction de l’empreinte carbone et accompagnement RSE.</div>
                                    </div>
                                </div>
                                <div className="info-box col-lg-6 col-md-6">
                                    <div className="inner">
                                        <h5 className="title"><i className="icon fa fa-circle-arrow-right" />{" "}BTP</h5>
                                        <div className="text">Conception, réalisation et rénovation d’infrastructures durables, logements, bâtiments industriels et communautaires ainsi l’amenagement et des travaux publics.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="info-box col-lg-6 col-md-6">
                                    <div className="inner">
                                        <h5 className="title"><i className="icon fa fa-circle-arrow-right" />{" "}Conseil</h5>
                                        <div className="text">Stratégie d’entreprise, transformation digitale, conduite du changement, accompagnement organisationnel.</div>
                                    </div>
                                </div>
                                <div className="info-box col-lg-6 col-md-6">
                                    <div className="inner">
                                        <h5 className="title"><i className="icon fa fa-circle-arrow-right" />{" "}Fourniture de matériels et denrées</h5>
                                        <h5 className="title"><i className="icon fa fa-circle-arrow-right" />{" "}Autres activités annexes</h5>
                                    </div>
                                </div>
                            </div>
                            
                        <div className="text mt-3 mb-5">
                        Chaque secteur est piloté par une équipe d'experts, animée par la quête de performance, de durabilité et d'impact sociétal.
                        </div>

                </div>    
            </section>
           {/*  */}
           
            
        </>
    )
}
