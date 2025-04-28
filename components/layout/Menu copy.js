import Link from "next/link"

export default function Menu() {


    return (
        <>
            <ul className="navigation">
                <li className=""><Link href="/">Accueil</Link></li>
                <li className=""><Link href="/a-propos">A propos</Link></li>

                <li className="dropdown"><Link href="/page-about">Nos Secteurs d’Activité</Link>
                    <ul>
                        <li className="dropdown"><Link href="">Technologie</Link>
                            <ul>
                                {/* <li><Link href="/page-team">Technologie</Link></li> */}
                                <li><Link href="/erp"> ERP (Enterprise Resource Planning)</Link></li>
                                <li><Link href="/cybersecurite">Cybersécurité</Link></li>
                                <li><Link href="/file-attente">Gestion de file d’attente</Link></li>
                                <li><Link href="/tracabilite-agricole">Traçabilité agricole</Link></li>
                                <li><Link href="/developpement-web-mobile">Développement d’applications sur mesure</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown"><Link href="">Énergie</Link>
                            <ul>
                                <li><Link href="/energie-renouvelable">Énergies renouvelables</Link></li>
                                <li><Link href="/gestion-carbone">Gestion carbone</Link></li>
                                <li><Link href="/projets-solaires">Projets solaires</Link></li>
                                <li><Link href="/solutions-durables-eco-responsables">Solutions durables et éco-responsables</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown"><Link href="">Import-export</Link>
                            <ul>
                                <li><Link href="/import-export">Activités d’import-export à l’international</Link></li>
                                {/* <li><Link href="/page-team-details">Cybersécurité</Link></li>
                                <li><Link href="/page-team-details">Gestion de file d’attente</Link></li>
                                <li><Link href="/page-team-details">Traçabilité agricole</Link></li>
                                <li><Link href="/page-team-details">Développement d’applications sur mesure</Link></li> */}
                            </ul>
                        </li>


                        <li className="dropdown"><Link href="">BTP</Link>
                            <ul>
                                <li><Link href="/btp">Projets BTP : construction, rénovation, infrastructures</Link></li>
                                {/* <li><Link href="/page-team-details">Cybersécurité</Link></li>
                                <li><Link href="/page-team-details">Gestion de file d’attente</Link></li>
                                <li><Link href="/page-team-details">Traçabilité agricole</Link></li>
                                <li><Link href="/page-team-details">Développement d’applications sur mesure</Link></li> */}
                            </ul>
                        </li>

                        <li className="dropdown"><Link href="">Conseil stratégique et opérationnel</Link>
                            <ul>
                                <li><Link href="/conseil">Conseil en stratégie, gestion de projet et transformation digitale</Link></li>
                                {/* <li><Link href="/page-team-details">Cybersécurité</Link></li>
                                <li><Link href="/page-team-details">Gestion de file d’attente</Link></li>
                                <li><Link href="/page-team-details">Traçabilité agricole</Link></li>
                                <li><Link href="/page-team-details">Développement d’applications sur mesure</Link></li> */}
                            </ul>
                        </li>

                       <li className=""><Link href="/autre-secteurs-activte">Autre Secteurs d’Activité</Link></li>                 
                        
                        {/* <li><Link href="/page-about">About</Link></li> */}

                    </ul>
                </li>



                               
                {/* <li className="dropdown"><Link href="/page-services">Nos Secteurs d’Activité</Link>
                    <ul>
                        <li><Link href="/page-services">Technologie</Link></li>
                        <li><Link href="/page-services">Énergie</Link></li>
                        <li><Link href="/page-services">Import-export</Link></li>
                        <li><Link href="/page-services">Conseil stratégique et opérationnel</Link></li>
                    </ul>
                </li> */}


                {/* <li className=""><Link href="/autre-secteurs-activte">Autre Secteurs d’Activité</Link></li>                  */}
                <li className=""><Link href="/">Projets Realisés</Link></li>
                <li className=""><Link href="/blog">Blog</Link></li>
                <li className=""><Link href="/">FAQ</Link> </li>
                {/* <li className="dropdown"><Link href="/page-projects">Projects</Link>
                    <ul>
                        <li><Link href="/page-projects">Projects Grid</Link></li>
                        <li><Link href="/page-project-details">Project Details</Link></li>
                    </ul>
                </li> */}
                {/* <li className="dropdown"><Link href="/news-grid">News</Link>
                    <ul>
                        <li><Link href="/news-grid">News Grid</Link></li>
                        <li><Link href="/news-details">News Details</Link></li>
                    </ul>
                </li> */}
                <li><Link href="/page-contact">Contact</Link></li>
            </ul>
        </>
    )
}
