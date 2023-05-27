// import words from "../words.json";
import { useContext } from "react";
import TableHeader from "../components/table/table-header";
import Table from "../components/table/table";
import TableAdd from "../components/table/table-add";
import { WordContext } from "../components/wordsContext/WordContext";

function AllWords() {
  const { data } = useContext(WordContext);

  return (
    <>
      <TableHeader />

      <table className='table'>
        {data.map((word) => (
          <Table
            key={word.id}
            word={word.english}
            transcription={word.transcription}
            translation={word.english}
          ></Table>
        ))}
      </table>

      <TableAdd></TableAdd>
    </>
  );
}

export default AllWords;
