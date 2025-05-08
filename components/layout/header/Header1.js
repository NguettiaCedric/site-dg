import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, }) {
    return (
        <>
            <header className={`main-header header-style-one ${isSearch ? "moblie-search-active" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="inner-container">
                        <div className="top-left">
                            {/* Info List */}
                            <ul className="list-style-one">
                                <li><i className="fa fa-envelope" style={{color:"#1C4E97"}}/> <Link href="/mailto:info@koothe.com" className="text-white">info@koothe.com</Link></li>
                                <li><i className="fa fa-map-marker"  style={{color:"#1C4E97"}}/> <span className="text-white">Localisation Riviera 3 triangle</span></li>
                                <li><i className="fa-solid fa-phone"  style={{color:"#1C4E97"}}/> <span className="text-white">+225 07 06 06 54 06</span></li>
                            </ul>
                        </div>
                        <div className="top-right">
                            {/* <ul className="useful-links">
                                <li><Link href="/#">Help</Link></li>
                                <li><Link href="/#">Support</Link></li>
                                <li><Link href="/#">Contact</Link></li>
                            </ul> */}
                            <ul className="social-icon-one">
                                <li><Link href="/#"><span className="fab fa-twitter"  style={{color:"#1C4E97"}} /></Link></li>
                                <li><Link href="/#"><span className="fab fa-facebook-square"  style={{color:"#1C4E97"}} /></Link></li>
                                {/* <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li> */}
                                {/* <li><Link href="/#"><span className="fab fa-instagram" /></Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Header Top */}
                <div className="header-lower" style={{background:" rgba(13, 13, 30, 0.9)" }}>
                    {/* Main box */}
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo"><Link href="/"><img src="/images/logo-.png" alt="" title="Tronis" style={{height:"70px"}} /></Link></div>
                            {/* <div className="title"><Link href="/"><span className="text-white" style={{ fontWeight: 'bold' , fontSize:'24px' }}>KOOTHE</span></Link></div> */}

                        </div>
                        {/*Nav Box*/}
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <Menu />
                            </nav>
                            {/* Main Menu End*/}
                        </div>
                        <div className="outer-box">
                            {/* Header Search */}
                            {/* <button className="ui-btn ui-btn search-btn" onClick={handleSearch}>
                                <span className="icon lnr lnr-icon-search" />
                            </button> */}
                            <Link href="/tel:+2250706065406 " className="info-btn">
                                <i className="icon lnr-icon-phone-handset" />
                                <small>Appelez</small>
                                +225 07 06 06 54 06  
                            </Link>
                            {/* Mobile Nav toggler */}
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />

                    <nav className="menu-box">
                        <div className="upper-box">
                            {/* <div className="nav-logo"><Link href="/"><img src="/images/logo.png" alt=""  /></Link></div> */}
                            {/* <div className="title"><Link href="/"><span className="text-white" style={{ fontWeight: 'bold' , fontSize:'24px' }}>KOOTHE</span></Link></div> */}
                            <div className="logo"><Link href="/"><img src="/images/logo-.png" alt="" title="Tronis" style={{height:"70px"}} /></Link></div>


                            <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="/tel:+2250706065406">+225 07 06 06 54 06</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="/mailto:help@company.com">help@company.com</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>{/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" onClick={handleSearch} />
                    <button className="close-search" onClick={handleSearch}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                {/* <Link href="/" ><img src="/images/logo-2.png" alt=""  /></Link> */}
                                {/* <Link href="/" ><span className="text-black" style={{ fontWeight: 'bold' , fontSize:'24px' }}>KOOTHE</span></Link> */}
                               <div className="logo"><Link href="/"><img src="/images/logo-.png" alt="" title="Tronis" style={{height:"95px"}} /></Link></div>

                            {/* <div className="title"><Link href="/"><span className="text-white" style={{ fontWeight: 'bold' , fontSize:'24px' }}>KOOTHE</span></Link></div> */}

                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <Menu />
                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </header>

        </>
    )
}
