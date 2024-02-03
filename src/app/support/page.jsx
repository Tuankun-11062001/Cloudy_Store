import React from "react";

const SupportPage = () => {
  return (
    <div className="support_layout support">
      <div className="content">
        <div className="left">
          <h3>{`Hi! I'm Support Team`}</h3>
          <p>{`Can i help you?`}</p>
          <div className="form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <textarea placeholder="What is your problem..." />
          </div>
          <button>Send</button>
        </div>
        <div className="image">
          <img src="/robot_support.gif" />
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
