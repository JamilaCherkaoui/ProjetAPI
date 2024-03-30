# ProjetAPI
Création d'une application qui interagit avec deux API différentes afin d'afficher les phases de la lune accompagnées de citations inspirantes.

Bien démarrer avec Create React App
Ce projet a été initialisé avec Create React App.

Fonctionnalités
Affichage des phases de la lune : Utilise l'API FarmSense pour afficher les phases actuelles de la lune.
Affichage de citations inspirantes : Utilise l'API ZenQuotes pour afficher une citation inspirante aléatoire.

Installation
Clonez ce dépôt sur votre machine locale et naviguez dans le dossier du projet. Exécutez les commandes suivantes pour installer les dépendances nécessaires pour le frontend et le backend (si applicable).
npm install

Scripts disponibles
Dans le répertoire du projet, vous pouvez exécuter :

npm start
Lance l'application en mode développement.
Ouvrez http://localhost:3000 pour la voir dans votre navigateur.

La page se rechargera si vous apportez des modifications.
Vous pourrez également voir les erreurs de lint dans la console.

npm test
Lance l'exécution des tests en mode interactif de surveillance.
Consultez la section exécution des tests pour plus d'informations.

npm run build
Construit l'application pour la production dans le dossier build.
Elle regroupe correctement React en mode production et optimise le build pour obtenir les meilleures performances.

Le build est minifié et les noms de fichiers incluent des hachages.
Votre application est prête à être déployée !

Consultez la section déploiement pour plus d'informations.

npm run eject
Note : c'est une opération à sens unique. Une fois que vous ejectez, vous ne pouvez pas revenir en arrière !

Si vous n'êtes pas satisfait des choix d'outils et de configuration, vous pouvez ejecter à tout moment. Cette commande supprimera la dépendance de build unique de votre projet.

À la place, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes sauf eject continueront de fonctionner, mais elles pointeront vers les scripts copiés pour que vous puissiez les ajuster. À partir de ce moment, vous êtes seul.

Vous n'avez pas à utiliser eject. L'ensemble de fonctionnalités proposées est adapté pour des déploiements de petite et moyenne envergure, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt pour cela.

Pour en savoir plus
Vous pouvez en apprendre davantage dans la documentation de Create React App.

Utilisation
Aucune configuration spécifique pour les clés API n'est nécessaire pour ce projet, car les services utilisés ne requièrent pas d'authentification par clé API.
