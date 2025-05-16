import Layout from "@/components/layout/Layout"
import NewsDetails1 from "@/components/sections/inner/NewsDetails1"
import PageTitle from "@/components/sections/PageTitle"
export default function newsdetailspage1() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Blog Details" />
                <NewsDetails1 />
            </Layout>
        </>
    )
}