
import Link from "next/link"

export default function CtaIA() {
    return (
        <>
            <section className="call-to-action mb-4">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/bg4.jpg)' }}></div>
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <h2 className="title"> 
                            Contactez KOOTHE
                        </h2>
                        <Link href="/#" className="theme-btn btn-style-one light  text-end"><span className="btn-title-text-white">Contact</span></Link>
                    </div>
                </div>
                
            </section>
        </>
    )
}
