import SupportForm from "@/components/support/supportForm";
import React from "react";

const SupportPage = () => {
  return (
    <div className="support_layout support">
      <div className="content">
        <div className="left">
          <h3>Hi! I am Support Team</h3>
          <p>Can i help you?</p>
          <SupportForm />
        </div>
        <div className="image">
          <img src="/support.gif" />
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
