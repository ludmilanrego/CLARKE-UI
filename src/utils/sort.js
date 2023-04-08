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

export function sortListByColumn(choosedColumn, sortList, setSortList, supplierList, setSupplierList) {
    const resetSort = {
        name: false,
        origin_state: false,
        cost_per: false,
        total_costumers: false,
        costumers_score: false
    }

    setSortList({ ...resetSort, [choosedColumn]: !sortList[choosedColumn] })

    let localSupplierList = [...supplierList]

    if (choosedColumn === "name" || choosedColumn === "origin_state") {
        localSupplierList = sortList[choosedColumn] ? sortUpString(localSupplierList, choosedColumn) : sortDownString(localSupplierList, choosedColumn)
    } else {
        localSupplierList = sortList[choosedColumn] ? sortUpNumber(localSupplierList, choosedColumn) : sortDownNumber(localSupplierList, choosedColumn)
    }
    setSupplierList(localSupplierList)
}

export function sortListByItem(choosedItem, supplierList, setSupplierList, setShowSortList) {

    let localSupplierList = [...supplierList]

    if (choosedItem === "name" || choosedItem === "origin_state") {
        localSupplierList = sortUpString(localSupplierList, choosedItem)
    } else if (choosedItem === "cost_per_kwh") {
        localSupplierList = sortUpNumber(localSupplierList, choosedItem)
    }
    else {
        localSupplierList = sortDownNumber(localSupplierList, choosedItem)
    }
    setShowSortList(false)
    setSupplierList(localSupplierList)

}
