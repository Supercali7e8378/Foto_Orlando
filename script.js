// Carrello inizializzato come array vuoto
let carrello = [];
let totale = 0;

// Funzione per aggiungere foto al carrello
function aggiungiAlCarrello(nome, prezzo) {
    carrello.push({ nome, prezzo });
    aggiornaCarrello();
}

// Funzione per aggiornare la visualizzazione del carrello
function aggiornaCarrello() {
    let listaCarrello = document.getElementById("cart-items");
    listaCarrello.innerHTML = ""; // Pulisce il carrello

    carrello.forEach((prodotto) => {
        let listItem = document.createElement("li");
        listItem.textContent = prodotto.nome + " - €" + prodotto.prezzo;
        listaCarrello.appendChild(listItem);
    });

    // Calcola il totale
    totale = carrello.reduce((acc, prodotto) => acc + prodotto.prezzo, 0);
    document.getElementById("total-price").textContent = "Totale: €" + totale;
}

// Funzione per simulare l'acquisto
function acquista() {
    if (carrello.length > 0) {
        alert("Acquisto effettuato con successo! Totale: €" + totale);
        // Resetta il carrello dopo l'acquisto
        carrello = [];
        aggiornaCarrello();
    } else {
        alert("Il carrello è vuoto!");
    }
}

