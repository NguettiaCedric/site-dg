
import Link from "next/link"

export default function ErpDetail() {
    return (
        <>

            <section className="services-section-two pt-5">
                <div className="bg bg--12" />
                <div className="auto-container">
                    <div className="sec-title text-center black">
                        {/* <span className="sub-title">Découvrez</span> */}
                        <h2> Intégration d'ERP sur mesure <br/>(finance, logistique, industrie)</h2>
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
                                    <figure className="image"><img src="/images/resource/b1.png" alt="SAP Business One"/></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">Intégration <br />SAP Business One <br /></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-technology" />
                                    <div className="text">SAP Business One est la solution ERP incontournable pour les PME africaines...</div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        {/* Service Block Two */}


                        <div className=" news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/solution-sage-x3">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/sageX3-1.png" alt="Sage X3"/></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">Intégration <br /> SAGE X3</h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-technology" />
                                    <div className="text">Gérez votre entreprise avec des fonctionnalités puissantes qui vous permettent de travailler...</div>
                                </div>
                            </div>
                            </Link>
                        </div>


                    </div>

                    <div className="row">
                        {/* Service Block Two */}

                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/solution-divalto">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/Divalto.png" alt="Divalto" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"> Intégration <br /> Divalto</h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-graphic-design" />
                                    <div className="text">Divalto est une solution ERP et CRM complète qui optimise la gestion d'entreprise...</div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        
                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/solution-alfresco">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/alfresco-3.jpg" alt="ALFRESCO" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title">ALFRESCO / <br /> GED et d'archivage</h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">La plateforme Alfresco propose des service complets de contenu clound-natif...</div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        
                        {/* Service Block Two */}
                       
                         <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/solution-odoo">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/Odoo.png" alt="Odoo" /></figure>
                                    </div>
                                    <div className="title-box">
                                        <h5 className="title">Intégration <br /> Odoo</h5>
                                    </div>
                                    <div className="content-box">
                                        <i className="icon flaticon-graphic-design" />
                                        <div className="text">Solution ERP complète et modulable qui centralise la gestion de votre entreprise...</div>
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
