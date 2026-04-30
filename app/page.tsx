import MarketingNav from '@/components/MarketingNav';
import MarketingHero from '@/components/MarketingHero';
import MarketingHowItWorks from '@/components/MarketingHowItWorks';
import MarketingShortcuts from '@/components/MarketingShortcuts';
import MarketingFeatureSet from '@/components/MarketingFeatureSet';
import MarketingStats from '@/components/MarketingStats';
import MarketingTestimonials from '@/components/MarketingTestimonials';
import MarketingPricing from '@/components/MarketingPricing';
import MarketingFaq from '@/components/MarketingFaq';
import MarketingCta from '@/components/MarketingCta';
import MarketingGalaxyBackdrop from '@/components/MarketingGalaxyBackdrop';
import MarketingTeaserVideo from '@/components/MarketingTeaserVideo';

export default function Home() {
  return (
    <div className="relative bg-[#050b14] overflow-hidden">
      <MarketingGalaxyBackdrop />
      <div className="relative z-10">
        <MarketingNav />
        <MarketingHero />
        <div className="bg-[#050b14]">
          <MarketingTeaserVideo />
          <MarketingHowItWorks />
          <MarketingShortcuts />
          <MarketingFeatureSet />
          <MarketingStats />
          <MarketingTestimonials />
          <MarketingPricing />
          <MarketingFaq />
          <MarketingCta />
        </div>
      </div>
    </div>
  );
}
