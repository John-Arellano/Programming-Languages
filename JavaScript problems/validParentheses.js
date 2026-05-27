/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    // 1. Si la cadena tiene longitud impar, no puede ser válida
    if (s.length % 2 !== 0) return false;
    
    let stack = [];
    
    // 2. Mapeo de paréntesis de cierre a sus respectivos de apertura
    let mapa = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // 3. Recorremos la cadena
    for (let i = 0; i < s.length; i++) {
        let caracter = s[i];
        
        // Si es un paréntesis de cierre...
        if (mapa[caracter]) {
            // Sacamos el último elemento de la pila (o usamos un valor falso si está vacía)
            let topElement = stack.pop();
            
            // Si el elemento superior no coincide con el par necesario, es falso
            if (topElement !== mapa[caracter]) {
                return false;
            }
        } else {
            // Si es un paréntesis de apertura, lo metemos a la pila
            stack.push(caracter);
        }
    }
    
    // 4. Si la pila está vacía, todos los paréntesis se cerraron correctamente
    return stack.length === 0;
    
};