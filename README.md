This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can find some information on how to perform common tasks on the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

***
# FR
***

## Objectif
Développer une application front qui consomme les messages d'un stream d'évènements provenant d'une api prédéfinie.
L'application devra les mettre en forme via des outils de DataViz au format Punchcard en les triant selon leur type.

## La solution
### Installation
1. Fetch le git repository via :

```
git clone https://github.com/seedy/punchcard
```

2. Installer Node et NPM
- Node v8.12.0 (https://nodejs.org/en/download/)
- vérifier la version de NPM :
```
npm -v
```
- Version du projet : 5.4.2
Pour installer la bonne version de npm :
```
npm install -g npm@5.4.2
```

3. Installer les dépendances du projet

Ouvrir un terminal à la racine du projet et lancer la commande :
```
npm install
```

4. Lancer le projet localement
```
npm start
```

### Choix techniques

#### Framework : React
- Pour la simplicité de lancement d'une app.
- Parce que j'ai récemment touché à du React Native et que je sentais que c'est avec cette techno que je serais le plus rapide à développer les composants.
- Les librairies javascript/d3 sont faciles à intégrer.
- Un code rapidement découpé en composants.
- Je dois avouer que j'apprends encore en développant avec la techno...

#### Gestion de state : Ajout de Redux
- Au départ, j'ai pensé qu'intégrer de l'immutabilité faciliterait le traitement des données. C'est pourquoi j'ai intégré Redux.
- J'ai rapidement construit un arbre de state avec les posts. Je n'ai pas pensé à mettre cet arbre de posts à plat dès le début, ce qui fait que j'ai des objets et des tableaux imbriqués.
- Il est difficile de manipuler le state dans l'état suivant, je ne m'en suis rendu compte que tard :
```
{
   'pin': {
       posts: [],
       postsByDay: [[...],[],[],[],[],[],[]]
   }
}
```
- Je n'avais jamais manipulé de SSE auparavant, j'ai d'abord structuré ma couche api de manière classique en lançant un appel GET sur le endpoint. Suivant ce modèle, le reste de l'architecture peut mieux se comprendre.

#### Librairie design : Material-ui
- J'ai intégré cette librairie que je comptais utiliser pour des fonctionnalités supplémentaires du type bouton de rafraichissement, ou bouton pour masquer un des graphes.

#### Librairie Dataviz : React-punchcard
- J'ai recherché une librairie toute faite qui m'éviterait de reconstruire une punchcard entière sur d3. J'ai obtenu peu de résultats et ai opté pour celle-ci, qui malheureusement n'est pas entièrement visible.
- Voici un lien vers la démo du package :
```
https://ablamunits.github.io/react-punchcard/demo/
```

#### Priorités : Algo et Composants
- J'ai en premier développé la couche composant de cette application, en laissant l'aspect design pour la fin. J'ai mis l'accent sur le découpage des responsabilités et la gestion du state.
- Ensuite, j'ai priorisé l'algo en recherchant un montage des données récupérées de l'api qui minimiserait les calculs subsidiaires, d'où le modèle objet qui recense les nombres de posts:
.1) par jour, 2) par heure du jour

#### Tests unitaires : Abandonnés
- J'ai souhaité aller au plus loin du développement pour obtenir un maximum de visuel. Je n'ai finalement pas eu le temps de mettre en place des TU.
- J'avais en tête de tester en priorité les éléments suivants:
1. **PostService / post.service.js** : car il requête l'api et est le seul point d'entrée dans l'application depuis l'extérieur.
2. **PostSaga / post.saga.js** : c'est elle qui orchestre le cycle de mise à jour des données, elle est d'ailleurs relativement complexe.
3. **PostReducer / post.reducer.js** : pour valider le workflow de mise à jour du state au niveau le plus bas.

#### Scalabilité
- En prévision des problématiques de performances, j'ai tenté de structurer immédiatement mon modèle de données dans la couche API, et de minimiser les boucles pour construire un modèle objets qui me semblait optimal.
- Je n'ai compris que trop tard la logique SSE, qui rend quelque peu inutiles les manipulations de tableaux dans la couche API...
- Avec du recul, je sais maintenant que manipuler des tableaux n'est pas intéressant dans le cadre de communication via SSE. J'opterais pour un modèle du type :
```
{
    type: pin,
    day: 1, // lundi
    hour: 11 // 11h
}
```

