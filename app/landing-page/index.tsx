import PricingSection from './pricing-section';
import Hero from './hero';
import FeaturesSection from './features-section';
import { StickyScrollRevealDemo } from './ext-1';
import { TimelineDemo } from './ext-2';
import { AnimatedBeamMultipleOutputDemo } from './ext-3';
import { MarqueeDemo } from './ext-4';
import LampDemoo from './ext-5';
import { TypewriterEffectSmoothDemo } from './ext-7';
import { TextRevealDemo } from './ext-10';
import { HeroScrollDemo } from './ext-11';
import { TabsDemo } from './ext-12';
import { HeroVideoDialogDemo } from './ext-13';
import { WobbleCardDemo } from './ext-14';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <TextRevealDemo />
      <HeroScrollDemo />
      <HeroVideoDialogDemo />
      <TabsDemo />
      <FeaturesSection />
      <StickyScrollRevealDemo />
      <WobbleCardDemo />
      <TimelineDemo />
      <AnimatedBeamMultipleOutputDemo />
      <MarqueeDemo />
      <LampDemoo />
      <PricingSection />
      <TypewriterEffectSmoothDemo />
    </div>
  );
}

export default LandingPage;
