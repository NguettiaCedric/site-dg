
import Link from "next/link"

export default function ConseilComposant() {
    return (
        <>

            <section className="services-section-two pt-5">
                <div className="bg bg--12" />
                <div className="auto-container">
                    <div className="sec-title text-center black">
                        {/* <span className="sub-title">Découvrez</span> */}
                        <h2>Expertise - Conseil<br/></h2>
                    </div>
                    
                    <div className="row">
                        {/* Service Block Two */}

                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/consulting-metier.png" alt="Business One" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/page-service-details">Accompagnement en transformation digitale</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/consulting-metier.png" alt="Business One" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/page-service-details">Stratégie d’entreprise et conduite du changement</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/consulting-metier.png" alt="Business One" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/page-service-details">Optimisation des process métiers (Lean, Six Sigma)</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block Two */}
                        
                    </div>

                    <div className="row">
                        {/* Service Block Two */}

                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/consulting-metier.png" alt="Business One" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/page-service-details">Études de marché & business plan</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                                </div>
                            </div>
                        </div>

                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/consulting-metier.png" alt="Business One" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/page-service-details">Formations pour équipes dirigeantes</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</div>
                                </div>
                            </div>
                        </div>

                        
                        {/* Service Block Two */}
                        
                    </div>
                    

                </div>
            </section>

            
        </>
    )
}
