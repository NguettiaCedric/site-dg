import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import EnergiesRenouvelable from "@/components/sections/EnergiesRenouvelable"
export default function energieRenouvelable() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Expertise - Énergie" />
                
                {/* <ServiceDetails /> */}
                <EnergiesRenouvelable addClass={"pt-5"}/>
            
            </Layout>
        </>
    )
}



