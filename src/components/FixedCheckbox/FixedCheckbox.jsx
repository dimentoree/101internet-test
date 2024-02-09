import './FixedCheckbox.css';

export const FixedCheckbox = () => {
    return (
        <label className='checkbox'>
            <input className='checkbox__input' type='checkbox' />
            <div className='checkbox__state'>
                <div class="checkbox__control">
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='checkbox__icon'
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.89983 11.6863L11.33 15.2301L17.9665 7.64779C18.3446 7.21446 19.003 7.17071 19.4363 7.54883C19.8686 7.928 19.9123 8.58633 19.5332 9.01967L12.2415 17.352C12.0363 17.5874 11.7477 17.7082 11.4582 17.7082C11.229 17.7082 10.9998 17.6332 10.8082 17.4801L5.59879 13.3134C5.14983 12.954 5.07691 12.2978 5.43629 11.8488C5.79462 11.3999 6.45191 11.327 6.89983 11.6863ZM23.9583 25H1.04167C0.466667 25 0 24.5333 0 23.9583V1.04167C0 0.466667 0.466667 0 1.04167 0H23.9583C24.5333 0 25 0.466667 25 1.04167V23.9583C25 24.5333 24.5333 25 23.9583 25Z"
                            fill="none" />
                    </svg>
                </div>
                <p class="checkbox__title">Зафиксировать</p>
            </div>
        </label>
    );
}