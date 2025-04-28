import Layout from "@/components/layout/Layout"
import Sagex3Detail from "@/components/sections/inner/Sagex3Detail"
import PageTitle from "@/components/sections/PageTitle"
export default function solutionSagex3() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Sage X3" />
                <Sagex3Detail/>
            </Layout>
        </>
    )
}