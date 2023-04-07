import { useEffect } from 'react';
import { useState } from 'react';
import './table.scss';
//import Table from './table';

function TableAdd() {

    const [newWord, setNewWord] = useState("");

    const getNewWord = (event) => {
        setNewWord(event.target.value
        );
        console.log(newWord);
    }



    useEffect(() => {
        const arr = localStorage.getItem('word') || []
        setNewWord(JSON.parse(arr))
    }, [])

    useEffect(() => {
        localStorage.setItem('word', JSON.stringify(newWord))
    }, [newWord])


    return (
        <table border="1" className='table__adding'>
        <tr className='table__header__firstrow'>
    <td className='table__header_cell'><input type="text" value={newWord} onChange={getNewWord} placeholder="Введите слово"/></td>
    <td className='table__header_cell'><input type="text" value={''} placeholder="Введите транскрипцию"/></td>
    <td className='table__header_cell'><input type="text" value={''} placeholder="Введите перевод"/></td>
    <td className='table__header_cell'></td>
    <td className='table__header_cell'></td>
    <td className='table__header_cell'><button className='table__button'>Сохранить</button></td>
    </tr>
    </table>
    
    )
}

export default TableAdd;