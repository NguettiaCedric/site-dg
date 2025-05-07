
import Link from "next/link"

export default function Cta() {
    return (
        <>

            <section className="call-to-action">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/1.jpg)' }} />
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        {/* <figure className="small-image"><img src="/images/resource/img.jpg" alt="" /></figure> */}
                        <h2 className="title"> Nous croyons en une croissance <span className="selected"></span> <br /> inclusive portée par l'innovation  <br />,
                        la performance et l'excellence opérationnelle</h2>
                        <Link href="/page-contact" className="theme-btn btn-style-one light"><span className="btn-title">Contactez-nous</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
