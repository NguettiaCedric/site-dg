
import Link from "next/link"

export default function CtaCyberSecurity() {
    return (
        <>

            <section className="call-to-action">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/ctacybersecurity.png)' }} />
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <h2 className="title"> Croissance Numerique <br />
                            Le défi de la transformation digitale</h2>
                        <Link href="/page-contact" className="theme-btn btn-style-one light"><span className="btn-title">Contactez-nous</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
