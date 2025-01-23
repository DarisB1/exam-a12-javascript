function doublons(tab) {
    let T = [];
	for (let i = 0; i < tab.length; i++) {
        let result = tab[i] * 2;
        T.push(result)
    }
    return T
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]
console.log(doublons([8, 10, 50])); // Résultat attendu : [2, 4, 6]
console.log(doublons([-10, 7, 85])); // Résultat attendu : [2, 4, 6]