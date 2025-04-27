
import Link from "next/link"

export default function ErpDetail() {
    return (
        <>
            <section className="services-section-two pt-5">
                <div className="bg bg--12" />
                <div className="auto-container">
                    <div className="sec-title text-center black">
                        {/* <span className="sub-title">Découvrez</span> */}
                        <h2> Intégration d’ERP sur mesure <br/>(finance, logistique, industrie)</h2>
                    </div>
                    <div className="row">
                        {/* Service Block Two */}
                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/sap-business-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/b1.png" alt="Business One" /></figure>
                                    </div>
                                    <div className="title-box">
                                        <h5 className="title"><Link href="sap-business-on">Intégration SAP Business One</Link></h5>
                                    </div>
                                    <div className="content-box">
                                        <i className="icon flaticon-digital-services" />
                                        <div className="text">SAP Business One est la solution ERP incontournable pour les PME africaines ...</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* Service Block Two */}
                        {/* Service Block Two */}
                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/solution-odoo">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/Odoo.png" alt="Odoo" /></figure>
                                    </div>
                                    <div className="title-box">
                                        <h5 className="title"><Link href="/solution-odoo">Intégration <br/> Odoo</Link></h5>
                                    </div>
                                    <div className="content-box">
                                        <i className="icon flaticon-graphic-design" />
                                        <div className="text">Solution ERP complète et modulable qui centralise la gestion de votre entreprise...</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* Service Block Two */}
                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/Divalto.png" alt="Divalto" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/page-service-details">Intégration<br/>SAGE X3</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-graphic-design" />
                                    <div className="text">Divalto est une solution ERP et CRM complète qui optimise la gestion d’entreprises...</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Service Block Two */}
                        {/* <Link href="/sap-business-one"> */}
                            <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/Divalto.png" alt="Divalto" /></figure>
                                    </div>
                                    <div className="title-box">
                                        <h5 className="title"><Link href="/news-details">Intégration<br/>Divalto</Link></h5>
                                        {/* <h5 className="title"><Link href="/GED-details">ALFRESCO<br/></Link></h5> */}
                                    </div>
                                    <div className="content-box">
                                        <i className="icon flaticon-graphic-design" />
                                        <div className="text">Divalto est une solution ERP et CRM complète qui optimise la gestion d’entreprises...</div>
                                    </div>
                                </div>
                            </div>
                        {/* </Link> */}
                        {/* Service Block Two */}

                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/solution-alfresco">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/Divalto.png" alt="Divalto" /></figure>
                                    </div>
                                    <div className="title-box">
                                        <h5 className="title"><Link href="/solution-alfresco">ALFRESCOl / GED  GED et d'archivage<br/></Link></h5>
                                        {/* <h5 className="title"><Link href="/GED-details">ALFRESCO<br/></Link></h5> */}
                                    </div>
                                    <div className="content-box">
                                        <i className="icon flaticon-graphic-design" />
                                        <div className="text">La plateforme Alfresco propose des services complets de contenu cloud-natif...</div>
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
