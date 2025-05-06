
import Link from "next/link"

export default function CtaBtp() {
    return (
        <>
            <section className="call-to-action">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/bg4.jpg)' }}></div>
                <div className="auto-container">

                    <div className="row">

                            <div className="col-6">
                            <div className="outer-box wow fadeIn">
                        <h2 className="title">
                            Contactez
                        </h2>
                    </div>
                            </div>

                            <div className="col-6">

                        <Link href="/#" className="theme-btn btn-style-one light"><span className="btn-title-text-white">Demander une démo</span></Link>
                            </div>

                    </div>
                   

                    
                </div>
                
                
            </section>
        </>
    )
}
