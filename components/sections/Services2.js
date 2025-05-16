
import Link from "next/link"

export default function Services2() {
    return (
        <>

            <section className="services-section-two pt-5">
                <div className="bg bg-pattern-12" />
                <div className="auto-container">
                    <div className="sec-title text-center light">
                        <span className="sub-title">Découvrez</span>
                        <h2> Les services que <br/>nous proposons</h2>
                    </div>
                    <div className="row">

                          {/* Service Block Two */}
                        
                          <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                           <Link href="/sap-business-s4hana">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/solution-hana-2.png" alt="S/4 HANA" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">Intégration <br/> SAP S/4 HANA</h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-graphic-design" />
                                    <div className="text">SAP S/4HANA est la solution de gestion intégrée de référence pour les grandes entreprises...</div>
                                </div>
                            </div>
                            </Link>
                        </div>

                        
                        {/* Service Block Two */}
                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                           <Link href="/sap-business-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/b1.png" alt="Business One" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">Intégration<br />SAP Business One</h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">SAP Business One est la solution ERP incontournable pour les PME africaines ...</div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        {/* Service Block Two */}
                        <div className=" news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                        <Link href="/solution-tracabilite-agricole">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/formsio201_.png" alt="farmsio" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">Intégration Farmsio <br /></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-technology" />
                                    <div className="text">La solution de traçabilité agricole...</div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>


                    <div className="row">
                        {/* Service Block Two */}
                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                          <Link href="/developpement-web-mobile">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/dev-solution.png" alt="" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">Développement Web <br /></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Découvrez notre service de développement web sur mesure, conçu pour transformer vos idées ...</div>
                                </div>
                            </div>
                            </Link>
                        </div>


                         {/* Service Block Two */}
                         <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/dataAnalyse.png" alt="data Analyse"/></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/">Data Analytics<br /></Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-technology" />
                                    <div className="text">Notre unité data vous accompagne dans l'utilisation stratégique de vos historiques et la prise de décision éclairée.</div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block Two */}
                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                          <Link href="/cybersecurite">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/cyberSecurity.png" alt="Cyber sécurité" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">Cybersécurité<br /></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Notre équipe de spécialistes en sécurité du numérique vous accompagne dans la protection optimale de vos actifs immatériels</div>
                                </div>
                            </div>
                            </Link>
                        </div>                       
                    </div>

                    <div className="row">
                        {/* Service Block Two */}

                       
                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/solution-alfresco">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/alfresco-3.jpg" alt="Divalto" /></figure>
                                    </div>
                                    <div className="title-box">
                                        <h5 className="title"><Link href="/solution-alfresco">ALFRESCO / GED  GED et d'archivage<br/></Link></h5>
                                        {/* <h5 className="title"><Link href="/GED-details">ALFRESCO<br/></Link></h5> */}
                                    </div>
                                    <div className="content-box">
                                        <i className="icon flaticon-graphic-design" />
                                        <div className="text">La plateforme Alfresco propose des services complets de contenu cloud-natif...</div>
                                    </div>
                                </div>
                            </Link>
                        </div>



                        
                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/audit.png" alt="Audit" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/">Audit de Système d'information<br /></Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Notre équipe de consultants vous accompagne dans l'évaluation approfondie de vos process métiers et systèmes d'information</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Service Block Two */}

                         <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/materiel.jpg" alt="materiel"  /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/">Fourniture de tous types de matériels</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-graphic-design" />
                                    <div className="text">KOOTHE propose une large gamme de matériels adaptés à tous vos besoins, avec un service rapide et personnalisé...</div>
                                </div>
                            </div>
                        </div>


                    </div>


                  

                    <div className="row">
                        {/* Service Block Two */}
                        <div className=" news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                           <Link href="/btp-construction-industrielle">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/construction.jpg" alt="construction"/></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">Construction</h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-technology" />
                                    <div className="text">KOOTHE conçoit et réalise des projets de construction adaptés à vos besoins, alliant qualité, sécurité et innovation...</div>
                                </div>
                            </div>

                            </Link>
                        </div>

                        {/* Service Block Two */}

                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/Distribution.jpg" alt="Distribution" /></figure>
                                </div>
                                <div className="title-box">
                                {/* page-service-details */}
                                    <h5 className="title"><Link href="/">Distribution</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Nous assurons une distribution fluide et optimisée de vos produits, avec un suivi rigoureux à chaque étape..</div>
                                </div>
                            </div>
                        </div>

                        {/* Service Block Two */}
                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                           <Link href="/energie">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/energie-solaire.png" alt="energie solaire"  /></figure>
                                    </div>
                                    <div className="title-box">
                                        <h5 className="title">ENERGIE SOLAIRE</h5>
                                    </div>
                                    <div className="content-box">
                                        <i className="icon flaticon-graphic-design" />
                                        <div className="text">Etude, fourniture et installation de sites solaires (centrales solaires photovoltaïques(jusqu’à plusieurs Mégawatts), </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        
                    </div>


                   
                </div>
            </section>
        </>
    )
}
