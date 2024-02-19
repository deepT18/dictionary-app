import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [definition, setDefinition] = useState("");

  const findInDictionary = () => {
    setDefinition("");

    const dictionary = [
      {
        word: "React",
        meaning: "A JavaScript library for building user interfaces.",
      },
      { word: "Component", meaning: "A reusable building block in React." },
      { word: "State", meaning: "An object that stores data for a component." },
    ];

    const lowerCaseSearchWord = text.toLowerCase();

    for (const entry of dictionary) {
      const lowerCaseDictionaryWord = entry.word.toLowerCase();

      if (lowerCaseSearchWord === lowerCaseDictionaryWord) {
        setDefinition(entry.meaning);
        return;
      }
    }

    setDefinition((prevWordMeaning) => {
      if (prevWordMeaning === "") {
        return "Word not found in the dictionary.";
      }
      return prevWordMeaning;
    });
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          findInDictionary();
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search for a word"
        />
        <button type="submit">Submit</button>
      </form>
      <h3 style={{ marginTop: "0px" }}>Definition:</h3>
      <p>{definition}</p>
    </div>
  );
}

export default App;