import { useState, useEffect, useCallback } from "react";
import FullViewBackground from "../_layout/full-view-background";
import Navbar from "../_includes/navbar";
import Hero from "../_includes/hero";

export default function Home() {
  return (
    <FullViewBackground
      backgroundImage={"/images/programming-background.jpg"}
      opacity={70}
      layerColor="bg-black"
    >
      <Navbar showMenu={false} />
      <Hero />
    </FullViewBackground>
  );
}
