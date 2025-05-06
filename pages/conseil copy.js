import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import ConseilComposant from "@/components/sections/ConseilComposant"
// import TeamDetails from "@/components/sections/TeamDetails"
export default function conseil() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Expertise - Conseil" />
                {/* <Map /> */}
                <ConseilComposant addClass={"pt-5"}/>
                {/* <TeamDetails/> */}
                
            </Layout>
        </>
    )
}



