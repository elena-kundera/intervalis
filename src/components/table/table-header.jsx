import './table.scss';

function TableHeader() {
    return (
        <table border="1" className='table__header'>
        <tr className='table__header__firstrow'>
    <td className='table__header_cell'>Слово</td>
    <td className='table__header_cell'>Транскрипция</td>
    <td className='table__header_cell'>Перевод</td>
    <td className='table__header_cell'>Верно</td>
    <td className='table__header_cell'>Не верно</td>
    <td className='table__header_cell'>Редактировать</td>
    </tr>
    </table>
    
    )
}

export default TableHeader;