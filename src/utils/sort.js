export function sortUpString(list, mainProperty) {

    list.sort((a, b) => {
        if (a[mainProperty].toLowerCase() > b[mainProperty].toLowerCase()) {
            return 1;
        }
        if (a[mainProperty].toLowerCase() < b[mainProperty].toLowerCase()) {
            return -1;
        }
        return 0;
    });
    return list
}

export function sortDownString(list, mainProperty) {

    list.sort((a, b) => {
        if (a[mainProperty].toLowerCase() > b[mainProperty].toLowerCase()) {
            return -1;
        }
        if (a[mainProperty].toLowerCase() < b[mainProperty].toLowerCase()) {
            return 1;
        }
        return 0;
    });
    return list
}

export function sortUpNumber(list, mainProperty) {

    list.sort((a, b) => {
        return a[mainProperty] - b[mainProperty];
    });
    return list
}

export function sortDownNumber(list, mainProperty) {

    list.sort((a, b) => {
        return b[mainProperty] - a[mainProperty];
    });
    return list
}