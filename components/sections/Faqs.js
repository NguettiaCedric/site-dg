'use client'
import { useState } from 'react'


export default function Faqs() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>

            <section className="faqs-section pt-3">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        {/* <span className="sub-title">frequently asked questions</span> */}
                        <h2>FAQ<br /></h2>
                    </div>
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="image-box">
                                            <figure className="image overlay-anim"><img src="/images/resource/faq.jpg" alt="" /></figure>
                                            <div className="exp-box">
                                                <span className="count">05</span>
                                                <h5 className="">Années<br />Experience</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        {/* Faq Block */}
                                        <div className="faq-block">
                                            <div className="inner-box">
                                                <div className="title-box">
                                                    <i className="icon fa fa-long-arrow-alt-right" />
                                                    <h6 className="title">SAP S/4HANA</h6>
                                                </div>
                                                {/* <div className="text">Lorem ipsum is simply free text dol sit amet, passage of.</div> */}
                                            </div>
                                        </div>
                                        {/* Faq Block */}
                                        <div className="faq-block">
                                            <div className="inner-box">
                                                <div className="title-box">
                                                    <i className="icon fa fa-long-arrow-alt-right" />
                                                    <h6 className="title">SAP Business One ?</h6>
                                                </div>
                                                {/* <div className="text">Lorem ipsum is simply free text dol sit amet, passage of.</div> */}
                                            </div>
                                        </div>
                                        {/* Faq Block */}
                                        <div className="faq-block">
                                            <div className="inner-box">
                                                <div className="title-box">
                                                    <i className="icon fa fa-long-arrow-alt-right" />
                                                    <h6 className="title">SAP RSM</h6>
                                                </div>
                                                {/* <div className="text">Lorem ipsum is simply free text dol sit amet, passage of.</div> */}
                                            </div>
                                        </div>
                                        <div className="faq-block">
                                            <div className="inner-box">
                                                <div className="title-box">
                                                    <i className="icon fa fa-long-arrow-alt-right" />
                                                    <h6 className="title">Farmsio</h6>
                                                </div>
                                                {/* <div className="text">Lorem ipsum is simply free text dol sit amet, passage of.</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FAQ Column */}
                        <div className="faq-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <ul className="accordion-box wow fadeInRight">
                                    {/*Block*/}
                                    <li className="accordion block active-block">
                                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}> Qu'est-ce que SAP S/4HANA ?
                                            <div className="icon fa fa-plus" />
                                        </div>
                                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">SAP S/4HANA est un logiciel ERP de nouvelle génération conçu pour les grandes entreprises. Il fonctionne sur la base de données en mémoire SAP HANA, offrant des performances optimisées et une gestion en temps réel des processus métier.</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block active-block">
                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>Qu'est-ce que SAP Business One ?
                                            <div className="icon fa fa-plus" />
                                        </div>
                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">SAP Business One est un logiciel de gestion intégré (ERP) conçu pour les petites et moyennes entreprises. Il aide à gérer les finances, les ventes, les stocks et d'autres processus métiers.</div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*Block*/}
                                    <li className="accordion block active-block">
                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>Qu'est-ce qu'un RSM ?
                                            <div className="icon fa fa-plus" />
                                        </div>
                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Une solution spécialement conçue pour les exploitations agricoles, cette solution de gestion intégrée vous offre une visibilité totale sur l'ensemble de vos activités.</div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*Block*/}
                                    <li className="accordion block active-block">
                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>Qu'est-ce que Farmsio ?
                                            <div className="icon fa fa-plus" />
                                        </div>
                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="text">Farmsio est une solution numérique pour l’agriculture qui permet de suivre et optimiser la production agricole grâce à des outils technologiques.</div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*Block*/}
                                    
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
