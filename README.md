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
-Lance l'exécution des tests en mode interactif de surveillance.
Consultez la section exécution des tests pour plus d'informations.

npm run build
Construit l'application pour la production dans le dossier build.
Elle regroupe correctement React en mode production et optimise le build pour obtenir les meilleures performances.

Le build est minifié et les noms de fichiers incluent des hachages.
Votre application est prête à être déployée !

-Consultez la section déploiement pour plus d'informations.

npm run eject
Note : c'est une opération à sens unique. Une fois que vous ejectez, vous ne pouvez pas revenir en arrière !

-Si vous n'êtes pas satisfait des choix d'outils et de configuration, vous pouvez ejecter à tout moment. Cette commande supprimera la dépendance de build unique de votre projet.

-À la place, elle copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes sauf eject continueront de fonctionner, mais elles pointeront vers les scripts copiés pour que vous puissiez les ajuster. À partir de ce moment, vous êtes seul.

-Vous n'avez pas à utiliser eject. L'ensemble de fonctionnalités proposées est adapté pour des déploiements de petite et moyenne envergure, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt pour cela.

-Pour en savoir plus
Vous pouvez en apprendre davantage dans la documentation de Create React App.

-Utilisation
Aucune configuration spécifique pour les clés API n'est nécessaire pour ce projet, car les services utilisés ne requièrent pas d'authentification par clé API.

-Tests
Notre application comprend des tests unitaires, des tests d'intégration, et des tests end-to-end pour assurer la fiabilité et la qualité du code.

-Exécution des tests
Tests unitaires et d'intégration : Exécutés avec Jest. Pour lancer ces tests, utilisez la commande:npm test
Cette commande exécute les tests pour les routes API moon-phase et inspiring-quote, en s'assurant que les réponses sont correctement reçues et formatées.

-Intégration continue
Nous utilisons GitHub Actions pour automatiser l'exécution de nos tests à chaque push et pull request sur le dépôt. Cela inclut:

-Tests backend : Exécution des tests unitaires et d'intégration pour le backend.
Vous pouvez trouver la configuration de notre pipeline CI dans le fichier 
".github/workflows/test.yml"

-Contribuer au Projet
Nous accueillons avec enthousiasme les contributions de la communauté! Voici comment vous pouvez contribuer :

-Signaler des Bugs
Si vous trouvez un bug, n'hésitez pas à ouvrir une issue en fournissant un maximum de détails pour reproduire le problème, ainsi que le comportement attendu.

-Suggérer des Améliorations
Des idées pour rendre notre application encore meilleure ? Ouvrez une issue pour discuter de vos suggestions.

-Soumettre des Pull Requests
Vous souhaitez ajouter une fonctionnalité ou corriger un bug ? Suivez ces étapes :

#1 Fork le dépôt.
#2 Créez une nouvelle branche (git checkout -b feature/amazing-feature).
#3 Commit vos changements (git commit -am 'Add some amazing feature').
#4 Push à la branche (git push origin feature/amazing-feature).
#5 Ouvrez une Pull Request.

-Code de Conduite
Nous nous engageons à fournir un environnement accueillant et inclusif pour tous. Veuillez lire notre Code de Conduite avant de contribuer.


-Plus d'Informations : 

Vous pouvez en apprendre davantage dans la documentation de Create React App.Pour apprendre React, consultez la documentation de React.

Configuration Spécifique aux Clés API
Utilisation des Clés API
Aucune configuration spécifique pour les clés API n'est nécessaire pour ce projet, car les services utilisés ne requièrent pas d'authentification par clé API. Si vous souhaitez intégrer d'autres services nécessitant une authentification, veuillez suivre les étapes ci-dessous pour sécuriser vos clés :

Créez un fichier .env à la racine de votre projet.
Ajoutez vos clés API au fichier .env comme ceci : REACT_APP_API_KEY=VotreCléAPI.

Utilisez process.env.REACT_APP_API_KEY dans votre code pour accéder à vos clés API de manière sécurisée.

Veuillez vous assurer de ne jamais commiter votre fichier .env contenant vos clés API dans votre dépôt Git.


-Documentation API avec Swagger
Notre application utilise Swagger pour documenter l'API, facilitant ainsi la compréhension des points de terminaison disponibles, les paramètres requis, et les réponses attendues.

Accéder à la Documentation Swagger
Pour consulter la documentation de notre API, lancez l'application et naviguez vers /api-docs sur votre navigateur. L'adresse complète sera typiquement : http://localhost:3001/api-docs.

Cette interface utilisateur Swagger vous permet de visualiser et d'interagir directement avec les ressources de notre API sans avoir besoin d'un client API externe. Vous pouvez également essayer les différentes requêtes en temps réel pour voir comment l'API réagit.

Utiliser Swagger pour Tester l'API
Swagger UI offre la possibilité de tester les points de terminaison de l'API directement depuis le navigateur. Suivez ces étapes pour envoyer une requête :

#1 Cliquez sur l'un des points de terminaison listés pour l'ouvrir.
#2 Cliquez sur le bouton Try it out à droite.
#3 Remplissez les paramètres requis si nécessaire.
#4 Cliquez sur Execute pour envoyer la requête à l'API.
#5 Visualisez la réponse de l'API directement dans Swagger UI.

Cette fonctionnalité est particulièrement utile pour tester rapidement l'API et pour les nouveaux développeurs se familiarisant avec votre projet.