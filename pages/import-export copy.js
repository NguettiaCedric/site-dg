import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import ImportExp from "@/components/sections/ImportExp"
// import TeamDetails from "@/components/sections/TeamDetails"
export default function importExport() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Expertise - Import-Export" />
                {/* <Map /> */}
                <ImportExp addClass={"pt-5"}/>
                {/* <TeamDetails/> */}
                
            </Layout>
        </>
    )
}



