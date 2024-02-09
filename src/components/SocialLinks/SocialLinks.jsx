import './SocialLinks.css';

import viber_logo from '../../assets/images/media/Viber.svg';
import telegram_logo from '../../assets/images/media/Telegram.svg';
import whatsapp_logo from '../../assets/images/media/WhatsApp.svg';
import youtube_logo from '../../assets/images/media/YouTube.svg';
import vk_logo from '../../assets/images/media/Vk.svg';
import more_logo from '../../assets/images/media/More.svg';

export const SocialLinks = () => {
    return (
        <div className='traffic-settings__social'>
            <p className='traffic-settings__social-text'>Безлимит на:</p>
            <div className='traffic-settings__social-links'>
                <img className='traffic-settings__social-link' src = {viber_logo} alt = 'Viber'/>
                <img className='traffic-settings__social-link' src = {telegram_logo} alt = 'Telegram'/>
                <img className='traffic-settings__social-link' src = {whatsapp_logo} alt = 'WhatsApp'/>
                <img className='traffic-settings__social-link' src = {youtube_logo} alt = 'YouTube'/>
                <img className='traffic-settings__social-link' src = {vk_logo} alt = 'Vk'/>
                <img className='traffic-settings__social-link traffic-settings__social-link_last' src = {more_logo} alt = 'More than 2'/>
            </div>
        </div>
    );
}