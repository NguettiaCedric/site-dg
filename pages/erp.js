import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import ErpDetail from "@/components/sections/ErpDetail"
export default function DetailErp() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Expertise - Technologie" />
                {/* <Map /> */}
                <ErpDetail addClass={"pt-5"}/>
                
            </Layout>
        </>
    )
}