function compterMots(chaine) {
	return chaine.split(" ").length
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4
console.log(compterMots("aaaa aaaaa aa 0 0 0 0  0 0 aaaa")); // Résultat attendu : 4