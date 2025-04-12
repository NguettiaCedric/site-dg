import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="bg bg-pattern-6" />
                {/* Footer Uppper */}
                <div className="footer-upper">
                    <div className="auto-container">
                        <div className="row">
                            {/* Contact info Block */}
                            <div className="contact-info-block col-lg-4 col-md-6">
                                <div className="inner">
                                    <i className="icon fa fa-phone-square" />
                                    <span className="sub-title">Appelez </span>
                                    <div className="text"><Link href="/tel:+92(8800)48720">+225 07 07 17 04 07</Link></div>
                                </div>
                            </div>
                            {/* Contact info Block */}
                            <div className="contact-info-block col-lg-4 col-md-6">
                                <div className="inner">
                                    <i className="icon fa fa-envelope" />
                                    <span className="sub-title">Email</span>
                                    <div className="text"><Link href="/mailto:contact@koothe.com">infokoothe@gmail.com</Link></div>
                                </div>
                            </div>
                            {/* Contact info Block */}
                            <div className="contact-info-block col-lg-4 col-md-6">
                                <div className="inner">
                                    <i className="icon fa fa-map-marker" />
                                    <span className="sub-title">Adresse</span>
                                    <div className="text">Abidjan Cocody Riviera triangle</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Widgets Section */}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-5 col-lg-4 col-md-12">
                                <div className="footer-widget about-widget">
                                    <div className="widget-content">
                                        {/* <div className="logo"><Link href="/#"> <img src="/images/logo.png" alt="" /></Link></div> */}
                                        {/* <div className="title"><Link href="/"><span className="text-white" style={{ fontWeight: 'bold' , fontSize:'24px' }}>KOOTHE</span></Link></div> */}
                                        <div className="logo"><Link href="/"><img src="/images/logo-.png" alt="" title="Tronis" style={{height:"70px"}} /></Link></div>


                                        <div className="text">KOOTHE est une entreprise multisectorielle innovante,engagée dans la création de solutions durables et performantes.</div>
                                        <ul className="social-icon-two">
                                            <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="/#"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
                                            <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-4 col-lg-4 col-md-6">
                                <div className="widget links-widget">
                                    <h5 className="widget-title">Explore</h5>
                                    <div className="widget-content">
                                        <ul className="user-links two-column">
                                            <li><Link href="/#">Meet Our Team</Link></li>
                                            <li><Link href="/#">About</Link></li>
                                            <li><Link href="/#">What We Do</Link></li>
                                            <li><Link href="/#">Support</Link></li>
                                            <li><Link href="/#">Latest News</Link></li>
                                            <li><Link href="/#">New Projects</Link></li>
                                            <li><Link href="/#">Contact</Link></li>
                                            <li><Link href="/#">Shop</Link></li>
                                            <li><Link href="/#">Faqs</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="widget newsletter-widget">
                                    <h5 className="widget-title">Newsletter</h5>
                                    <div className="widget-content">
                                        <div className="text">Subsrcibe for our latest resources</div>
                                        <div className="subscribe-form">
                                            <form method="post" action="#">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="email" placeholder="Email Address" required />
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" className="theme-btn btn-style-one hover-light"><span className="btn-title">Subscribe</span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Footer Bottom */}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="copyright-text">© Copyright reserved by KOOTHE <Link href="/#"></Link></div>
                    </div>
                </div>
            </footer>

        </>
    )
}
