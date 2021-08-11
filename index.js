function snapCrackle(maxValue) {
    let res = ''
    for (i = 1; i <= maxValue; i++) {
        if (i % 2 !== 0) {
            res += 'Snap'
        } 
        if (i % 5 === 0) {
            res += 'Crackle'
        }
        if (i % 2 === 0 && i % 5 !== 0) {
            res += i
        }
        if (i < maxValue) {
            res += ', '
        }
    }
return res
}

function snapCracklePrime(maxValue) {
    let res = ''
    let ehPrimo
    for (let i = 1; i <= maxValue; i++) {
        ehPrimo = true
        if (i % 2 !== 0) {
            res += 'Snap'
        } 

        if (i % 5 === 0) {
            res += 'Crackle'
        }

        for (divisor = 2; divisor < i; divisor++) {
            if (i % divisor === 0) {
                ehPrimo = false
            }
        }

        if (ehPrimo === true && i !== 1) {
            res += 'Prime'
        }

        if (i % 2 === 0 && i % 5 !== 0 && ehPrimo !== true) {
            res += i
        }

        if (i < maxValue) {
            res += ', '
        }
    }
return res
}

/*
* Pegaaaaaa!
* Consegui!!!
*/