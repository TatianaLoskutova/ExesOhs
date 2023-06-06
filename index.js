function XO(str) {
    let amountX = ''
    let amount0 = ''

    for (let i = 0; i < str.length ; i++) {
        if (str[i].toLowerCase() === 'x'){
        amountX += str[i]
        } else if (str[i].toLowerCase() === 'o') {
            amount0 += str[i]
        }
    }
    return amountX.length === amount0.length
    }