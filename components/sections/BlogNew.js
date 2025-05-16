
import Link from "next/link"

export default function BlogNew() {
    return (
        <>           
            <section className="news-section">
                <div className="auto-container">
                    {/* <div className="sec-title text-center">
                        <span className="sub-title">From the Blog</span>
                        <h2>Checkout latest news <br /> updates &amp; articles</h2>
                    </div> */}
                    <div className="row">
                        {/* News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/news-details"><img src="/images/resource/b-detail-sap.jpg" alt="SAP" /></Link></figure>
                                </div>
                                <div className="content-box">
                                    <span className="date">16 Mai 2025</span>
                                    <ul className="post-info">
                                        <li><i className="fa fa-user-circle" /> by Admin</li>
                                        {/* <li><i className="fa fa-comments" /> 2 Commentaires</li> */}
                                    </ul>
                                    <h4 className="title"><Link href="/news-details">Pourquoi passer à SAP S/4HANA ?</Link></h4>
                                    <Link href="/news-details" className="read-more">Lire plus <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>



                        {/* News Block */}                 
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/news-details-1"><img src="/images/resource/b-detail-ged.jpg" alt="SAP" /></Link></figure>
                                </div>
                                <div className="content-box">
                                    <span className="date">16 Mai 2025</span>
                                    <ul className="post-info">
                                        <li><i className="fa fa-user-circle" /> by Admin</li>
                                        {/* <li><i className="fa fa-comments" /> 2 Commentaires</li> */}
                                    </ul>
                                    <h4 className="title"><Link href="/news-details-1">La GED, un levier de productivité pour votre entreprise</Link></h4>
                                    <Link href="/news-details-1" className="read-more">Lire plus <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>

                        {/* News Block */}                       
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/news-details-2"><img src="/images/resource/b-detail-security.jpg" alt="Cybbersecurity" /></Link></figure>
                                </div>
                                <div className="content-box">
                                    <span className="date">16 Mai 2025</span>
                                    <ul className="post-info">
                                        <li><i className="fa fa-user-circle" /> by Admin</li>
                                        {/* <li><i className="fa fa-comments" /> 2 Commentaires</li> */}
                                    </ul>
                                    <h4 className="title"><Link href="/news-details-2">La cybernétique : au cœur de l’intelligence des systèmes</Link></h4>
                                    <Link href="/news-details-2" className="read-more">Lire plus <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
        </>
    )
}
