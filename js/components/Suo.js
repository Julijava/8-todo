class Suo {
    constructor(vardas, spalva) {
        this.name = vardas;
        this.colors = [];  // cia list, sarasas
        this.colors.push(spalva);
     }
extraCollors(papildomosSpalvos){
    this.colors.push(papildomosSpalvos);
}
    summary() {
        const intro = `Hello, I am ${this.name} and my fur is ${this.colors}.`;
        console.log(intro);
            }
    }
export { Suo }