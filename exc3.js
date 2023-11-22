// Dato il seguente oggetto che rappresenta un libro, esegui i compiti sottostanti:

const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

// 1. Aggiungi una nuova proprietà rating all'oggetto libro, che rappresenta il rating
// del libro, e inizializzalo a 6 .
// 2. Aggiungi un metodo increaseRating che accetta come argomento un valore
// numerico e che incrementa il rating del libro del valore passato alla funzione. (10
// punti)
// Il nuovo rating risultante, non può superare 10. (2.5 punti)
// 3. Rimuovi la proprietà year dall'oggetto libro. (2.5 punti)
// 4. Stampa in console ogni proprietà dell'oggetto libro in questo formato: "[chiave]:
// [valore]" . (5 punti)

book.rating = 6;
book.increaseRating = function (extraRating) {
    this.rating += Number(extraRating);
    if (this.rating >= 10) {
        this.rating = 10;
    }
}
delete book.year;
const keys = Object.keys(book);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(`${key}: ${book[key]}`);
}