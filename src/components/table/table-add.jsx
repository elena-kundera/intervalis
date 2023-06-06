// import { useEffect } from "react";
import { useState } from "react";
import "./table.scss";
import { observer, inject } from "mobx-react";

const TableAdd = inject(["wordStore"])(
  observer(({ wordStore }) => {
    const [newWord, setNewWord] = useState("");
    const [newTranscription, setNewTranscription] = useState("");
    const [newRussian, setNewRussian] = useState("");

    const addNewWord = () => {
      const thatNewWord = {
        english: newWord,
        transcription: newTranscription,
        russian: newRussian,
      };

      wordStore.addWord(thatNewWord);
      setNewWord("");
      setNewTranscription("");
      setNewRussian("");

      console.log(thatNewWord);
    };

    return (
      <table border='1' className='table__adding'>
        <tr className='table__header__firstrow'>
          <td className='table__header_cell'>
            <input
              type='text'
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              placeholder='Введите слово'
            />
          </td>
          <td className='table__header_cell'>
            <input
              type='text'
              value={newTranscription}
              onChange={(e) => setNewTranscription(e.target.value)}
              placeholder='Введите транскрипцию'
            />
          </td>
          <td className='table__header_cell'>
            <input
              type='text'
              value={newRussian}
              onChange={(e) => setNewRussian(e.target.value)}
              placeholder='Введите перевод'
            />
          </td>
          <td className='table__header_cell'></td>
          <td className='table__header_cell'></td>
          <td className='table__header_cell'>
            <button className='table__button' onClick={addNewWord}>
              Сохранить
            </button>
          </td>
        </tr>
      </table>
    );
  })
);

export default TableAdd;
