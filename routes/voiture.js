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

module.exports = router;