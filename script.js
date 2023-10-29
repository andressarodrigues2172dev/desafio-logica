let hero = "Spider-Man"
let xp = 5.500
let nivelXpHeroi ;

if (xp < 1000) {
    nivelXpHeroi = "Ferro";
} else if (xp <= 2000) {
    nivelXpHeroivelDoHeroi = "Bronze";
} else if (xp <= 5000) {
    nivelXpHeroi = "Prata";
} else if (xp <= 7000) {
    nivelXpHeroi = "Ouro";
} else if (xp <= 8000) {
    nivelXpHeroi = "Platina";
} else if (xp <= 9000) {
    nivelXpHeroi = "Ascendente";
} else if (xp <= 10000) {
    nivelXpHeroi = "Imortal";
} else {
    nivelXpHeroi = "Radiante";
}


console.log("O Herói de nome " + hero + "está no nível de " + nivelXpHeroi  )
