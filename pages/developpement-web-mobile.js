import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import DeveloppementWeb from "@/components/sections/DeveloppementWeb"
// import TeamDetails from "@/components/sections/TeamDetails"
export default function developpementWebMobile() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Expertise - Technologie" />
                {/* <Map /> */}
                <DeveloppementWeb addClass={"pt-5"}/>
                {/* <TeamDetails/> */}
                
            </Layout>
        </>
    )
}



