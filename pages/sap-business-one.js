import Layout from "@/components/layout/Layout"
import SapDetails from "@/components/sections/inner/SapDetails"
import PageTitle from "@/components/sections/PageTitle"
export default function sapBusinessOne() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="SAP BUSINESS ONE" />
                <SapDetails  />
            </Layout>
        </>
    )
}