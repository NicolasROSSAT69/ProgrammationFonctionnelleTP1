const express = require('express')
const router = express.Router()


//------------SEPARATION DOMAINE PUR------------

/**
 * Ajout notion immutabilité dans le projet
 * ajout variable global jsonVoiture.
*Utilisation de const pour déclarer la variable jsonVoiture car elle ne sera pas modifiée. (Immutable)
*/
const jsonVoiture = [
    { id: 1, libelle: 'Ford', prix: 10000 },
    { id: 20, libelle: 'Mercedes', prix: 20000 },
    { id: 21, libelle: 'Mercedes', prix: 20500 },
    { id: 7, libelle: 'Ferrari', prix: 30000 },
    { id: 8, libelle: 'Ferrari', prix: 40000 }
];

/**
 * Fonction pure: 
 * Une fonction sans effet de bord (side effect).
 * S’occupe uniquement de renvoyer une valeur
 * Ne dépend que de ses paramètres d’entrée.
 * * Cette fonction est aussi idempotente.
 * car elle renvoie toujours la même valeur pour les mêmes paramètres.
 * nous pouvons l'appeler autant de fois que l'on veut le résultat sera toujours le même.
 * @param {*} json 
 * @returns json_format
 */
function libelleToUpperCase(json) {
    return json.map(v => {
        return { ...v, libelle: v.libelle.toUpperCase() };
    });
}

//Fonction composition pure (fonction qui prend en paramètre une fonction et/ou qui renvoie une fonction)
//cette fonction permet de filtrer les voitures selon la marque et le prix.
function filterByMarqueAndPrice(json, marque, prix) {
    const filteredByMarque = filterByMarque(json, marque);
    return filterByPrice(filteredByMarque, prix);
}
console.log(filterByMarqueAndPrice(jsonVoiture, 'Ferrari', 40000))

//Fonction composition impure (fonction qui prend en paramètre une fonction et/ou qui renvoie une fonction)
//cette fonction permet de filtrer les voitures selon la marque et le prix.
const saveToDatabase = (json) => {
    //save the json data to a database
    console.log('Saving json data to the database:', json)
}

const composedFunction = (json, marque, prix) => {
    const filteredJson = filterByMarqueAndPrice(json, marque, prix);
    saveToDatabase(filteredJson);
}
composedFunction(jsonVoiture, 'Ferrari', 40000);


/**
 * Fonction pure:
 * Une fonction sans effet de bord (side effect).
 * S’occupe uniquement de renvoyer une valeur
 * Ne dépend que de ses paramètres d’entrée.
 * Cette fonction est aussi idempotente.
 * car elle renvoie toujours la même valeur pour les mêmes paramètres.
 * nous pouvons l'appeler autant de fois que l'on veut le résultat sera toujours le même.
 * @param {*} json 
 * @returns json_format
 */
function libelleTolowerCase(json) {
    return json.map(v => {
        return { ...v, libelle: v.libelle.toLowerCase() };
    });
}

/**
* Fonctions reprenant l'immutabilité:
* Cette méthode crée une nouvelle liste, tandis que la liste d'origine reste inchangée, donc immutable.
Fonction qui filtre les voitures selon l'année.
@param {*} json
@param {*} annee
@returns json_format
*/
function filterByYear(json, annee) {
    return json.filter(function (voiture) {
        return voiture.annee === annee;
    });
}

/**
* Fonctions reprenant l'immutabilité:
* Cette méthode crée une nouvelle liste, tandis que la liste d'origine reste inchangée, donc immutable.
* Fonction qui filtre les voitures selon la couleur.
@param {*} json
@param {*} couleur
@returns json_format
*/
function filterByColor(json, couleur) {
    return json.filter(function (voiture) {
        return voiture.couleur === couleur;
    });
}

//------------SEPARATION DOMAINE IMPURE------------

/**
 * Fonctions d’ordre supérieur:
* Une fonction qui prend en paramètre une fonction et/ou qui renvoie une fonction.
* @param {*} json
* @param {*} prix
* @returns json_format
*/
function filterByPrice(json, prix) {

    //Filtrer les voitures selon le prix.
    return json.filter(function (voiture) {
        return voiture.prix <= prix;
    });

}

/**
 * Fonction qui filtre les voitures selon la marque.
 * @param {*} json
 * @param {*} marque
 * @returns json_format
*/
function filterByMarque(json, marque) {

    //Filtrer les voitures selon la marque.
    return json.filter(function (voiture) {
        return voiture.libelle === marque;
    });

}

/**
 * Fonctions d’ordre supérieur:
* Une fonction qui prend en paramètre une fonction et/ou qui renvoie une fonction.
* @param {*} json
* @param {*} value
* @param {*} callback
* @returns json_format
*/
function filterByMarqueOrPrice(json, value, callback) {

    //appelle la fonction callback
    return callback(json, value);

}

// voiture/
router.get('/', function (req, res) {

    res.json(jsonVoiture);

})

// voiture/maj
router.get('/maj', function (req, res) {

    //Appel de la fonction pure libelleToUpperCase
    res.json(libelleToUpperCase(jsonVoiture));

})

// voiture/min
router.get('/min', function (req, res) {

    //Appel de la fonction pure libelleTolowerCase
    res.json(libelleTolowerCase(jsonVoiture));

})

// voiture/filtre/:prix
router.get('/filtre/:prix', function (req, res) {

    //Appel de la fonction d’ordre supérieur: filterByPrice
    res.json(filterByPrice(jsonVoiture, req.params.prix));

})

// voiture/filtre/marque/:marque
router.get('/filtre/marque/:marque', function (req, res) {

    //Appel de la fonction d’ordre supérieur: filterByMarqueOrPrice
    res.json(filterByMarqueOrPrice(jsonVoiture, req.params.marque, filterByMarque));

})

// voiture/filtre/prix/:prix
router.get('/filtre/prix/:prix', function (req, res) {

    //Appel de la fonction d’ordre supérieur: filterByMarqueOrPrice
    res.json(filterByMarqueOrPrice(jsonVoiture, req.params.prix, filterByPrice));

})

// voiture/filtre/annee/:annee
router.get('/filtre/annee/:annee', function (req, res) {
    var annee = req.params.annee;
    var filteredCars = filterByYear(json, annee);
    res.json(filteredCars);
});

// voiture/filtre/couleur/:couleur
router.get('/filtre/couleur/:couleur', function (req, res) {
    var couleur = req.params.couleur;
    var filteredCars = filterByColor(json, couleur);
    res.json(filteredCars);
});

module.exports = router;
