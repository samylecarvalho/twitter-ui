import { useState, FormEvent, KeyboardEvent } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo",
    "Faz sentido",
    "Parabéns pelo progresso",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if ((event.key === "Enter" && event.ctrlKey) || event.metaKey) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <Tweet
        content={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia repellat cum impedit deleniti placeat numquam doloremque minima, officiis corporis porro enim nesciunt, tempora itaque exercitationem harum suscipit recusandae. At, minus."
        }
      />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/samylecarvalho.png"
            alt="Samyle Carvalho"
          />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          ></textarea>
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
          </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
