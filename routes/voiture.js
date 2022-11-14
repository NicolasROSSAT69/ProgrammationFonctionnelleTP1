const express = require('express')
const router = express.Router()


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

    //Convertion des valeurs en majuscule.
    for (let i = 0; i < json.length; i++) {
        json[i].libelle = json[i].libelle.toUpperCase();
    }

    return json;

}

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

    //Convertion des valeurs en miniscule.
    for (let i = 0; i < json.length; i++) {
        json[i].libelle = json[i].libelle.toLowerCase();
    }

    return json;

}

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

module.exports = router;