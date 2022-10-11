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

    result = json.map(v => {
        v.libelle = v.libelle.toUpperCase();
        return v;
    });

    return result;

}

// voiture/all
router.get('/maj', function (req, res) {

    let jsonVoiture = [
        { id: 1, libelle: 'Ford' },
        { id: 20, libelle: 'Mercedes' },
        { id: 7, libelle: 'Ferrari' }
    ];

    //Appel de la fonction pure libelleToUpperCase
    res.json(libelleToUpperCase(jsonVoiture));

})

module.exports = router;