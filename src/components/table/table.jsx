import { useState } from 'react';
import './table.scss';

function Table(props) {

    const [changeTranslations, setchangeTranslation] = useState(props.translation);
    const [changeTranscription, setChangeTranscription] = useState(props.transcription);
    const [changeWord, setChangeWord] = useState(props.word);

    const handleChange = (event) => {
        setchangeTranslation(event.target.value);
    }

    const changeTranscriptions = (event) => {
        setChangeTranscription(event.target.value);
    }

    const ChangeWord = (event) => {
        setChangeWord(event.target.value);
    }

return (
    <>

<tr>
<td className='table__cell'><input type="text" value={changeWord} onChange={ChangeWord}></input></td>
<td className='table__cell'><input type="text" value={changeTranscription} onChange={changeTranscriptions}></input></td>
<td className='table__cell'><input type="text" value={changeTranslations} onChange={handleChange}></input></td>
<td className='table__cell'></td>
<td className='table__cell'></td>
<td className='table__cell'><button className='table__button'>Удалить</button></td>
</tr>

    </>
)


}

export default Table;