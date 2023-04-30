
import words from '../words.json';
// import Header from '../components/header/header';
import TableHeader from '../components/table/table-header';
import Table from '../components/table/table';
import TableAdd from '../components/table/table-add';

function AllWords () {

    return (
        <>
        {/* <Header/> */}
        
        

      <TableHeader/>

      <table className='table'>
          {words.map((word) =>
            <Table key={word.id} word={word.word} transcription={word.transcription} translation={word.translation}></Table>)}
      </table>
      
        <TableAdd></TableAdd>
        
        </>

    )
}

export default AllWords;