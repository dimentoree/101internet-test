import './Settings.css';

import { SettingParametrLogo } from '../SettingParametrLogo/SettingParametrLogo';
import { SettingParametrText } from '../SettingParametrText/SettingParametrText';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { DetailsButton } from '../DetailsButton/DetailsButton';

const parametrs = {
    gigabytes: {
        meaning: 30,
        measurement: 'гб'
    },
    minutes: {
        meaning: 500,
        measurement: 'мин'
    },
    price: {
        meaning: 120,
        measurement: 'руб/мес'
    }
}

export const Settings = () => {
    return (
        <div className='tariff-settings'>
            <h2 className='tariff-settings__title'>Свой тариф</h2>
            <SettingParametrLogo />
            <SettingParametrText 
                meaning = {parametrs.gigabytes.meaning}
                measurement = {parametrs.gigabytes.measurement}
                />
            <SettingParametrText 
                meaning = {parametrs.minutes.meaning}
                measurement = {parametrs.minutes.measurement}
            />
            <SettingParametrText 
                meaning = {parametrs.price.meaning}
                measurement = {parametrs.price.measurement}
            />
            <SocialLinks />
            <DetailsButton />
        </div>
    );
}