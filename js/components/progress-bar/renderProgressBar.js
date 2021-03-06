import { isValidSingleProgressBar } from './isValidSingleProgressBar.js'

/**
 * Progress bar komponento generavimas
 * @param {string} title Progress bar pavadinimas
 * @param {number} value Progress bar reiksme procentais
 * @param {string} selector css tipo selektorius, akip rasti vieta, kur sugeneruoti turini
 * @returns {boolean} funkcijai tinkamai suveikus, grazinamas `true`, priesingu atveju - `false`
 */
function renderProgressBar(selector, title, value) {
    console.log('rendering...');
    if (!isValidSingleProgressBar({ selector, title, value })) {
        return false;
    }

    const HTML = `<div class="progress-bar">
    <div class="top">
        <div class="label">${title}</div>
        <div class="value">${value}%</div>
    </div>
    <div class="bottom">
        <div class="bar" style="width: ${value}%;">
            <div class="loader"></div>
        </div>
    </div>
</div>`;

    const DOM = document.querySelector(selector);

    if (!DOM) {
        console.error('Error: nerasta nurodyta vieta!');
        return false;
    }

    DOM.insertAdjacentHTML('beforeend', HTML);

    return true;
}

export { renderProgressBar }