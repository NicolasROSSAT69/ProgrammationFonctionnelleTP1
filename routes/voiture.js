const express = require('express')
const router = express.Router()

/**
 * Fonction pure: 
 * Une fonction sans effet de bord (side effect).
 * S’occupe uniquement de renvoyer une valeur
 * Ne dépend que de ses paramètres d’entrée.
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

// voiture/
router.get('/', function (req, res) {

    let jsonVoiture = [
        { id: 1, libelle: 'Ford', prix: 10000 },
        { id: 20, libelle: 'Mercedes', prix: 20000 },
        { id: 7, libelle: 'Ferrari', prix: 30000 }
    ];

    res.json(jsonVoiture);

})

// voiture/maj
router.get('/maj', function (req, res) {

    let jsonVoiture = [
        { id: 1, libelle: 'Ford', prix: 10000 },
        { id: 20, libelle: 'Mercedes', prix: 20000 },
        { id: 7, libelle: 'Ferrari', prix: 30000 }
    ];

    //Appel de la fonction pure libelleToUpperCase
    res.json(libelleToUpperCase(jsonVoiture));

})

// voiture/min
router.get('/min', function (req, res) {

    let jsonVoiture = [
        { id: 1, libelle: 'Ford', prix: 10000 },
        { id: 20, libelle: 'Mercedes', prix: 20000 },
        { id: 7, libelle: 'Ferrari', prix: 30000 }
    ];

    //Appel de la fonction pure libelleTolowerCase
    res.json(libelleTolowerCase(jsonVoiture));

})

// voiture/filtre/:prix
router.get('/filtre/:prix', function (req, res) {

    let jsonVoiture = [
        { id: 1, libelle: 'Ford', prix: 10000 },
        { id: 20, libelle: 'Mercedes', prix: 20000 },
        { id: 7, libelle: 'Ferrari', prix: 30000 }
    ];

    //Appel de la fonction d’ordre supérieur: filterByPrice
    res.json(filterByPrice(jsonVoiture, req.params.prix));

})

module.exports = router;