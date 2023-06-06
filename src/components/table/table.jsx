// import { useState } from "react";
import "./table.scss";
import { observer, inject } from "mobx-react";

const Table = inject(["wordStore"])(
  observer(({ wordStore, word, transcription, translation, id }) => {
    const deleteThatWord = () => {
      console.log(id);
      wordStore.removeWord(id);
    };

    return (
      <>
        <tr>
          <td className='table__cell'>
            <input
              type='text'
              value={word}
              //  onChange={ChangeWord}
            ></input>
          </td>
          <td className='table__cell'>
            <input
              type='text'
              value={transcription}
              // onChange={changeTranscriptions}
            ></input>
          </td>
          <td className='table__cell'>
            <input
              type='text'
              value={translation}
              // onChange={handleChange}
            ></input>
          </td>
          <td className='table__cell'></td>
          <td className='table__cell'></td>
          <td className='table__cell'>
            <button className='table__button' onClick={deleteThatWord}>
              Удалить
            </button>
          </td>
        </tr>
      </>
    );
  })
);

// function Table(props) {
//   // const [changeTranslations, setchangeTranslation] = useState(
//   //   props.translation
//   // );
//   // const [changeTranscription, setChangeTranscription] = useState(
//   //   props.transcription
//   // );
//   // const [changeWord, setChangeWord] = useState(props.word);

//   // const handleChange = (event) => {
//   //   setchangeTranslation(event.target.value);
//   // };

//   // const changeTranscriptions = (event) => {
//   //   setChangeTranscription(event.target.value);
//   // };

//   // const ChangeWord = (event) => {
//   //   setChangeWord(event.target.value);
//   // };

//   const showId = () => {
//     console.log(props.id);
//   };

//   return (
//     <>
//       <tr>
//         <td className='table__cell'>
//           <input
//             type='text'
//             value={props.word}
//             //  onChange={ChangeWord}
//           ></input>
//         </td>
//         <td className='table__cell'>
//           <input
//             type='text'
//             value={props.transcription}
//             // onChange={changeTranscriptions}
//           ></input>
//         </td>
//         <td className='table__cell'>
//           <input
//             type='text'
//             value={props.translation}
//             // onChange={handleChange}
//           ></input>
//         </td>
//         <td className='table__cell'></td>
//         <td className='table__cell'></td>
//         <td className='table__cell'>
//           <button className='table__button' onClick={showId}>
//             Удалить
//           </button>
//         </td>
//       </tr>
//     </>
//   );
// }

export default Table;
