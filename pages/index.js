import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import About2 from "@/components/sections/About2"
import Clients1 from "@/components/sections/Clients1"
import Clients2 from "@/components/sections/Clients2"
import Contact1 from "@/components/sections/Contact1"
import Contact2 from "@/components/sections/Contact2"
import Cta from "@/components/sections/Cta"
import Faqs from "@/components/sections/Faqs"
import Funfact from "@/components/sections/Funfact"
import Marquee1 from "@/components/sections/Marquee1"
import Marquee2 from "@/components/sections/Marquee2"
import News1 from "@/components/sections/News1"
import News2 from "@/components/sections/News2"
import Projects1 from "@/components/sections/Projects1"
import Projects2 from "@/components/sections/Projects2"
import Services1 from "@/components/sections/Services1"
import Services2 from "@/components/sections/Services2"
import Slider1 from "@/components/sections/Slider1"
import Slider2 from "@/components/sections/Slider2"
import Testimonial1 from "@/components/sections/Testimonial1"
import Testimonial2 from "@/components/sections/Testimonial2"
import Whychoose1 from "@/components/sections/Whychoose1"
import Whychoose2 from "@/components/sections/Whychoose2"
import Team from "@/components/sections/Team"
import Map from "@/components/sections/Map"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                {/* <Slider1 /> */}
                <Slider2 />
                {/* <Services1 /> */}
                <Whychoose1 />
                {/* <Whychoose2 /> */}

                <Services2 addClass={"pt-5"}/>
                {/* <About1 addClass={"pt-0"} /> */}
                <Marquee1 />
                <Cta />
                <Projects1 />
                <Faqs />
                {/* <Whychoose1 /> */}
                {/* <Testimonial1 /> */}
                {/* <News2 /> */}

                <Funfact />
                {/* <News1 /> */}
                {/* <Contact1 /> */}
                <Clients1 />
                <Team />

                <Map />
                            
                
                {/* <Services2 />
                <Marquee2 />
                <About2 />
                <Projects2 />
                <Whychoose2 />
                <Testimonial2 />
                <Clients2 />
                <Contact2 />
                <News2 />
                <Map /> */}

            </Layout>
        </>
    )
}