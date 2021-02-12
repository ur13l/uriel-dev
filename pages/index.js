import { useState, useEffect, useCallback } from "react";
import FullViewBackground from "../_layout/full-view-background";
import Navbar from "../_includes/navbar";

export default function Home() {
  return (
    <FullViewBackground
      backgroundImage={"/images/programming-background.jpg"}
      opacity={70}
      layerColor="bg-black"
    >
      <Navbar showMenu={false} />
      <h1 className="font-semibold">Uriel Infante</h1>
    </FullViewBackground>
  );
}
