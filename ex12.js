function estPalindromeAvance(chaine) {
    let chaineSplit = chaine.split("");
    let chaineSplitJoin = chaine.split(" ").join("");
    let T = [];
    let result = "";
    for (let i = chaineSplit.length - 1; i > -1; i--) {
        T.push(chaineSplit[i].trim())
        result = T.join("");
        if (chaineSplitJoin == result) {
            return true
        }
    }
    return false
}

console.log(estPalindromeAvance("a man a plan a canal panama")); // Résultat attendu : true
