function snapCrackle(maxValue) {
    let res = ''
    for (let i = 0; i < maxValue; i++) {    
        if ((Number.isInteger(i % 5) === true) && i % 2 !== 0) {
            res = res + 'SnapCrackle, '
        } else if (i % 2 !== 0) {
            res = res + 'Snap, '
        } else if (Number.isInteger(i % 5) == true) {
            res = res + 'Crackle, '
        } else {
            res = res + i + ', '
        }
    }

    if (i = maxValue) {    
        if ((Number.isInteger(i % 5) === true) && i % 2 !== 0) {
            res = res + 'SnapCrackle.'
        } else if (i % 2 !== 0) {
            res = res + 'Snap.'
        } else if (Number.isInteger(i % 5) == true) {
            res = res + 'Crackle.'
        } else {
            res = res + i + '.'
        }
    }
    return res
}