/**
 * import / export
 */
import { showText } from "./script2.js";


const divisibleBy10 = (numar) => {
  console.log("Parametru:", numar);

  console.log("Restul impartirii:", numar % 10);

  console.log("Comparatie:", numar % 10 === 0);

  // % - modulo, restul impartirii.
  // 10 % 2 = 0
  // 2 === "2"

  // 0 - number
  // 1 === 0 -> false
  // 0 === 0 -> true
  return numar % 10 === 0;
};

const a = divisibleBy10(78);
console.log("a:", a);

const tellFortune = (numarCopii, numePartener, locatie, profesie) => {
  return `Vei fi un ${profesie} in ${locatie}, casatorit cu ${numePartener} si vei avea ${numarCopii} copii.`;
};

const rezultat = tellFortune(3, "Maria", "Paris", "Web developer");

console.log(rezultat);

const getDayByNumberV1 = (number) => {
  if (number === 1) {
    return "Luni";
  } else if (number === 2) {
    return "Marti";
  } else if (number === 3) {
    return "Miercuri";
  } else if (number === 4) {
    return "Joi";
  } else if (number === 5) {
    return "Vineri";
  } else if (number === 6) {
    return "Sambata";
  } else if (number === 7) {
    return "Duminica";
  } else {
    return "Invalid number";
  }
};

console.log("rezultat functie v1: ", getDayByNumberV1(1))

const getDayByNumberV2 = (number) => {
  switch(number){
    case 1:
      return "Luni";
    case 2:
      return "Marti";
    case 3:
      return "Miercuri";
    case 4:
      return "Joi";
    case 5:
      return "Vineri";
    case 6:
      return "Sambata";
    case 7:
      return "Duminica"
    default:
      return "Invalid number";
  }
}

console.log("rezultat functie v2: ", getDayByNumberV2(1));

showText("Hello! Sunt un parametru din script.js")