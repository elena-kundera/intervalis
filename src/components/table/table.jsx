import { useState } from 'react';
import './table.scss';

function Table(props) {

    const [changeTranslations, setchangeTranslation] = useState(props.translation);

    const handleChange = (event) => {
        setchangeTranslation(event.target.value);
    }


return (
    <>
<table className='table'>
<tr>
<td className='table__cell'>{props.word}</td>
<td className='table__cell'>{props.transcription}</td>
<td className='table__cell'><input type="text" value={changeTranslations} onChange={handleChange}></input></td>
<td className='table__cell'></td>
<td className='table__cell'></td>
<td className='table__cell'><button className='table__button'>Удалить</button></td>
</tr>
</table>
    </>
)


}

export default Table;