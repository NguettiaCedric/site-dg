import Layout from "@/components/layout/Layout"
import FarmsioDetails from "@/components/sections/inner/FarmsioDetails"
import PageTitle from "@/components/sections/PageTitle"
export default function SolutionTracabiliteAgricole() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Solution Farmsio" />
                <FarmsioDetails  />
            </Layout>
        </>
    )
}