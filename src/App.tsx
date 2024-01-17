import WordParaComponent from "./components/WordParaComponent";
import "./index.css";

function App() {
  return (
    <div className="h-full w-full flex flex-col p-4">
      <div>
        <h1 className="text-[#344054] text-5xl font-medium  font-inter max-md:text-center max-md:mt-5">
          Text Analyzer
        </h1>
        <p className="font-sans font-normal md:text-4xl mt-4 leading-snug max-md:text-center max-md mb-6 text-[#475467] ">
          Text Analyzer is a simple free online tool for SEO web content
          analysis that helps you find most frequent phrases and words, number
          of characters, words, sentences and paragraphs, and estimated read and
          speak time of your content.
        </p>
        <WordParaComponent />
      </div>
    </div>
  );
}

export default App;
