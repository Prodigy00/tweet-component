import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function TweetCard() {
  return (
    <div className="tweetCard">
      <Avatar />
      <div className="content">
        <HandleName />
        <Message />
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
ReactDOM.render(<TweetCard />, document.getElementById("root"));
