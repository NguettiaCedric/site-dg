import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import About2 from "@/components/sections/About2"
import Services1 from "@/components/sections/Services1"
import TeamInnerAbout from "@/components/sections/inner/TeamInnerAbout"
import PageTitle from "@/components/sections/PageTitle"
import Team from "@/components/sections/Team"
import NewsDetails from "@/components/sections/inner/NewsDetails"
export default function About3() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="A propos" />
                {/* <About1 addClass={"pt-100 pb-50"} /> */}
                {/* <Services1 /> */}
                {/* <TeamInnerAbout /> */}
                {/* <NewsDetails /> */}
                {/* <About1/> */}
                <About2/>
                {/* <Team /> */}
                
            </Layout>
        </>
    )
}