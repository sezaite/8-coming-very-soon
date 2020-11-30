import { progressBarData } from "../../data/progressBarData";

function isValidSingleProgressBar(progressBar) {
    if (typeof progressBar !== 'object') {
        console.error('Error: turi buti objektas');
        return false;
    } if (!progressBar.selector ||
        typeof progressBar.selector !== 'string' ||
        progressBar.selector === '') {

        console.error('Error: selector parametras turi buti ne tuscias tekstas');
        return false;
    }
    if (!progressBar.title ||
        typeof progressBar.title !== 'string' ||
        progressBar.title === '') {

        console.error('Error: title parametras turi buti ne tuscias tekstas');
        return false;
    }
    if (!progressBar.value ||
        typeof progressBar.value !== 'number' ||
        progressBar.value < 0 || progressBar.value > 100 || progressBar.value % 1 !== 0) {

        console.error('Error: value parametras turi buti sveikasis skaicius intervale nuo 0 iki 100');
        return false;
    }
    return true;
}

export { isValidSingleProgressBar }