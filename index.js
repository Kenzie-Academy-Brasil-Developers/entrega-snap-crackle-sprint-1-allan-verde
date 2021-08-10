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

function snapCracklePrime(maxValue) {
    let res = ''
    let i = 1
    for (; i < maxValue; i++) {
        ehPrimo = false
        for (let divisor = 2; divisor < i; divisor++) {
            if (i % divisor !== 0) {
                ehPrimo = true
                break
            }
        }
        if (Number.isInteger(i % 5) === true && i % 2 !== 0 && ehPrimo === true && i !== 1, 2) {
            res = res + 'SnapcracklePrime, '
        } else if ((Number.isInteger(i % 5) === true) && i % 2 !== 0) {
            res = res + 'SnapCrackle, '
        } else if (i % 2 !== 0 && ehPrimo === true) {
            res = res + 'SnapPrime, '
        } else if (i % 2 !== 0) {
            res = res + 'Snap, '
        } else if (Number.isInteger(i % 5) === true && ehPrimo === true) {
            res + res + 'CracklePrime, '
        } else if (Number.isInteger(i % 5) === true) {
            res = res + 'Crackle, '
        } else if (ehPrimo === true) {
            res = res + 'Prime, '
        } else {
            res = res + i + ', '
        }
    }

    if (i = maxValue) {    
        if ((Number.isInteger(i % 5) === true) && i % 2 !==0 && ehPrimo === true && i !== 1 && i !== 2) {
            res = res + 'SnapcracklePrime.'
        } else if ((Number.isInteger(i % 5) === true) && (i % 2 !== 0) && i !== 1) {
            res = res + 'SnapCrackle.'
        } else if (i % 2 !== 0 && ehPrimo === true) {
            res = res + 'SnapPrime.'
        } else if (i % 2 !== 0) {
            res = res + 'Snap.'
        } else if (Number.isInteger(i % 5) === true && ehPrimo === true) {
            res + res + 'CracklePrime.'
        } else if (Number.isInteger(i % 5) === true) {
            res = res + 'Crackle.'
        } else if (ehPrimo === true) {
            res = res + 'Prime.'
        } else {
            res = res + i + '.'
        }
    }
    return res
}