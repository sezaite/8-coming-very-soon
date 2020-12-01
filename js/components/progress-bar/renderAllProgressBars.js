import { renderProgressBar } from './renderProgressBar.js';
import { isValidProgressBarsList } from './isValidProgressBarsList.js'

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
    if (!isValidProgressBarsList(data)) {
        return false;
    }

    for (let i = 0; i < data.length; i++) {
        const bar = data[i];
        if (!isValidSingleProgressBar(bar)) {
            continue;
        }

        renderProgressBar(bar.selector, bar.title, bar.value);
    }


    const allProgressBars = document.querySelectorAll('.progress-bar');

    window.addEventListener('scroll', () => {
        const screenBottom = innerHeight + scrollY;

        for (let bar of allProgressBars) {
            const barBottom = bar.offsetHeight + bar.offsetTop; //elemento aukstis + elemento atsistumimas nuo virsaus = elemento apacia
            if (screenBottom >= barBottom) {
                bar.classList.add('animate');
            }
        }
    }
    )
    return true;
}
export { renderAllProgressBars }