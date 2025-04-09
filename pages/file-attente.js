import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import AttenteFile from "@/components/sections/AttenteFile"
// import TeamDetails from "@/components/sections/TeamDetails"
export default function fileAttente() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Expertise - Technologie" />
                {/* <Map /> */}
                <AttenteFile addClass={"pt-5"}/>
                {/* <TeamDetails/> */}
                
            </Layout>
        </>
    )
}



