import Layout from "@/components/layout/Layout"
import NewsDetails2 from "@/components/sections/inner/NewsDetails2"
import PageTitle from "@/components/sections/PageTitle"
export default function newsdetailspage2() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Blog Details" />
                <NewsDetails2 />
            </Layout>
        </>
    )
}