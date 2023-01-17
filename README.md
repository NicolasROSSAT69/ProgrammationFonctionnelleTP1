# Bienvenue sur ce projet ProgrammationFonctionnelleTP1

Ce projet est un exemple de création d'un routeur à l'aide de la bibliothèque Express.js en JavaScript. Il démontre également l'utilisation de l'immuabilité et des fonctions pures.

## Description du projet

Le projet contient une variable globale jsonCar, qui est un tableau d'objets de voiture. La variable est définie comme const pour indiquer qu'elle est immuable.

Le projet contient également plusieurs fonctions pures, telles que libelleToUpperCase et libelleTolowerCase, qui prennent un objet JSON en entrée et renvoient une version modifiée de l'objet JSON sans aucun effet secondaire.

## Utilisation

Pour utiliser ce projet, vous devez avoir installé Node.js et npm sur votre ordinateur. Après avoir cloné ou téléchargé le projet, exécutez la commande npm install pour installer les dépendances nécessaires. Ensuite, vous pouvez exécuter node index.js pour démarrer le serveur.

## Illustrations des concepts suivants dans un exemple de code

- Fonctions d’ordre supérieur Date rendu max
- Fonctions pures
- Idempotence
- Immutabilité
- Composition de fonctions (purs et impurs)
- Séparation entre domaines purs et impurs

- Indiquer en commentaire / documentation où les concepts sont illustrés dans le code

### Fonctions d’ordre supérieur

Les fonctions d'ordre supérieur sont des fonctions qui prennent en paramètre une autre fonction ou qui retournent une fonction.

Dans le projet elles se trouvents dans le fichier routes/voiture.js
Les fonction concernées sont :

- filterByPrice
- filterByMarque
- filterByMarqueOrPrice

### Fonctions pures

Les fonctions pures sont des fonctions qui ne modifient pas leurs paramètres et qui retournent toujours la même valeur pour les mêmes paramètres.

Dans le projet elles se trouvent dans le fichier routes/voiture.js

Les fonctions concernées sont :

- libelleToUpperCase
- libelleTolowerCase

### Idempotence

Une fonction est idempotente si elle peut être appelée plusieurs fois sans changer le résultat.

Dans le projet elles se trouvent dans le fichier routes/voiture.js

Les fonctions concernées sont :

- libelleToUpperCase
- libelleTolowerCase

### Immutabilité

L'immutabilité consiste à ne pas changer les données une fois qu'elles ont été créées. Au lieu de cela, une copie modifiée est créée.
Cela peut être fait en utilisant des fonctions comme Object.assign() ou spread operator (...) pour les objets et tableaux.

### Composition de fonctions (purs et impurs)

La composition de fonctions en JavaScript utilise plusieurs fonctions pour créer une nouvelle fonction.
Il en existe deux types :
    -pur (pas d'effets secondaires, même résultat pour le même intrant) et  
    -impur (a des effets secondaires, le résultat peut varier). Les ingrédients purs favorisent le développement, les ingrédients impurs compliquent le développement.

### Séparation entre domaines purs et impurs

La sépartion entre domaines purs et impurs est importante !!!
Séparer les domaines purs et impurs en JavaScript consiste à séparer les calculs (purs) des effets de bord (impurs) dans le code. Les fonctions pures prennent des entrées et retournent des résultats, sans effets de bord. Les fonctions impures produisent des effets de bord. Cela facilite la compréhension et les tests.

## Conclusion

En résumé, ce projet montre comment créer un routeur à l'aide de la bibliothèque Express.js en JavaScript, en utilisant l'immuabilité et les fonctions pures. Ceci est un exemple simple pour comprendre les concepts de base de la programmation fonctionnelle en JavaScript.
