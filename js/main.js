import { Todo } from './components/Todo.js';

const randomUzduotys = new Todo('Random uzduotys');
const namuDarbai = new Todo('Namu darbai');

randomUzduotys.add('Sukurti pirma uzduoti');
namuDarbai.add('Susitvarkyti Serloko projekta');

randomUzduotys.add('Uzmaisyti tesla');
randomUzduotys.add('Nusiskusti');

console.log(randomUzduotys);
console.log(namuDarbai);

randomUzduotys.summary();
namuDarbai.summary();













