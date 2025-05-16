import Link from "next/link"

export default function Menu() {


    return (
        <>
            <ul className="navigation">
                <li className=""><Link href="/">Accueil</Link></li>
                <li className=""><Link href="/a-propos">À propos</Link></li>
                <li className="dropdown"><Link href="/page-about">Nos Secteurs d’Activité</Link>
                    <ul>
                        <li className="dropdown"><Link href="">Technologie</Link>
                            <ul>
                                <li><Link href="/erp"> ERP (Enterprise Resource Planning)</Link></li>
                                <li><Link href="/intelligence-artificielle">Intelligence aritificielle</Link></li>
                                <li><Link href="/cybersecurite">Cybersécurité</Link></li>
                                {/* <li><Link href="/file-attente">Gestion de file d’attente</Link></li> */}
                                <li><Link href="/tracabilite-agricole">Traçabilité agricole</Link></li>
                                <li><Link href="/developpement-web-mobile">Développement d’applications sur mesure</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown"><Link href="/energie">Énergie</Link>
                            <ul>
                                <li><Link href="/energie">Énergie</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown"><Link href="">Import-export</Link>
                            <ul>
                                <li><Link href="/import-export">Activités d’import-export à l’international</Link></li>
                            </ul>
                        </li>


                        <li className="dropdown"><Link href="/btp-construction-industrielle">BTP et Construction Industrielle</Link>
                            <ul>
                                <li><Link href="/btp-construction-industrielle">Projets BTP : construction, rénovation, infrastructures</Link></li>
                               
                            </ul>
                        </li>

                        <li className="dropdown"><Link href="">Conseil stratégique et opérationnel</Link>
                            <ul>
                                <li><Link href="/conseil">Conseil en stratégie, gestion de projet et transformation digitale</Link></li>
                             
                            </ul>
                        </li>

                       <li className=""><Link href="/autre-secteurs-activte">Autre Secteurs d’Activité</Link></li>                 
                        

                    </ul>
                </li>


                {/* <li className=""><Link href="/autre-secteurs-activte">Autre Secteurs d’Activité</Link></li>                  */}
                <li className=""><Link href="/projets">Projets Realisés</Link></li>
                <li className=""><Link href="/blog">Blog</Link></li>
                <li className=""><Link href="#about">FAQ</Link> </li>
             
                <li><Link href="/page-contact">Contact</Link></li>
            </ul>
        </>
    )
}
