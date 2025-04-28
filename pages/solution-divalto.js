import Layout from "@/components/layout/Layout"
import DivaltoDetails from "@/components/sections/inner/DivaltoDetails"
import PageTitle from "@/components/sections/PageTitle"
export default function solutionDivalto() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Solution Divalto" />
                <DivaltoDetails  />
            </Layout>
        </>
    )
}