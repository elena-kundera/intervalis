// import { useContext } from "react";
import TableHeader from "../components/table/table-header";
import Table from "../components/table/table";
import TableAdd from "../components/table/table-add";
import { observer, inject } from "mobx-react";
import { useEffect } from "react";

const AllWords = inject(["wordStore"])(
  observer(({ wordStore }) => {
    useEffect(() => {
      wordStore.fetchData();
    }, [wordStore]);

    return (
      <>
        <TableHeader />

        <table className='table'>
          {wordStore.words.map((word, index) => (
            <Table
              id={word.id}
              word={word.english}
              transcription={word.transcription}
              translation={word.russian}
            ></Table>
          ))}
        </table>

        <TableAdd></TableAdd>
      </>
    );
  })
);

export default AllWords;
