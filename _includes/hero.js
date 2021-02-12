import HeroTitle from "../_includes/hero-title";
import AutoTypeableText from "../_includes/auto-typeable-text";
import phrases from "../_data/subtitle-phrases";

const Hero = () => (
  <div className="flex flex-col content-center justify-center">
    <HeroTitle>Uriel Infante</HeroTitle>
    <AutoTypeableText phrases={phrases} />
  </div>
);

export default Hero;
