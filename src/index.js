import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function TweetCard() {
  return (
    <div className="tweetCard">
      <Avatar />
      <div className="content">
        <HandleName />
        <Time />
        <Message />
        <div className="buttons">
          <Reply />
          <Retweet />
          <Like />
          <MoreOptions />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <span className="avatar">
      <i class="fas fa-user-circle fa-3x" />
    </span>
  );
}

function Message() {
  return <div className="message">This is less than 140 characters</div>;
}

function HandleName() {
  return (
    <span className="name-with-handle">
      <span className="name">IDee</span>
      <span className="handle">@itz_Giddy</span>
    </span>
  );
}

const Time = () => {
  return <span className="time">3h ago</span>;
};

const Reply = () => {
  return <i className="fa fa-reply reply-button" />;
};

const Retweet = () => {
  const [handleRetweet, setHandleRetweet] = useState({ color: "#8899a6" });
  return (
    <i
      className="fa fa-retweet retweet-button"
      style={handleRetweet}
      onClick={() => setHandleRetweet({ color: "#28e516" })}
    />
  );
};
const Like = () => <i className="fa fa-heart like-button" />;
const MoreOptions = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<TweetCard />, document.getElementById("root"));
