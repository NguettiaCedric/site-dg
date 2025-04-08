import Link from "next/link"

export default function Menu() {


    return (
        <>
            <ul className="navigation">
                <li className=""><Link href="/">Accueil</Link></li>
                <li className=""><Link href="/">A propos</Link></li>



                <li className="dropdown"><Link href="/page-about">Nos Secteurs d’Activité</Link>
                    <ul>
                        <li className="dropdown"><Link href="/page-services">Technologie</Link>
                            <ul>
                                {/* <li><Link href="/page-team">Technologie</Link></li> */}
                                <li><Link href="/page-team-details"> ERP (Enterprise Resource Planning)</Link></li>
                                <li><Link href="/page-team-details">Cybersécurité</Link></li>
                                <li><Link href="/page-team-details">Gestion de file d’attente</Link></li>
                                <li><Link href="/page-team-details">Traçabilité agricole</Link></li>
                                <li><Link href="/page-team-details">Développement d’applications sur mesure</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown"><Link href="/page-services">Énergie</Link>
                            <ul>
                                <li><Link href="/page-team-details">Énergies renouvelables</Link></li>
                                <li><Link href="/page-team-details">Gestion carbone</Link></li>
                                <li><Link href="/page-team-details">Projets solaires</Link></li>
                                <li><Link href="/page-team-details">Solutions durables et éco-responsables</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown"><Link href="/page-services">Import-export</Link>
                            <ul>
                                <li><Link href="/page-team-details">Activités d’import-export à l’international</Link></li>
                                {/* <li><Link href="/page-team-details">Cybersécurité</Link></li>
                                <li><Link href="/page-team-details">Gestion de file d’attente</Link></li>
                                <li><Link href="/page-team-details">Traçabilité agricole</Link></li>
                                <li><Link href="/page-team-details">Développement d’applications sur mesure</Link></li> */}
                            </ul>
                        </li>


                        <li className="dropdown"><Link href="/page-services">BTP</Link>
                            <ul>
                                <li><Link href="/page-team-details">Projets BTP : construction, rénovation, infrastructures                                </Link></li>
                                {/* <li><Link href="/page-team-details">Cybersécurité</Link></li>
                                <li><Link href="/page-team-details">Gestion de file d’attente</Link></li>
                                <li><Link href="/page-team-details">Traçabilité agricole</Link></li>
                                <li><Link href="/page-team-details">Développement d’applications sur mesure</Link></li> */}
                            </ul>
                        </li>

                        <li className="dropdown"><Link href="/page-services">Conseil stratégique et opérationnel</Link>
                            <ul>
                                <li><Link href="/page-team-details">Conseil en stratégie, gestion de projet et transformation digitale</Link></li>
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
