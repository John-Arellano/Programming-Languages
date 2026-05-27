/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // 1. Definir los valores de los símbolos
    const roman = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let res = 0;
    
    // 2. Iterar sobre el string
    for (let i = 0; i < s.length; i++) {
        let actual = roman[s[i]];
        let siguiente = roman[s[i + 1]];
        
        // Si el actual es menor que el que sigue, restamos
        if (actual < siguiente) {
            res -= actual;
        } else {
            // Si es igual o mayor, sumamos
            res += actual;
        }
    }
    
    return res;
};