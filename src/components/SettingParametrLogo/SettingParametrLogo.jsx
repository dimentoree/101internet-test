import './SettingParametrLogo.css';

import beeline_logo from '../../assets/images/providers/Beeline.svg';

import { LeftArrowButton } from '../LeftArrowButton/LeftArrowButton';
import { RightArrowButton } from '../RightArrowButton/RightArrowButton';
import { FixedCheckbox } from '../FixedCheckbox/FixedCheckbox';

export const SettingParametrLogo = () => {
    return (
        <div className='tariff-settings__parametr'>
            <div className='tariff-settings__parametr-container'>
                <LeftArrowButton />

                <img src = {beeline_logo} alt = 'Beeline'/>

                <RightArrowButton />
            </div>

            <FixedCheckbox />
        </div>
    );
}