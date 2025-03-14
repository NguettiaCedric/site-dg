import Link from "next/link"

export default function Menu() {


    return (
        <>
            <ul className="navigation">
                <li className=""><Link href="/">Accueil</Link>                 
                </li>
                <li className=""><Link href="/">A propos</Link>                 
                </li>
                               
                <li className="dropdown"><Link href="/page-services">Services</Link>
                    <ul>
                        <li><Link href="/page-services">Informatique</Link></li>
                        <li><Link href="/page-services">Énergie solaire</Link></li>
                        {/* <li><Link href="/page-service-details">Service Details</Link></li> */}
                    </ul>
                </li>
                <li className=""><Link href="/">Projets Realisés</Link>                 
                </li>
                <li className=""><Link href="/">FAQ</Link>                 
                </li>
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
