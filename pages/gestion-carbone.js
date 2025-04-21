import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import GestionCarbon from "@/components/sections/GestionCarbon"
// import TeamDetails from "@/components/sections/TeamDetails"
export default function gestionCarbone() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Expertise - Énergie" />
                {/* <Map /> */}
                <GestionCarbon addClass={"pt-5"}/>
                {/* <TeamDetails/> */}
                
            </Layout>
        </>
    )
}



