import Layout from "@/components/layout/Layout"
import AiDetails from "@/components/sections/inner/AiDetails"
import PageTitle from "@/components/sections/PageTitle"
export default function intelligenceArtificielle() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Intelligence artificielle" />
                <AiDetails  />
            </Layout>
        </>
    )
}