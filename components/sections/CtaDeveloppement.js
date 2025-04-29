
import Link from "next/link"

export default function CtaDeveloppement() {
    return (
        <>

            <section className="call-to-action mt-3">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/ctadeveloppement.png)' }} />
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
