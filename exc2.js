// Scrivi una funzione JavaScript che:
// 1. Accetta un array di stringhe come argomento.
// 2. Calcola la concatenazione di tutte le stringhe che iniziano con la lettera "A" o "a".
// (10 punti)
// 3. Se la lunghezza della stringa concatenata supera i 10 caratteri, troncala a 10
// caratteri e restituiscila. (5 punti)
// 4. Se il ciclo si completa senza che la stringa superi i 10 caratteri, restituisci la
// stringa concatenata.


const stringConnector = (strings)=>{
    const filteredStrings = strings.filter((string)=> string[0].toLowerCase() === 'a') //Filtering for strings that begin with a or A
    let compositeString = '';
    filteredStrings.forEach(string => {
       compositeString += string;
       if(compositeString.length > 10 ){
        compositeString = compositeString.substring(0,10)
       }
    });
    return compositeString
}

