const users = ['pepe','maria','erika','juan','fran','josefa','ale','jose'];

//const [pepe, maria, erika] = users;
//const [pepe, maria, erika, , fran] = users;
const [pepe, maria, erika, , fran, ...resto] = users;

//console.log(pepe, maria, erika);
//console.log(pepe, maria, erika, fran);
console.log(pepe, maria, erika, fran, ...resto);