function filtrerNegatifs(tab) {
    let T = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] >= 0) {
            T.push(tab[i])
        }
    }
    return T
  }
  
  console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]
  console.log(filtrerNegatifs([-1000, -78, -58, 9999])); // Résultat attendu : [4, 6]