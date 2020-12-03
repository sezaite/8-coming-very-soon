function isValidSocialItem(itemObject) {
    if (typeof itemObject !== 'object') {
        console.error('Error: social elementas turi buti objektas');
        return false;
    }
    if (typeof itemObject.link !== 'string' || itemObject.link === '') {
        console.error('Error: linkas elementas turi buti string');
        return false;
    }
    if (typeof itemObject.icon !== 'string' || itemObject.icon === '') {
        console.error('Error: ikonos elementas turi buti string');
        return false;
    }
    return true;
}

export { isValidSocialItem }