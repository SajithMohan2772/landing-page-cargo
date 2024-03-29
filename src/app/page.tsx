import Image from "next/image";
import Hero from "../components/hero";
import Content from "../components/content"
import Feature from "../components/feature"
import Statistic from "../components/statistic"
import Testimonial from "../components/testimonial"
import Gallery from "../components/gallery"
import Client from "../components/client"
import Newsletter from "../components/newsletter";

export default function Home() {
  return (
    <main>
       <Hero/>
       <Content/>
       <Feature/>
       <Statistic/>
       <Client/>
       <Testimonial/>
       <Gallery/>
       <Newsletter/>
    </main>
  );
}
