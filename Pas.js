let monBouton = document.getElementById("bouton");
monBouton.addEventListener("click", function () {
    let pas = document.getElementById("entree_nombre_pas");
    let nbr_pas = pas.value;
    let longueur = document.getElementById("entree_distance");
    let distance = longueur.value;
    let nbr_pas_km = nbr_pas * 10;
    nbr_pas_distance = nbr_pas_km * distance;
    let arrondi_pas = Math.round(nbr_pas_distance);
    let contenuTitre = "Tu as fait " + arrondi_pas + " pas sur " + distance + " km !"
    let nouvelleDiv = document.createElement("div")
    let nouveauTitre = document.createElement("h1")
    nouveauTitre.textContent = contenuTitre
    nouvelleDiv.appendChild(nouveauTitre)
    let body = document.querySelector("body")
    body.appendChild(nouvelleDiv)
});