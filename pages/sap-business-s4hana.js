import Layout from "@/components/layout/Layout"
import SapDetailsHana from "@/components/sections/inner/SapDetailsHana"
import PageTitle from "@/components/sections/PageTitle"
export default function sapBusinessS4hana() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="SAP S/4 HANA" />
                <SapDetailsHana  />
            </Layout>
        </>
    )
}