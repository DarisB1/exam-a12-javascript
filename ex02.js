function greetings(isStudent) {
	if(isStudent){
        return "Bienvenue cher élève"
    }else {
        return "Bienvenue cher parent"
    }
}

console.log(greetings(true));
console.log(greetings(false));