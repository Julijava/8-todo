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

/*
import { Suo } from './components/Todo.js';

const vardas = new Suo('Sargis');
const color = new Suo('Brown');

vardas.summary();
color.summary();
*/


import { Todo } from './components/Todo.js';

const blynai = new Todo ('Blynu kepimo');

blynai.add('Uzmaisyti tesla');
blynai.add('Ijungti kaitlente');
blynai.add('Istraukti keptuve');
blynai.add('Ipilti tesla i keptuve');
blynai.add('Apversti blynus');
blynai.add('Isimti blynus');
blynai.add('Isjungti kaitlente');

blynai.edit(0, 'Isplauti dubeni ir uzmaisyti tesla');

blynai.remove(4);
blynai.taskCompleted(0);
blynai.taskCompleted(1);
blynai.taskCompleted(2);


blynai.summary();

blynai.print();
blynai.printCompletedOnly();
blynai.printNotCompletedOnly();




