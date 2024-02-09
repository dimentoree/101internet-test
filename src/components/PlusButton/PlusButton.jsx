import './PlusButton.css';

import plus from '../../assets/images/buttons/plus.svg';

export const PlusButton = () => {
    return (
        <button className='parametr-button'>
            <img className='parametr-button__icon' src={plus} alt='Left Button' />
        </button>
    );
}