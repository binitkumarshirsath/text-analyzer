import { useState } from "react";

import WordTable from "./WordTable";
import { calculateWordsAndCharacters } from "../utils/helper";

const ProcessWord = () => {
  const [text, setText] = useState("");

  const { characters, words } = calculateWordsAndCharacters(text);

  return (
    <div className="flex w-full flex-col mt-3">
      <input
        type="text"
        autoFocus
        className="h-10 mb-4 px-3 py-2 rounded-sm focus:none outline-none"
        placeholder="Start typing here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <WordTable words={words} characters={characters} />
    </div>
  );
};

export default ProcessWord;
