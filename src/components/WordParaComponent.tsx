import { useState } from "react";
import ProcessWord from "./ProcessWord";
import ProcessPara from "./ProcessPara";

const WordParaComponent = () => {
  const [activeTab, setActiveTab] = useState<"word" | "para">("word");
  return (
    <div className="flex flex-col  w-full h-full">
      <div className="flex flex-col p-2 w-full ">
        <div className="flex max-md:flex-col   tab max-w-fit ">
          <button
            onClick={() => setActiveTab("word")}
            className={`px-32 py-2 rounded-md ${
              activeTab === "word"
                ? " bg-white   shadow-sm border border-red-100"
                : " "
            }`}
          >
            Word
          </button>
          <button
            onClick={() => setActiveTab("para")}
            className={`px-32 py-2 rounded-md ${
              activeTab === "para" ? " bg-white  shadow-sm border" : " "
            }`}
          >
            Paragraph
          </button>
        </div>
      </div>

      {/*  */}
      {activeTab === "word" ? <ProcessWord /> : <ProcessPara />}
    </div>
  );
};

export default WordParaComponent;
