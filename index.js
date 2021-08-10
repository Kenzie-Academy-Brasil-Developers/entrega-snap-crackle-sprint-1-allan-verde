function snapCrackle(maxValue) {
    for (let index = 1; index <= maxValue; index++) {
        let element = ""
        if (element % 2 !== 0 && element % 5 == 0) {
            element += "SnapCrackle"
        } else if (index % 2 !== 0) {
            element +="Snap"
        } else if (index % 5 == 0) {
            element += "Crackle"
        } else {
            element += index
        }
    }
    return element
}
snapCrackle(12)