// Dato il seguente oggetto annidato che rappresenta un team di sviluppatori, esegui i
// compiti sottostanti:

const devTeam = {
    lead: {
        name: "Alice",
        skills: ["JavaScript", "React", "Node.js"]
    },
    testers: [
        { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
        { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] }
    ],
    projectName: "WebApp"
};

// 1. In un commento, scrivi quanti oggetti l’espressione soprastante ha inserito in
// memoria ed elencali. (2.5 punti)
// 2. Crea una variabile chiamata teamLead che faccia riferimento alla proprietà lead
// dell'oggetto devTeam . Aggiungi "GraphQL" alle skills di teamLead .
// 3. Crea una copia dell'oggetto devTeam e memorizzala in una nuova variabile
// chiamata devTeamCopy . Non puoi usare la funzione integrata structuredClone . Poi,
// cambia la proprietà projectName di devTeamCopy in "MobileApp". (2.5 punti)
// 4. Costruisci una funzione che crea e restituisce un oggetto tester a partire dal
// parametro name (stringa). Durante la creazione dell’oggetto, la funzione
// dovrebbe anche assegnare un array skills con tre stringhe casuali tra
// "JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django",
// "PostgreSQL". (5 punti)
// Usa questa funzione per aggiungere un nuovo tester a devTeamCopy . (2.5 punti)
// 5. In un commento, scrivi quanti oggetti sono stati creati in memoria oltre a quelli
// iniziali, e giustifica la tua risposta. (2.5 punti)


// Punto 1: 
// Sono stati inseriti in memoria i seguenti oggetti: devTeam, lead e i due oggetti dentro l'array testers che hanno proprietà name e skills, più i due array skills e l'array testers (che tecnicamente sono degli oggetti, quantomeno in termini di type). Il totale è 8. 

const teamLead = devTeam.lead;
teamLead.skills.push('GraphQL');
const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
devTeamCopy.projectName = "MobileApp";
const createTester = (testerName) => {
    const tester = {
        name: testerName
    };
    const totalSkills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django", "PostgreSQL"]
    const randomSkills = [];
    for (i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * (totalSkills.length)); // da Math. floor( Math. random() * ((totalSkills.length - 1) - min + 1) + min ) 
        randomSkills.push(totalSkills[randomIndex]);
    }
    tester.skills = randomSkills;

    return tester
}
devTeamCopy.testers.push(createTester('Percy'))


// Punto 5:
// Gli oggetti che sono effettivamente stati aggiunti sono :
// - l'oggetto devTeamCopy.
// - tutti gli oggetti che devTeamCopy contiene, quindi: lead, l'array testers, i tre oggetti tester al suo interno (ne abbiamo aggiunto uno all'array con la funzione createTester) e i loro rispettivi array skills.
// Abbiamo aggiunto in totale 10 elementi, infatti il nuovo oggetto devTeamCopy rispetto a devTeam contiene solo due oggetti in più: un terzo oggetto tester e il suo rispettivo array di skills.
// Questo è vero perché al momento della definizione di devTeamCopy (riga 38) abbiamo creato un'effettiva "deep copy" dell'oggetto iniziale (invece che una reference all'oggetto di partenza come accade a riga 36 con la variabile teamLead e l'oggetto lead). Di conseguenza, tutte le modifiche che sono state apportate a devTeamCopy non influenzano devTeam perché sono due oggetti distinti. 