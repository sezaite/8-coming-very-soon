function isInputValid(data) {
    if (!Array.osArray(data)) {
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