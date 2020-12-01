function isValidProgressBarsList(list) {
    if (!Array.isArray(list)) {
        console.error('error: turi buti array tipo duom');
        return false;
    }
    if (list.length === 0) {
        console.error('error: array negali buti tuscias');
        return false;
    }
    return true;
}

export { isValidProgressBarsList }