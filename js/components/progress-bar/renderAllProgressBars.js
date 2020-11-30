import { renderProgressBar } from './renderProgressBar.js';
import { isValidProgressBarList } from ''./isValidProgressBarList.js';

import { isValidSingleProgressBar } from './isValidSingleProgressBar.js'

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
}

export { renderAllProgressBars }