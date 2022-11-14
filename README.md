# ProgrammationFonctionnelleTP1

Illustrer les concepts suivants dans un exemple de code source de votre choix :

- Fonctions d’ordre supérieur Date rendu max 
- Fonctions pures 
- Idempotence
- Immutabilité 
- Composition de fonctions (pures et impures) 
- Séparation entre domaines pur et impurs

- Indiquer en commentaire / documentation où les concepts sont illustrés dans le code


## Fonctions d’ordre supérieur

Les fonctions d'ordre supérieur sont des fonctions qui prennent en paramètre une autre fonction ou qui retournent une fonction.

Dans le projet elles se trouvents dans le fichier routes/voiture.js
Les fonction concernées sont :

- filterByPrice
- filterByMarque
- filterByMarqueOrPrice

## Fonctions pures

Les fonctions pures sont des fonctions qui ne modifient pas leurs paramètres et qui retournent toujours la même valeur pour les mêmes paramètres.

Dans le projet elles se trouvent dans le fichier routes/voiture.js

Les fonctions concernées sont :

- libelleToUpperCase
- libelleTolowerCase

## Idempotence

Une fonction est idempotente si elle peut être appelée plusieurs fois sans changer le résultat.

Dans le projet elles se trouvent dans le fichier routes/voiture.js

Les fonctions concernées sont :

- libelleToUpperCase
- libelleTolowerCase
