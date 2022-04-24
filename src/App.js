import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😁": "Happy",
  "😂": "Laughing",
  "😩": "Fed up/Tired",
  "😎": "Smart",
  "🥳": "Partyyy",
  "🥵": "Hot",
  "🥶": "Cold",
  "😡": "Angry",
  "🤯": "Very Angry",
  "😱": "Shocked",
  "😪": "Sleepy"
};
var emojiList = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeEventHandler(event) {
    var inpText = event.target.value;
    var meaning = emojiDictionary[inpText];

    if (meaning === undefined) {
      meaning = "Oops! I don't know that";
    }

    setMeaning(meaning);
  }

  function onClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>What's your mood?</h1>
      <small> Either type or click on the emoticon </small>

      <input
        style={{
          display: "block",
          padding: "1rem",
          width: "1rem",
          margin: "auto"
        }}
        onChange={changeEventHandler}
      />
      <h2>Your mood {meaning}</h2>

      {emojiList.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => onClickHandler(emoji)}
            style={{ cursor: "pointer", fontSize: "large", padding: "0.25rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
