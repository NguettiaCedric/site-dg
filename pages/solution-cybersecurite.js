import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import CyberSecurityDetail from "@/components/sections/CyberSecurityDetail"
// import TeamDetails from "@/components/sections/TeamDetails"
export default function SolutionCybersecurite() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Expertise - Technologie" />
                {/* <Map /> */}
                <CyberSecurityDetail addClass={"pt-5"}/>
                {/* <TeamDetails/> */}
                
            </Layout>
        </>
    )
}



