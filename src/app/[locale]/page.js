import Feeling from "@/components/box/home/feeling";
import { Suspense } from "react";

import CommunicationList from "@/components/box/home/list/communicationList";
import { AdsHorizal, ListVertical } from "@/components/ads/ads";
import { appSvg } from "@/data/svg";

export const metadata = {
  title: "Communication",
  description:
    "Share your personal experiences or emotions in the moment. Let your feelings be heard and connect with others through your story.",
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
