import { ChatCircle, Heart, ArrowsClockwise } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Tweet.css";

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/samylecarvalho.png" alt="" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Samyle Carvalho</strong>
          <span>@samylecarvalho</span>
        </div>
        <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type="button"className="button">
            <ChatCircle />10
          </button>
          <button type="button" className="button">
            <ArrowsClockwise />36
          </button>
          <button type="button" className="button">
            <Heart />40
          </button>
        </div>
      </div>
    </Link>)
}