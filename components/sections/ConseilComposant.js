
import Link from "next/link"
import CtaConseil from "./CtaConseil"

export default function ConseilComposant() {
    return (
        <>

<section className="team-details bg bg-pattern-7">
        <div className=""></div>
          <div className="container pb-0">
            <div className="team-details__top pb-0">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Consulting métier : boostez votre performance opérationnelle</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Notre équipe de consultants sectoriels vous accompagne dans l'optimisation de vos process métier.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Diagnostic de vos process clés</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Nous auditerons avec vous vos activités de vente, production, logistique, finance, pour identifier leviers d'amélioration.
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
      </section>

      <section className="team-details">
        {/* <div className=""></div> */}
        <div className="container pb-3">
          <div className="team-details__top pb-0">
            <div className="row">

            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-content">
                      <h3 className="">Benchmark et bonnes pratiques</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Notre expertise des enjeux de votre secteur vous permettra de positionner vos pratiques par rapport à la concurrence.
                      </p>

                  </div>
                </div>
              </div> 

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-content">
                      <h3 className="">Scénarios de transformation</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Nos consultants vous présenteront des scénarios chiffrés et opérationnels pour gagner en efficacité sur vos process métier.
                      </p>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>


      <section className="team-details bg bg-pattern-7">
        {/* <div className=""></div> */}
        <div className="container pb-4">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">Accompagnement de projets</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    Nous vous assisterons dans la conduite du changement nécessaire pour atteindre vos nouveaux objectifs métier.
                      <br />
                      Confiez-nous dès aujourd'hui l'audit approfondi de vos process opérationnels clés pour boostez votre performance sur le long terme.
                    </p>                    
                  </div>                 
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    
      {/* CtaConseil */}
      <CtaConseil />

            
        </>
    )
}
