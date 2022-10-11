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
    result = json.map(v => {
        v.libelle = v.libelle.toUpperCase();
        return v;
    });

    return result;

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
    result = json.map(v => {
        v.libelle = v.libelle.toLowerCase();
        return v;
    });

    return result;

}

// voiture/
router.get('/', function (req, res) {

    let jsonVoiture = [
        { id: 1, libelle: 'Ford' },
        { id: 20, libelle: 'Mercedes' },
        { id: 7, libelle: 'Ferrari' }
    ];

    res.json(jsonVoiture);

})

// voiture/maj
router.get('/maj', function (req, res) {

    let jsonVoiture = [
        { id: 1, libelle: 'Ford' },
        { id: 20, libelle: 'Mercedes' },
        { id: 7, libelle: 'Ferrari' }
    ];

    //Appel de la fonction pure libelleToUpperCase
    res.json(libelleToUpperCase(jsonVoiture));

})

// voiture/min
router.get('/min', function (req, res) {

    let jsonVoiture = [
        { id: 1, libelle: 'Ford' },
        { id: 20, libelle: 'Mercedes' },
        { id: 7, libelle: 'Ferrari' }
    ];

    //Appel de la fonction pure libelleTolowerCase
    res.json(libelleTolowerCase(jsonVoiture));

})

module.exports = router;