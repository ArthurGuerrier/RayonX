let monBouton = document.getElementById("bouton");

monBouton.addEventListener("click", function () {
    let temps = document.getElementById("entree_temps");
    let nbr_temps = temps.value;
    let longueur = document.getElementById("entree_distance");
    let distance = longueur.value;
    let arrondi_case_à_cocher  = document.getElementById("arrondi")
    let case_à_cocher = arrondi_case_à_cocher.checked

    let temps_heure = nbr_temps / 60;
    let vitesse = distance / temps_heure;
    let vitesse_arrondi = vitesse.toFixed(1);

    if(case_à_cocher === true){
        let contenuTitre = "Tu es allé à " + vitesse_arrondi + " km/h en moyenne !"
        let nouvelleDiv = document.createElement("div")
        let nouveauTitre = document.createElement("h1")
        nouveauTitre.textContent = contenuTitre
        nouvelleDiv.appendChild(nouveauTitre)
        let body = document.querySelector("body")
        body.appendChild(nouvelleDiv)
    }else{
        let contenuTitre = "Tu es allé à " + vitesse + " km/h en moyenne !"
        let nouvelleDiv = document.createElement("div")
        let nouveauTitre = document.createElement("h1")
        nouveauTitre.textContent = contenuTitre
        nouvelleDiv.appendChild(nouveauTitre)
        let body = document.querySelector("body")
        body.appendChild(nouvelleDiv)
    }
});
