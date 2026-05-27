/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

      if (!strs.length) return "";

    // 1. Tomamos la primera palabra como base para comparar
    let primeraPalabra = strs[0];

    // 2. Recorremos cada letra de esa primera palabra (columna por columna)
    for (let i = 0; i < primeraPalabra.length; i++) {
        let letraActual = primeraPalabra[i];

        // 3. Revisamos esa misma posición en todas las demás palabras
        for (let j = 1; j < strs.length; j++) {
            // Si la otra palabra es más corta o tiene una letra distinta...
            if (i === strs[j].length || strs[j][i] !== letraActual) {
                // ...cortamos hasta donde llegamos
                return primeraPalabra.substring(0, i);
            }
        }
    }

    return primeraPalabra;
    
};