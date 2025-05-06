import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import BtpDetail from "@/components/sections/BtpDetail"
// import TeamDetails from "@/components/sections/TeamDetails"
export default function btpConstructionIndustrielle() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName={"Expertise - BTP ET CONSTRUCTION INDUSTRIELLE"} />
                {/* <Map /> */}
                <BtpDetail addClass={"pt-5"}/>
                {/* <TeamDetails/> */}
                
            </Layout>
        </>
    )
}



