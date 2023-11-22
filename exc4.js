// Crea una pagina HTML con un <input> di testo, un elemento <button> , un elemento
// <p> con id “ errorMessage ” e un elemento <ul> con id " tasks ".
// Scrivi codice JavaScript che aggiunge un ascoltatore di eventi al <button> che,
// quando cliccato, se l'utente non ha scritto nulla nell’ <input> :
// inserisce all'interno del <p> " errorMessage " un messaggio di errore che dice "Per
// favore, inserisci del testo."; (5 punti)
// Altrimenti, se c’è del testo all’interno dell’ <input> :
// svuota il contenuto del <p> " errorMessage "; (5 punti)
// inserisce all'interno del <ul> " tasks " un nuovo <li> che ha come contenuto ciò
// che è stato inserito dall’utente nell’ <input>; (10 punti)

window.addEventListener('load', () => {

    const button = document.getElementById('btn');
    const input = document.getElementById('input');
    const p = document.getElementById('errorMessage');
    const ul = document.getElementById('tasks');
    button.addEventListener('click', () => {
        if (input.value === '') {
            p.innerText = `Per favore, inserisci del testo.`;
        } else {
            p.innerText = '';
            const li = document.createElement('li');
            li.innerText = input.value;
            ul.appendChild(li);
            //avrei aggiunto anche un input.value = '' (a questa riga) per svuotare l'input ad ogni click    
        }
    })
})