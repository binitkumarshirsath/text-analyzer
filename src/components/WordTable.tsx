interface WordTableProps {
  words: number;
  characters: number;
}

const WordTable = ({ characters, words }: WordTableProps) => {
  return (
    <div className="sm:rounded-lg ">
      <table className="border-collapse bg-white overflow-x-auto text-left border  border-slate-100 md:w-[500px]">
        <thead>
          <tr className="font-sans font-medium text-base">
            <th className="border-2 border-slate-100 p-3 font-sans bg-[#FFFFFF] font-medium text-base text-[#475467] ">
              Words
            </th>
            <th className="border-2 border-slate-100 p-3 font-sans bg-[#FFFFFF] font-medium text-base text-[#475467] ">
              Characters
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-slate-100 p-3">{words}</td>
            <td className="border-2 border-slate-100 p-3">{characters}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WordTable;
