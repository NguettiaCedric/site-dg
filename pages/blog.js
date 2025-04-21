import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/inner/Contact"
import Map from "@/components/sections/Map"
import PageTitle from "@/components/sections/PageTitle"
import BlogNew from "@/components/sections/BlogNew"
// import TeamDetails from "@/components/sections/TeamDetails"
export default function blog() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Blog" />
                {/* <Map /> */}
                <BlogNew  addClass={"pt-5"}/>
                {/* <TeamDetails/> */}
                
            </Layout>
        </>
    )
}



