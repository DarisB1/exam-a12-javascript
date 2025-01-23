function compterVoyelles(chaine) {
	let chaineFilter = chaine.split("").filter((letter) => letter == "a" || letter == "e" ||letter == "i" ||letter == "o" ||letter == "u" ||letter == "y")
    return chaineFilter.length
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3
console.log(compterVoyelles("salut mec")); // Résultat attendu : 3
console.log(compterVoyelles("aeiouy")); // Résultat attendu : 6
