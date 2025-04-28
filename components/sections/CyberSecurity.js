
import Link from "next/link"

export default function CyberSecurity() {
    return (
        <>

            <section className="services-section-two pt-5">
                <div className="bg bg--12" />
                <div className="auto-container">
                    <div className="sec-title text-center black">
                        {/* <span className="sub-title">Découvrez</span> */}
                        <h2>  Solutions de cybersécurité : <br/> audits, pare-feux, conformité RGPD
                        </h2>
                    </div>
                    <div className="row">
                        {/* Service Block Two */}
                        <div className="news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/solution-cybersecurite">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/cyberSecurity.png" alt="Cyber sécurité" /></figure>
                                    </div>
                                    <div className="title-box">
                                        <h5 className="title"><Link href="/solution-cybersecurite">Cybersécurité<br /></Link></h5>
                                    </div>
                                    <div className="content-box">
                                        <i className="icon flaticon-digital-services" />
                                        <div className="text">Notre équipe de spécialistes en sécurité du numérique vous accompagne dans la protection optimale de vos actifs immatériels</div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Service Block Two */}
                        
                    </div>
                </div>
            </section>

            
        </>
    )
}
