import './UserTextGuide.css';

export const UserTextGuide = () => {
    return (
        <div className='tariff__guide'>
            <p className='tariff__guide-text'>
                Используйте кнопки 
                "<strong className='tariff__guide-text_bold'>&lt;/&gt;</strong>" и 
                “<strong className='tariff__guide-text_bold'>+/-</strong>”, чтобы найти подходящий тариф.<br />
                Меняйте операторов, выбирайте значения гигабайт, минут и абонплаты.
                Используйте "<strong className='tariff__guide-text_bold'>зафиксировать</strong>", чтобы этот параметр не менялся.<br />
                Жмите “<strong className='tariff__guide-text_bold'>Подробнее</strong>”, чтобы увидеть детали и подключить тариф
            </p>
        </div>
    );
}