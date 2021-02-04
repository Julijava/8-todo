/* import { Todo } from './components/Todo.js';

const randomUzduotys = new Todo('Random uzduotys');
const namuDarbai = new Todo('Namu darbai');


randomUzduotys.add('Sukurti pirma uzduoti');
namuDarbai.add('Susitvarky Serloko projekta');
namuDarbai.add('Susitvarky Serloko projekta');
namuDarbai.add('Susitvarky Serloko projekta');
randomUzduotys.add('Uzmaisyti tesla');
namuDarbai.add('Susitvarky Serloko projekta');
randomUzduotys.add('Nusiskusti');
namuDarbai.add('Susitvarky Serloko projekta');
namuDarbai.add('Susitvarky Serloko projekta');

console.log(randomUzduotys);
console.log(namuDarbai);

randomUzduotys.summary();
namuDarbai.summary();

*/


import { Suo } from './components/Suo.js';


let suo = new Suo('Sargis',"rudas");
suo.extraCollors("baltas pagurklis");
suo.extraCollors("baltos leteneles");
let suo1 = new Suo('pypsius');
suo.summary();




// import { Todo } from './components/Todo.js';

// const blynai = new Todo ('Blynu kepimo');

// blynai.add('Uzmaisyti tesla');
// blynai.add('Ijungti kaitlente');
// blynai.add('Istraukti keptuve');
// blynai.add('Ipilti tesla i keptuve');
// blynai.add('Apversti blynus');
// blynai.add('Isimti blynus');
// blynai.add('Isjungti kaitlente');

// blynai.edit(0, 'Isplauti dubeni ir uzmaisyti tesla');

// blynai.remove(4);
// blynai.taskCompleted(0);
// blynai.taskCompleted(1);
// blynai.taskCompleted(2);


// blynai.summary();

// blynai.print();
// blynai.printCompletedOnly();
// blynai.printNotCompletedOnly();

// console.clear();

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a);

// const aKvadratu = [];
// for ( let i = 0; i < a.length; i++) {
//     aKvadratu.push(a[i] * a[i])
// }
// console.log(aKvadratu);

// const bMap = a.map(n => n * n);
// console.log(bMap);

// const lyginiai = [];
// for ( let i = 0; i < a.length; i++) {
//     if (a[i] % 2 ===0) {
//         lyginiai.push(a[i]);
//     }
// }
// console.log(lyginiai);

// const cFilter = a.filter(n => n%2===0);
// console.log(cFilter);

// const lyginiuKvadratai = [];
// for ( let i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//         lyginiuKvadratai.push(a[i] * a[i]);
//     }
// }
// console.log(lyginiuKvadratai);

// const dMapFilter = a.filter(n => n%2===0).map(n => n * n);
// console.log(dMapFilter);




