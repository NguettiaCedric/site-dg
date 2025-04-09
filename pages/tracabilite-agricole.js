import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import Tracability from "@/components/sections/Tracability"
// import TeamDetails from "@/components/sections/TeamDetails"
export default function tracabiliteAgricole() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Expertise - Technologie" />
                {/* <Map /> */}
                <Tracability addClass={"pt-5"}/>
                {/* <TeamDetails/> */}
                
            </Layout>
        </>
    )
}



