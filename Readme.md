### Initialisation

- Clonez ce repo puis ouvrez le avec votre éditeur de code favori
- Utilisez une fenêtre de terminal pour lancer la commande `npm run setup` afin de télécharger les dépendances.

### Commandes disponibles

- `npm run build` : Permet de recompiler le fichier .js à partir du fichier source .ts si ce dernier a été modifié.
- `npm run start` : Démarre le programme de gestion du robot aspirateur.

### Utilisation du programme

Après le lancement de la commande `npm run start`, les instructions apparaissent dans le terminal. Les différentes options possibles sont :
● Lancer le programme de test tel que défini au paragraphe "Test 1" ci-dessous.
● Configurer la salle à nettoyer (saisir au clavier un nombre pour l'axe X suivi d'un nombre pour l'axe Y)
● Positionner le robot aspirateur dans la pièce (saisir d'abord la position sur l'axe X du robot puis celle sur l'axe Y et terminer par l'orientation du robot en indiquant la lettre N, S, E ou W.)
● Entrer un programme de nettoyage (saisir une suite de caractères au clavier permettant au robot de comprendre le parcours qu'il doit suivre. Les options possibles sont A pour avancer, D pour tourner de 90° vers la droite ou G pour tourner de 90° vers la gauche. Par exemple DAAAGAADA est une saisie valide, mais DARGAADA n'en est pas une).
● Afficher la configuration actuelle du robot, afin de vérifier qu'il a été correctement paramétré.
● Exécuter le programme choisi.

En cas de saisie d'une donnée invalide dans l'une des catégories, par exemple une lettre pour la position du robot ou encore un positionnement du robot en dehors de la pièce, pas de panique, ce dernier est configuré pour automatiquement utiliser ses paramètres par défaut.

### Rappel du challenge

## Description

La société “iHoover” a décidé de développer un aspirateur automatique.

L’aspirateur doit pouvoir parcourir l'intégralité d’une pièce donnée, sa position est représentée par ses
coordonnées (x,y) et d'une lettre indiquant l'orientation selon la notation cardinale anglaise (N,E,W,S).

Une pièce est modélisée par une grille rectangulaire.

Par exemple, l’aspirateur peut se trouver dans la position « 0, 0, N », ce qui signifie qu’il se situe dans le
coin inférieur gauche de la pièce, et orientée vers le Nord.

Pour contrôler l’aspirateur, une séquence de commandes symbolisée par une suite de lettres lui est
envoyée. Les commandes possibles sont « D », « G » et « A ». « D » et « G » font pivoter l’aspirateur de
90° à droite ou à gauche respectivement, sans la déplacer. « A » signifie que l'on avance d'une case
dans la direction à laquelle elle fait face, et sans modifier son orientation.

On définit que la case directement au Nord de la position (x, y) a pour coordonnées (x, y+1).

Pour programmer l’aspirateur, on lui fournit des données en entrée:
● Les dimensions de la grille à savoir le nombre de carrés sur l’axe x puis y.
● La position initiale de l’aspirateur, ainsi que son orientation.
● Une série d'instructions que l’aspirateur exécutera.

Lorsque l’aspirateur achève une série d'instruction, il communique sa position et son orientation.

## Objectif

Concevoir et développer une application permettant de paramétrer la dimension de la grille, de
positionner l’aspirateur et d’exécuter une liste d’instructions. On doit alors pouvoir connaître sa
position finale.

Le langage de programmation imposé est soit Java, Kotlin, Scala ou Typescript, le livrable doit contenir
tout le code source et une documentation simple pour l’exécuter, cela peut très bien être une main
classe ou des tests unitaires.

L’utilisation de librairie ou framework tierce est autorisée.

## Test 1

Dimension de la grille : x=10 y=10
Position initiale de l’aspirateur : x=5 y=5 orientation=N
Instructions : DADADADAA
On attend comme position finale : x=5 y=6 orientation=N
