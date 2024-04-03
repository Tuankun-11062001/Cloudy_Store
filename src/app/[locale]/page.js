"use client";
import HowWork from "@/components/howWork";
import Season from "@/components/season/season";
import Partner from "@/components/partner";
import Blog from "@/components/blog";
import Support from "@/components/support/support";
import HeroLeft from "@/components/hero/hero";
import LatestProduct from "@/components/hero/latestProduct";

export default async function Home() {
  return (
    <div className="home home_layout">
      <div className="home_hero">
        <HeroLeft />
        <LatestProduct />
      </div>
      {/* how it work */}
      <HowWork />

      {/* season */}
      <Season />

      {/* parter */}

      <Partner />

      {/* blog */}
      <Blog />

      {/* support */}

      <Support />
    </div>
  );
}
