import React, { useState } from "react";
import "../index.css";

const Retweet = () => {
  const [state, setState] = useState(false);
  if (state) {
    return (
      <i
        className="fa fa-retweet retweet-button"
        style={{ color: "#3ace18" }}
        onClick={() => setState(false)}
      />
    );
  } else {
    return (
      <i
        className="fa fa-retweet retweet-button"
        style={{ color: "#aab8c2" }}
        onClick={() => setState(true)}
      />
    );
  }
};

export default Retweet;
