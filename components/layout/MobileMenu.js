'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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
    const handleMobileMenu = () => {
         document.body.classList.remove("mobile-menu-visible")
    }
    return (
        <>
            <ul className="navigation clearfix">
                {/*Keep This Empty / Menu will come through Javascript*/}
                {/* <li className="current dropdown"><Link href="/">Accueil</Link>
                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/">Home page 01</Link></li>
                        <li><Link href="/index-2">Home page 02</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => {handleClick(1);}}><i className="fa fa-angle-down" /></div>
                </li>  */}

                <li><Link onClick={() => { handleMobileMenu()}} href="/">Accueil</Link></li>
                

                <li className="dropdown"><Link href="/page-team">Technologie</Link>
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/erp">ERP (Enterprise Resource Planning)</Link></li>
                        <li><Link href="/intelligence-artificielle">Intelligence aritificielle</Link></li>
                        <li><Link href="/cybersecurite">Cybersécurité</Link></li>
                        <li><Link href="/tracabilite-agricole">Traçabilité agricole</Link></li>
                        <li><Link href="/developpement-web-mobile">Développement d’applications sur mesure</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div>
                </li>



                <li className="dropdown"><Link href="/energie">Énergie</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link href="/energie">Énergie</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(3)}><i className="fa fa-angle-down" /></div>
                </li>

                <li className="dropdown"><Link href="/import-export">Import-export</Link>
                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li><Link href="/import-export">Activités d’import-export à l’international</Link></li>
                        {/* <li><Link href="/page-project-details">Project Details</Link></li> */}
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(4)}><i className="fa fa-angle-down" /></div>
                </li>

                <li><Link onClick={() => { handleMobileMenu()}} href="/btp-construction-industrielle">BTP et Construction Industrielle</Link></li>
                <li><Link onClick={() => { handleMobileMenu()}} href="/conseil">Conseil en stratégie, gestion de projet et transformation digitale</Link></li>
                <li><Link onClick={() => { handleMobileMenu()}} href="/autre-secteurs-activte">Autre Secteurs d’Activité</Link></li>
                <li><Link onClick={() => { handleMobileMenu()}} href="/">Projets Realisés</Link></li>
                <li><Link onClick={() => { handleMobileMenu()}} href="/blog">Blog </Link></li>
                <li><Link onClick={() => { handleMobileMenu()}} href="">FAQ </Link></li>
                <li><Link onClick={() => { handleMobileMenu()}} href="/page-contact">Contact</Link></li>





            </ul>

        </>
    )
}
