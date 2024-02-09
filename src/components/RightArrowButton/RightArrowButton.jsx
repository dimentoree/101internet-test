import './RightArrowButton.css';

import rightArrow from '../../assets/images/buttons/right_arrow.svg';

export const RightArrowButton = () => {
    return (
        <button className='parametr-button'>
            <img className='parametr-button__icon' src={rightArrow} alt='Right Button'/>
        </button>
    );
}