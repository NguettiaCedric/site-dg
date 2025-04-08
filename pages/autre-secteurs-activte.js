import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import AutreActivite from "@/components/sections/AutreActivite"
export default function autreSecteurActivte() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Autre Secteurs Activité" />
                {/* <Map /> */}
                <AutreActivite addClass={"pt-5"}/>
                
            </Layout>
        </>
    )
}