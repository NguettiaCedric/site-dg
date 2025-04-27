import Layout from "@/components/layout/Layout"
import OdooDetails from "@/components/sections/inner/OdooDetails"
import PageTitle from "@/components/sections/PageTitle"
export default function SolutionOdoo() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Solution Odoo" />
                <OdooDetails  />
            </Layout>
        </>
    )
}