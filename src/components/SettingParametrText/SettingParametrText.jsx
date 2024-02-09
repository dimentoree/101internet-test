import './SettingParametrText.css';

import { MinusButton } from '../MinusButton/MinusButton';
import { PlusButton } from '../PlusButton/PlusButton';
import { FixedCheckbox } from '../FixedCheckbox/FixedCheckbox';

export const SettingParametrText = (props) => {
    return (
        <div className='tariff-settings__parametr'>
            <div className='tariff-settings__parametr-container'>
                <MinusButton />

                <p className='tariff-settings__meaning'>{props?.meaning}
                    <span className='tariff-settings__measurement'>{props?.measurement}</span>
                </p>

                <PlusButton />
            </div>

            <FixedCheckbox />
        </div>
    );
}