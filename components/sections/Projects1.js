
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
                                    <figure className="image"><img src="/images/resource/projet-1.png" alt="" /></figure>
                                </div>
                                <div className="content-box">
                                    {/* <span className="date">20 April</span> */}
                                    <ul className="post-info">
                                        {/* <li><i className="fa fa-user-circle" /> by Admin</li>
                                        <li><i className="fa fa-comments" /> 2 Comments</li> */}
                                    </ul>
                                    {/* <h4 className="title"><Link href="/news-details">Five ways that can develop your business website</h4> */}
                                    {/* <Link href="/news-details" className="read-more">Lire plus <i className="fa fa-long-arrow-alt-right" /> */}
                                    <h4>Installation panneaux  solaires</h4>
                                </div>
                            </div>
                        </div>
                        {/* News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/projet-2.png" alt="" /></figure>
                                </div>
                                <div className="content-box">
                                    {/* <span className="date">20 April</span> */}
                                    <ul className="post-info">
                                        {/* <li><i className="fa fa-user-circle" /> by Admin</li>
                                        <li><i className="fa fa-comments" /> 2 Comments</li> */}
                                    </ul>
                                    {/* <h4 className="title"><Link href="/news-details">Five ways that can develop your business website</h4> */}
                                    {/* <Link href="/news-details" className="read-more">Lire plus <i className="fa fa-long-arrow-alt-right" /> */}
                                    <h4>Installation onduleur 6000 sma eolienne</h4>

                                </div>
                            </div>
                        </div>
                        {/* News Block */}
                        <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/projet-3.png" alt="" /></figure>
                                </div>
                                <div className="content-box">
                                    {/* <span className="date">20 April</span> */}
                                    <ul className="post-info">
                                        {/* <li><i className="fa fa-user-circle" /> by Admin</li>
                                        <li><i className="fa fa-comments" /> 2 Comments</li> */}
                                    </ul>
                                    {/* <h4 className="title"><Link href="/news-details">Five ways that can develop your business website</h4> */}
                                    {/* <Link href="/news-details" className="read-more">Lire plus <i className="fa fa-long-arrow-alt-right" /> */}
                                    <h4>Installation onduleur solaire hybride</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
