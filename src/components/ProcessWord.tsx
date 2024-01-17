import { useState } from "react";

import WordTable from "./WordTable";
import { calculateWordsAndCharacters } from "../utils/helper";

const ProcessWord = () => {
  const [text, setText] = useState("");

  const { characters, words } = calculateWordsAndCharacters(text);

  return (
    <div className="flex  flex-col mt-3">
      <div className="flex gap-4 mb-4 items-center ">
        <input
          type="text"
          autoFocus
          value={text}
          placeholder="Start typing here..."
          className="h-10  px-3 w-10/12 py-2 border border-[#D2D6DB] rounded-sm focus:none outline-none"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-[#731EE2] text-[#FFFFFF] px-3 py-2 font-sans font-normal rounded-sm  text-sm">
          Process Word
        </button>
      </div>
      <WordTable words={words} characters={characters} />
    </div>
  );
};

export default ProcessWord;

{
  /* <input
          type="text"
          autoFocus
          className="h-10 mb-4 px-3 w-10/12 py-2 rounded-sm focus:none outline-none"
          placeholder="Start typing here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-[#731EE2] text-[#FFFFFF] px-3 py-2 font-sans font-normal rounded-sm  text-sm">
          Process Word
        </button> */
}
