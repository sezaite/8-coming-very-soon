import { isInputValid } from './isInputValid.js'

function renderSocials(data) {
    if (!isInputValid(data)) {
        return false;
    };

    const socialsDOM = document.querySelector('footer > .row');
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (typeof item !== 'object') {
            continue;
        }
        if (typeof item.link !== 'string' || item.link === '') {
            continue
        }
        if (typeof item.icon !== 'string' || item.icon === '') {
            continue
        }

        HTML += `<a href="${item.link}" target="_blank" class="fa fa-${item.icon}" aria-hidden="true"></a>`;
    }

    if (HTML === '') {
        console.error('Error: npavyko sugeneruoti social ikonu / nuorodu');
        return false;
    }
    socialsDOM.innerHTML = HTML;
    return true;
}

export { renderSocials }