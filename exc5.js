// Scrivi una funzione power per elevare un numero ad una potenza data:
// 1. Prende due numeri come parametri ( base e exponent ).
// 2. Controlla che effettivamente siano stati passati due numeri. In caso contrario,
// lancia un errore che mostra nel messaggio quale dei parametri non è un
// numero. Se entrambi non sono dei numeri, il messaggio d’errore li mostra
// entrambi. (15 punti)
// 3. Nel caso in cui sia avvenuto un errore, la funzione ritorna null , altrimenti ritorna
// base elevato alla exponent . (2.5 punti)
// 4. Indipendentemente dal successo o dal fallimento, stampa in console un
// messaggio che indica che l'operazione è completa. (2.5 punti)

const power = (base, exponent) => {

    try {
        if (isNaN(base) && isNaN(exponent)) {
            throw new Error(`${base} and ${exponent} are not valid numbers!`)
        } else if (isNaN(base)) {
            throw new Error(`${base} is not a valid number!`)
        } else if (isNaN(exponent)) {
            throw new Error(`${exponent} is not a valid number!`)
        }
        return base ** exponent
    } catch (error) {
        console.error(error); //visto che non si parla di interazioni con l'utente ho stampato a console
        return null;
    } finally {
        console.log('Operation complete');
    }
}

