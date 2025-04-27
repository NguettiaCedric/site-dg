import Layout from "@/components/layout/Layout"
import AlfrescoDetails from "@/components/sections/inner/AlfrescoDetails"
import PageTitle from "@/components/sections/PageTitle"
export default function SolutionAlfresco() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName=" ALFRESCO / GED et d'archivage" />
                <AlfrescoDetails  />
            </Layout>
        </>
    )
}