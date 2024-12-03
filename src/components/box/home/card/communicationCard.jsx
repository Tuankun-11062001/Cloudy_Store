import { appSvg } from "@/data/svg";
import React, { Suspense } from "react";
import Feedback from "./feedback";
import Loading from "@/app/[locale]/loading";
import TrashCommunication from "./trashCommunication";

const CommunicationCard = ({ data, userId, key }) => {
  return (
    <div className="communication_card" key={key}>
      <div className="communication_card_head">
        <div className="communication_card_left">
          <img src={data.user.avatar} />
          <div className="user">
            <h3>{data.user.userName}</h3>
            <p>{data.feeling}</p>
          </div>
        </div>
        <div className="motify">
          <abbr title="Content Checked!">
            {data.checkContent ? appSvg.check : ""}
          </abbr>

          <TrashCommunication data={data} userId={userId} />
        </div>
      </div>

      <div
        className="content tiptap"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>

      <Suspense fallback={<Loading />}>
        <Feedback data={data} />
      </Suspense>
    </div>
  );
};

export default CommunicationCard;
