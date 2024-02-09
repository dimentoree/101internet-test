import './LeftArrowButton.css';

import leftArrow from '../../assets/images/buttons/left_arrow.svg';

export const LeftArrowButton = () => {
    return (
        <button className='parametr-button'>
            <img className='parametr-button__icon' src={leftArrow} alt='Left Button' />
        </button>
    );
}