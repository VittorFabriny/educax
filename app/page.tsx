import { Feedback } from '../components/feedback';
import { Header } from '../components/header';
import { HeroSection } from '../components/hero-section';
import { HowItWorks } from '../components/how-it-works';
import { Popular } from '../components/popular';
import { CallToAction } from '../components/call-to-action';
import { Footer } from '../components/footer';

export default function Landing() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorks />
      <Popular />
      <Feedback />
      <CallToAction />
      <Footer />
    </>
  );
}
