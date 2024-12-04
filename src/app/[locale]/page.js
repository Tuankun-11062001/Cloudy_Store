import Feeling from "@/components/box/home/feeling";
import { Suspense } from "react";

import CommunicationList from "@/components/box/home/list/communicationList";
import { AdsHorizal, ListVertical } from "@/components/ads/ads";
import { appSvg } from "@/data/svg";

export const metadata = {
  title: "Communication - Cloudy Melody",
  description: "Can you share your feeling?",
};

export default async function Home() {
  return (
    <div className="home">
      <div className="left">
        <div className="home_content">
          <Suspense
            fallback={<div className="icon_loading">{appSvg.loading}</div>}
          >
            <Feeling />
          </Suspense>
          <CommunicationList />
          <AdsHorizal />
        </div>
      </div>
      <div className="right">
        <ListVertical />
      </div>
    </div>
  );
}
