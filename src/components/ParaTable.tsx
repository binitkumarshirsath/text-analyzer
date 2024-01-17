interface ParaTableProps {
  characters: number;
  words: number;
  sentences: number;
  paragraphs: number;
  spaces: number;
  punctuations: number;
}

const ParaTable = ({
  characters,
  words,
  sentences,
  paragraphs,
  spaces,
  punctuations,
}: ParaTableProps) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Characters
            </th>
            <th scope="col" className="px-6 py-3">
              Words
            </th>
            <th scope="col" className="px-6 py-3">
              Sentences
            </th>
            <th scope="col" className="px-6 py-3">
              Paragraphs
            </th>
            <th scope="col" className="px-6 py-3">
              Spaces
            </th>
            <th scope="col" className="px-6 py-3">
              Punctuations
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">{characters}</td>
            <td className="px-6 py-4">{words}</td>
            <td className="px-6 py-4">{sentences}</td>
            <td className="px-6 py-4">{paragraphs}</td>
            <td className="px-6 py-4">{spaces}</td>
            <td className="px-6 py-4">{punctuations}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ParaTable;
