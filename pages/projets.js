import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ProjetsDetail from "@/components/sections/ProjetsDetail"
export default function Projets() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Projets Réalisés" />
                {/* <Map /> */}
                {/* <Projects1 /> */}
                <ProjetsDetail addClass={"pt-5"}/>
                
            </Layout>
        </>
    )
}