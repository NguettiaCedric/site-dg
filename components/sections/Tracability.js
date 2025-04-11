
import Link from "next/link"

export default function Tracability() {
    return (
        <>

            <section className="services-section-two pt-5">
                <div className="bg bg--12" />
                <div className="auto-container">
                    <div className="sec-title text-center black">
                        {/* <span className="sub-title">Découvrez</span> */}
                        <h2>  Traçabilité agricole via IoT et blockchain</h2>
                    </div>
                    <div className="row">
                        {/* Service Block Two */}
                        <div className=" news-block service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/formsio201_.png" alt="farmsio" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/page-service-details">Intégration Farmsio <br /></Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-technology" />
                                    <div className="text">La solution de traçabilité agricole...</div>
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
