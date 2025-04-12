
import Link from "next/link"

export default function EnergiesRenouvelable() {
    return (
        <>

            <section className="services-section-two pt-5">
                <div className="bg bg--12" />
                <div className="auto-container">
                    <div className="sec-title text-center black">
                        {/* <span className="sub-title">Découvrez</span> */}
                        {/* <h2>Expertise - Energie<br/></h2> */}
                    </div>
                    
                    <div className="row">
                        {/* Service Block Two */}

                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/comodite.jpg" alt="Business One" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/page-service-details">Conception & réalisation de bâtiments durables</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry ...</div>
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
