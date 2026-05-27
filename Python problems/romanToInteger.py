class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """

        # 1. Definir los valores de los símbolos romanos
        roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        
        res = 0
        
        # 2. Iterar sobre la cadena
        for i in range(len(s)):
            # Si el valor actual es menor que el siguiente, se resta (ej. IV = -1 + 5)
            if i + 1 < len(s) and roman[s[i]] < roman[s[i + 1]]:
                res -= roman[s[i]]
            # De lo contrario, se suma
            else:
                res += roman[s[i]]
                
        return res