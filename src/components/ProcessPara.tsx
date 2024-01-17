import { useState } from "react";
import ParaTable from "./ParaTable";
import { analyzeText } from "../utils/helper";

const ProcessPara = () => {
  const [para, setPara] = useState("");

  const { sentences, words, characters, spaces, punctuations, paragraphs } =
    analyzeText(para);

  return (
    <div className="flex  w-full flex-col mt-3">
      <textarea
        autoFocus
        rows={10}
        cols={10}
        className=" px-3 mb-4 py-2 rounded-sm focus:none outline-none border-2 border-[#D2D6DB]"
        placeholder="Type of copy/paste your content here..."
        value={para}
        onChange={(e) => setPara(e.target.value)}
      />
      <ParaTable
        key={1}
        paragraphs={paragraphs}
        sentences={sentences}
        words={words}
        characters={characters}
        spaces={spaces}
        punctuations={punctuations}
      />
    </div>
  );
};

export default ProcessPara;
