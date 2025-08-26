import BottomBanner from "../sections/BottomBanner";
import { FaqSection } from "../sections/FaqSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import Pricing from "../sections/Pricing";
import Testimonials from "../sections/Testimonials";
import TrustedCompanies from "../sections/TrustedCompanies";
import About from "../components/About";
import CTA from "../components/CTA";

export default function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <FeaturesSection />
            <Testimonials />
            <FaqSection />
            <CTA/>
        </>
    );
}