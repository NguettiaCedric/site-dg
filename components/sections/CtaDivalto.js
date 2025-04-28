
import Link from "next/link"

export default function CtaDivalto() {
    return (
        <>
            <section className="call-to-action">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/bg4.jpg)' }}></div>
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <h2 className="title"> 
                            {/* SAP Business One ! Explorez la puissance de SAP Business One, la solution intégrée conçue pour transformer la gestion d'entreprise */}
                            Découvrez dès maintenant les fonctionnalités clés de cette solution. 
                            {/* <br /> */}
                            <br />
                            Contactez notre équipe commerciale pour convenir d'une 
                            visite ou d'une démonstration personnalisée !
                        </h2>
                        <Link href="/#" className="theme-btn btn-style-one light"><span className="btn-title-text-white">Demander une démo</span></Link>
                    </div>
                </div>
                
            </section>
        </>
    )
}
