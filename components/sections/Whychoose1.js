
import Link from "next/link"
export default function Whychoose1() {
    return (
        <>

            <section className="why-choose-us">
                <div className="anim-icons">
                    <span className="icon icon-arrow1" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    {/* <i className="sub-title">company benefits</i> */}
                                    <h2>A propos</h2>
                                    <h4 className="other-title">KOOTHE est une entreprise multisectorielle innovante,</h4>
                                    <div className="text">engagée dans la création de solutions durables et performantes pour répondre aux enjeux économiques contemporains. Grâce à son expertise diversifiée, KOOTHE intervient dans plusieurs domaines stratégiques:</div>
                                    <span className="icon icon-arrow3" />
                                </div>

                                {/* <div className="info-outer">
                                    <div className="row">
                                        <div className="info-box col-lg-4 col-md-4">
                                            <div className="inner">
                                                <i className="icon flaticon-success" />
                                                <h5 className="title">Leader in digital marketing</h5>
                                            </div>
                                        </div>
                                        <div className="info-box col-lg-4 col-md-4">
                                            <div className="inner">
                                                <i className="icon flaticon-job-promotion" />
                                                <h5 className="title">Highest success rates</h5>
                                            </div>
                                        </div>
                                        <div className="info-box col-lg-4 col-md-4">
                                            <div className="inner">
                                                <i className="icon flaticon-marketing" />
                                                <h5 className="title">Quality marketing solutions</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                {/* Icon */}
                                <div className="row">
                                    <div className="info-box col-lg-6 col-md-6">
                                        <div className="inner">
                                            <div className="title-box">
                                                <i className="icon flaticon-laptop" />
                                                <h5 className="title">Technologie <br /></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-box col-lg-6 col-md-6">
                                        <div className="inner">
                                            <div className="title-box">
                                                <i className="icon flaticon-graphic-design" />
                                                <h5 className="title">Énergie</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-box col-lg-6 col-md-6">
                                        <div className="inner">
                                            <div className="title-box">
                                                <i className="icon flaticon-health-check" />
                                                <h5 className="title">Import-export</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-box col-lg-6 col-md-6">
                                        <div className="inner">
                                            <div className="title-box">
                                                <i className="icon flaticon-teaching" />
                                                <h5 className="title">BTP</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info-box col-lg-8 col-md-8">
                                        <div className="inner">
                                            <div className="title-box">
                                                <i className="icon flaticon-teaching" />
                                                <h5 className="title">Conseil stratégique et opérationnel</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Icon  */}
                                
                            </div>
                            <div className="btn-box animate-2" style={{marginTop:'11px', marginBottom:'-24px'}}>
                                <Link href="/a-propos" className="theme-btn btn-style-one hover-light"><span className="btn-title">En savoir plus</span></Link>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image anim-overlay"><img src="/images/resource/why-us.jpg" alt="" /></figure>
                                    <div className="rounded-text" >
                                        <img src="/images/resource/round-text.png"  alt="" />
                                        <span className="letter">D</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
