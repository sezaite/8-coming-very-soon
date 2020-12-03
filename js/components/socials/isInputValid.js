function isInputValid(selector, data) {
    if (typeof selector !== 'string') {
        console.error('Error: selektorius turi buti tekstinio tipo');
        return false;
    }
    if (selector === '') {
        console.error('Error: selektorius negali buti tuscias');
        return false;
    }
    if (!Array.isArray(data)) {
        console.error('Error: social ikonoms generuoti reikia array tipo duomenu');
        return false;
    }
    if (data.length === 0) {
        console.error('Error: reikia ne tuscio duomenu saraso');
        return false;
    }
    return true;
}

export { isInputValid }