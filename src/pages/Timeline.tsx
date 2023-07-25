import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";

export function Timeline() {
  const [newTweet, setNewTweet] = useState("")
  const [tweets, setTweets] = useState([
    "This is my first tweet!",
    "I'm very excited to share some news with you guys!",
    "I got my first job as a Front-end Developer!"
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet,...tweets])
    setNewTweet("")
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if ((event.key === "Enter" && event.ctrlKey) || event.metaKey) {
      setTweets([newTweet,...tweets])
      setNewTweet("")
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/samylecarvalho.png" alt="Samyle Carvalho" />
          <textarea
            id="tweet" 
            placeholder="What`s happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }} 
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
