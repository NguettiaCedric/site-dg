
import Link from "next/link"

export default function Projects1() {
    return (
        <>

            <section className="news-section pt-4 pb-2">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        {/* <span className="sub-title">From the Blog</span> */}
                        <h2>Découvrez nos nouveaux. <br />Projets récemment réalisés</h2>
                    </div>
                    <div className="row">
                        {/* News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/news-details"><img src="/images/resource/news-1.jpg" alt="" /></Link></figure>
                                </div>
                                <div className="content-box">
                                    {/* <span className="date">20 April</span> */}
                                    <ul className="post-info">
                                        {/* <li><i className="fa fa-user-circle" /> by Admin</li>
                                        <li><i className="fa fa-comments" /> 2 Comments</li> */}
                                    </ul>
                                    <h4 className="title"><Link href="/news-details">Five ways that can develop your business website</Link></h4>
                                    <Link href="/news-details" className="read-more">Lire plus <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/news-details"><img src="/images/resource/news-2.jpg" alt="" /></Link></figure>
                                </div>
                                <div className="content-box">
                                    {/* <span className="date">20 April</span> */}
                                    <ul className="post-info">
                                        {/* <li><i className="fa fa-user-circle" /> by Admin</li>
                                        <li><i className="fa fa-comments" /> 2 Comments</li> */}
                                    </ul>
                                    <h4 className="title"><Link href="/news-details">Five ways that can develop your business website</Link></h4>
                                    <Link href="/news-details" className="read-more">Lire plus <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><Link href="/news-details"><img src="/images/resource/news-3.jpg" alt="" /></Link></figure>
                                </div>
                                <div className="content-box">
                                    {/* <span className="date">20 April</span> */}
                                    <ul className="post-info">
                                        {/* <li><i className="fa fa-user-circle" /> by Admin</li>
                                        <li><i className="fa fa-comments" /> 2 Comments</li> */}
                                    </ul>
                                    <h4 className="title"><Link href="/news-details">Five ways that can develop your business website</Link></h4>
                                    <Link href="/news-details" className="read-more">Lire plus <i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
