
import Link from "next/link"

export default function CtaEnergie() {
    return (
        <>
            <section className="call-to-action">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/bg4.jpg)' }}></div>
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <h2 className="title"> 
                        Nous croyons en une croissance inclusive portée par l'innovation, 
                            {/* <br /> */}
                            <br />
                            la performance et l'excellence opérationnelle
                        </h2>
                        <Link href="/page-contact" className="theme-btn btn-style-one light"><span className="btn-title-text-white">Contactez-nous</span></Link>
                    </div>
                </div>
                
            </section>
        </>
    )
}
