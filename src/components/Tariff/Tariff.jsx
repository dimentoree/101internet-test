import './Tariff.css';

import { UserTextGuide } from '../UserTextGuide/UserTextGuide';
import { Settings } from '../Settings/Settings';

export const Tariff = () => {
    return (
        <main>
            <section className='tariff'>
                <div className='tariff__container'>
                    <h3 className='tariff__title'>Выберите свой тариф</h3>

                    <div className='tariff__stripe'></div>

                    <UserTextGuide />
                    <Settings />
                </div>
            </section>
        </main>
    );
}