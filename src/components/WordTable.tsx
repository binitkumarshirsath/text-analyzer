interface WordTableProps {
  words: number;
  characters: number;
}

const WordTable = ({ characters, words }: WordTableProps) => {
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
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">{characters}</td>
            <td className="px-6 py-4">{words}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WordTable;
