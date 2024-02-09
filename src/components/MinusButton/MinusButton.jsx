import './MinusButton.css';

import minus from '../../assets/images/buttons/minus.svg';

export const MinusButton = () => {
    return (
        <button className='parametr-button'>
            <img className='parametr-button__icon' src={minus} alt='Left Button' />
        </button>
    );
}