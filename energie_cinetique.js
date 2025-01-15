let monBouton = document.getElementById("bouton");

monBouton.addEventListener("click", function () {
    let entree_masse = document.getElementById("entree_masse");
    let masse = entree_masse.value;
    let entree_vitesse = document.getElementById("entree_vitesse");
    let vitesse = entree_vitesse.value;
    let arrondi_case_à_cocher  = document.getElementById("arrondi")
    let case_à_cocher = arrondi_case_à_cocher.checked
    
    let vitesse_en_km = vitesse / 3600 * 1000
    let energie = 1 / 2 * masse * vitesse_en_km * vitesse_en_km
    let energie_arrondi = energie.toFixed(2);


    if(case_à_cocher === true){
        let contenuTitre = "L'objet a une énergie de " + energie_arrondi + " Joules !"  
        let nouvelleDiv = document.createElement("div")
        let nouveauTitre = document.createElement("h1")
        nouveauTitre.textContent = contenuTitre
        nouvelleDiv.appendChild(nouveauTitre)
        let body = document.querySelector("body")
        body.appendChild(nouvelleDiv)
    }else{
        let contenuTitre = "L'objet a une énergie de " + energie + " Joules !"  
        let nouvelleDiv = document.createElement("div")
        let nouveauTitre = document.createElement("h1")
        nouveauTitre.textContent = contenuTitre
        nouvelleDiv.appendChild(nouveauTitre)
        let body = document.querySelector("body")
        body.appendChild(nouvelleDiv)
    }
});
