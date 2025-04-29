
import Link from "next/link"

export default function CtaIA() {
    return (
        <>
            <section className="call-to-action mb-4">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/bg4.jpg)' }}></div>
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <h2 className="title"> 
                            
                            <br />
                            Contactez KOOTHE
                        </h2>
                        <Link href="/#" className="theme-btn btn-style-one light"><span className="btn-title-text-white">Contat</span></Link>
                    </div>
                </div>
                
            </section>
        </>
    )
}
