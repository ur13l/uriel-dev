import FullViewBackground from "../_layout/full-view-background";
import Navbar from "../_includes/navbar";
import Hero from "../_includes/hero";
import CoverFooter from "../_includes/cover-footer";
import { useRouter } from "next/router";

const Home = () => {
  const { pathname } = useRouter();
  return (
    <FullViewBackground
      backgroundImage={"/images/programming-background.jpg"}
      opacity={70}
      layerColor="bg-black"
    >
      <Navbar showMenu={false} color={"white"} location={pathname} />
      <Hero />
      <CoverFooter location={pathname} />
    </FullViewBackground>
  );
};

export default Home;
