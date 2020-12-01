import { renderProgressBar } from './renderProgressBar.js';
import { isValidProgressBarList } from './isValidProgressBarList.js'

import { isValidSingleProgressBar } from './isValidSingleProgressBar.js'
/**
 * 
 * @param {Object[]} data 
* @param {string} data[].selector Progress bar pavadinimas
 * @param {number} data[].value Progress bar reiksme procentais
 * @param {string} data[].selector css tipo selektorius, akip rasti vieta, kur sugeneruoti turini
 * @returns {boolean} funkcijai tinkamai suveikus, grazinamas `true`, priesingu atveju - `false`
 */
function renderAllProgressBars(data) {
    if (!isValidProgressBarList(data)) {
        return false;
    }

    for (let i = 0; i < data.length; i++) {
        const bar = data[i];
        if (!isValidSingleProgressBar(bar)) {
            continue;
        }

        renderProgressBar(bar.selector, bar.title, bar.value);
    } return true;
}

export { renderAllProgressBars }