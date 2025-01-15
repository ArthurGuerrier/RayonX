let monBouton = document.getElementById("bouton");
monBouton.addEventListener("click", function () {

    let diametre = document.getElementById("entree_diametre");
    let diametre_roue = diametre.value;
    let longueur = document.getElementById("entree_distance");
    let distance = longueur.value;
    let arrondi_case_à_cocher  = document.getElementById("arrondi")
    let case_à_cocher = arrondi_case_à_cocher.checked

    //calcul distance en m
    let distance_en_m = distance * 1000


    //calcul du perimètre de la roue
    let perimètre_roue = diametre_roue * Math.PI;
    let perimètre_roue_en_m = perimètre_roue / 100;
    
    //calcul du nombre de tours de roues 
    let tour_de_roue = distance_en_m / perimètre_roue_en_m
    let arrondi = Math. round(tour_de_roue);

    if(case_à_cocher === true){
        let contenuTitre = "Tu as fait " + arrondi + " tours de roue sur " + distance + " km !"
        let nouvelleDiv = document.createElement("div")
        let nouveauTitre = document.createElement("h1")
        nouveauTitre.textContent = contenuTitre
        nouvelleDiv.appendChild(nouveauTitre)
        let body = document.querySelector("body")
        body.appendChild(nouvelleDiv)
    }else{
        let contenuTitre = "Tu as fait " + tour_de_roue + " tours de roue sur " + distance + " km !"
        let nouvelleDiv = document.createElement("div")
        let nouveauTitre = document.createElement("h1")
        nouveauTitre.textContent = contenuTitre
        nouvelleDiv.appendChild(nouveauTitre)
        let body = document.querySelector("body")
        body.appendChild(nouvelleDiv)
    }
});