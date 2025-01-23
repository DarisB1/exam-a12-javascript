function moyenne(tab) {
    let moyen = 0;
    for (let i = 0; i < tab.length; i++) {
        moyen += tab[i] / tab.length
    }
    return moyen
}

console.log(moyenne([4, 6, 8]));
console.log(moyenne([-180, 788, 1000]));
