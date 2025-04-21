import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import ProjetsSolaire from "@/components/sections/ProjetsSolaire"
// import TeamDetails from "@/components/sections/TeamDetails"
export default function ProjetsSolaires() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Expertise - Énergie" />
                {/* <Map /> */}
                <ProjetsSolaire addClass={"pt-5"}/>
                {/* <TeamDetails/> */}
                
            </Layout>
        </>
    )
}



