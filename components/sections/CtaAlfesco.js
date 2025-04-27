
import Link from "next/link"

export default function CtaAlfesco() {
    return (
        <>
            <section className="call-to-action">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/bg4.jpg)' }}></div>
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <h2 className="title"> 
                         Activer intelligemment les processus et le contenu pour accélérer le flux des activités
                            {/* <br /> */}
                            <br />
                            Contactez notre équipe commerciale !
                        </h2>
                        <Link href="/#" className="theme-btn btn-style-one light"><span className="btn-title-text-white">Demander une démo</span></Link>
                    </div>
                </div>
                
            </section>
        </>
    )
}
