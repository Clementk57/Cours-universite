# 🎯 Révision et QCM — Introduction à l’IA

[[CH1-Introduction-a-l-IA|⬅ Sommaire du cours]]

> [!info] Comment utiliser cette fiche
> Lis d’abord le résumé, puis réponds aux questions sans ouvrir les corrections. Clique ensuite sur chaque encadré « Correction » dans Obsidian. Il y a **une seule bonne réponse par question**. Ces questions sont inventées pour s’entraîner, elles ne constituent pas le QCM officiel.

> [!warning] Périmètre
> Moodle annonce que l’examen porte sur le cours et les TP. Les sujets de TP n’étaient pas accessibles lors de la rédaction. Cette fiche couvre donc les supports de cours consultés, pas le contenu détaillé des TP.

## 🧠 Résumé express

| Notion | Ce qu’il faut retenir |
|---|---|
| IA | Domaine large de l’informatique, avec plusieurs approches |
| Automatisation | Exécution sans intervention humaine directe, pas forcément de l’IA |
| Machine learning | Une partie de l’IA qui ajuste un modèle à partir de données ou d’expériences |
| Deep learning | Famille du machine learning fondée sur des réseaux de neurones à plusieurs couches |
| IA symbolique | Représentation explicite de connaissances et manipulation de règles |
| Système expert | Base de faits, base de règles et moteur d’inférence |
| Supervisé | Exemples et cibles connues |
| Non supervisé | Recherche de structure sans cibles fournies |
| Renforcement | Agent, actions, environnement et récompenses |
| Classification | Prédiction d’une catégorie |
| Régression | Prédiction d’une valeur numérique |
| Généralisation | Fonctionnement sur des données nouvelles |
| Biais social | Erreurs ou résultats désavantageant systématiquement certains groupes |
| Explicabilité | Possibilité de comprendre des éléments du fonctionnement ou d’une décision |

> [!tip] Les dates à connaître
> **1936** Turing et la calculabilité · **1943** neurones formels de McCulloch et Pitts · **1956** Dartmouth · **1997** Deep Blue bat Kasparov · **2016** AlphaGo bat Lee Sedol.

## 🟦 A. Définitions et histoire

### 1. Quel ensemble est le plus large ?

- A. Deep learning
- B. Machine learning
- C. Intelligence artificielle
- D. Réseau de neurones profond

> [!success]- Correction
> **C.** L’IA englobe l’apprentissage automatique, qui englobe notamment l’apprentissage profond.

### 2. Une alarme programmée pour sonner à 20 h tous les jours est :

- A. Nécessairement du deep learning
- B. Une automatisation qui ne nécessite pas forcément de l’IA
- C. Une preuve de conscience
- D. Une forme obligatoire de renforcement

> [!success]- Correction
> **B.** Une simple règle horaire peut suffire. L’automatisation et l’IA ne sont pas synonymes.

### 3. Quel événement est considéré comme un acte fondateur de l’IA ?

- A. Dartmouth en 1956
- B. La création du Web en 1989
- C. La victoire de Deep Blue en 1997
- D. L’invention de la Pascaline en 1642

> [!success]- Correction
> **A.** Dartmouth marque la naissance du domaine sous le nom d’intelligence artificielle. Les autres événements sont distincts.

### 4. Quel chercheur est associé à la calculabilité et à une machine théorique ?

- A. George Boole
- B. Alan Turing
- C. Lotfi Zadeh
- D. Lee Sedol

> [!success]- Correction
> **B.** Alan Turing décrit la machine de Turing et étudie les limites du calcul.

### 5. Le test de Turing évalue principalement :

- A. La taille de la mémoire d’un ordinateur
- B. La ressemblance des échanges avec ceux d’un humain
- C. La conscience de manière certaine
- D. La vitesse de déplacement d’un robot

> [!success]- Correction
> **B.** Un évaluateur tente de distinguer humain et machine à partir d’échanges. Réussir ce test ne prouve pas une conscience.

### 6. Qu’est-ce qu’un hiver de l’IA ?

- A. Une panne due au froid
- B. Une période de baisse de l’enthousiasme et des financements
- C. Une méthode de classification
- D. Le nom d’un robot

> [!success]- Correction
> **B.** Les attentes déçues et les limites techniques peuvent entraîner une réduction des investissements.

### 7. Quel événement a lieu en 1997 ?

- A. AlphaGo bat Lee Sedol
- B. Deep Blue bat Kasparov aux échecs
- C. Le séminaire de Dartmouth
- D. La création des neurones de McCulloch et Pitts

> [!success]- Correction
> **B.** Deep Blue bat Kasparov en 1997. La rencontre d’AlphaGo avec Lee Sedol a lieu en 2016.

### 8. ELIZA est surtout associée à :

- A. Un agent conversationnel ancien
- B. Un véhicule autonome
- C. Une loi européenne
- D. Une base de données médicale moderne

> [!success]- Correction
> **A.** ELIZA est un programme historique simulant une conversation.

## 🟩 B. Fonctions et applications

### 9. Quelle activité correspond à la perception visuelle ?

- A. Détecter un obstacle dans une image
- B. Synthétiser une voix
- C. Additionner deux nombres à la main
- D. Stocker une règle juridique

> [!success]- Correction
> **A.** La perception visuelle traite les informations issues d’une image ou d’une scène.

### 10. La reconnaissance vocale consiste d’abord à :

- A. Transformer une image en vidéo
- B. Transformer un signal de parole en texte
- C. Prouver qu’un texte est vrai
- D. Transformer une règle en capteur

> [!success]- Correction
> **B.** La reconnaissance de parole produit une transcription. La synthèse vocale effectue l’opération inverse dans son principe, du texte vers la parole.

### 11. Quel exemple illustre une application de vision par ordinateur ?

- A. Localiser un piéton dans une image
- B. Conserver un mot de passe dans un coffre
- C. Trier une liste par ordre alphabétique
- D. Lire manuellement un livre

> [!success]- Correction
> **A.** La détection d’un objet dans une image est une tâche classique de vision.

### 12. Un système de détection de fausses informations fondé seulement sur le style d’un texte :

- A. Détermine toujours la vérité objective
- B. Peut exploiter des indices imparfaits et se tromper
- C. Comprend nécessairement toutes les sources
- D. Rend inutile toute vérification

> [!success]- Correction
> **B.** Un style ou un vocabulaire peuvent être corrélés à une catégorie sans prouver qu’une affirmation est vraie ou fausse.

### 13. Dans un véhicule autonome, quelle combinaison est pertinente ?

- A. Perception, localisation et décision
- B. Seulement une base de mots
- C. Aucune information sur l’environnement
- D. Uniquement une horloge

> [!success]- Correction
> **A.** Le véhicule doit notamment percevoir la scène, se situer et choisir des actions.

### 14. Un véhicule de niveau 4 est généralement autonome :

- A. Dans toutes les conditions possibles sans limite
- B. Dans son domaine de fonctionnement défini
- C. Uniquement si le conducteur effectue toutes les tâches
- D. Sans utiliser aucun capteur

> [!success]- Correction
> **B.** Le niveau 4 correspond à une automatisation élevée dans des conditions définies. Le niveau 5 vise l’ensemble des conditions de conduite prises en charge.

## 🟨 C. Symboles, logique et systèmes experts

### 15. L’IA symbolique manipule principalement :

- A. Des connaissances représentées avec des symboles et des règles
- B. Uniquement des images
- C. Des neurones biologiques vivants
- D. Seulement des récompenses

> [!success]- Correction
> **A.** Elle représente explicitement des connaissances afin de raisonner dessus.

### 16. Un système expert classique comprend :

- A. Une base de faits, des règles et un moteur d’inférence
- B. Seulement une caméra
- C. Un ordinateur sans connaissances
- D. Une batterie et des roues uniquement

> [!success]- Correction
> **A.** Le moteur utilise les faits et les règles pour produire des conclusions.

### 17. On sait que P est vraie et que P implique Q. Que peut-on conclure ?

- A. Q est vraie
- B. Q est fausse
- C. P est fausse
- D. On ne peut jamais conclure Q

> [!success]- Correction
> **A.** C’est le raisonnement appelé *modus ponens* : P et « si P alors Q » permettent de déduire Q.

### 18. On sait que P implique Q et que Q est vraie. Peut-on conclure P ?

- A. Toujours
- B. Non, Q peut avoir une autre cause
- C. Oui, seulement si P est fausse
- D. Oui, car toute implication est une équivalence

> [!success]- Correction
> **B.** Une implication ne permet pas automatiquement de remonter de sa conséquence vers sa condition.

### 19. Que signifie le symbole $\forall x$ ?

- A. Il existe au moins un x
- B. Pour tout x
- C. Non x
- D. La probabilité de x

> [!success]- Correction
> **B.** $\forall$ est le quantificateur universel. $\exists$ signifie « il existe au moins un ».

### 20. Quel énoncé décrit le mieux la logique floue ?

- A. Elle autorise des degrés d’appartenance à une catégorie
- B. Elle interdit toutes les valeurs entre 0 et 1
- C. Elle est exactement identique à une probabilité
- D. Elle supprime toutes les règles

> [!success]- Correction
> **A.** Une appartenance à « chaud » peut être graduelle. Un degré d’appartenance n’est pas automatiquement une probabilité.

## 🟪 D. Apprentissage automatique

### 21. Des images de gardes et d’amis sont fournies avec leurs étiquettes. Quel apprentissage est utilisé pour prédire l’étiquette ?

- A. Supervisé
- B. Non supervisé uniquement
- C. Renforcement uniquement
- D. Aucun apprentissage possible

> [!success]- Correction
> **A.** Chaque exemple possède une cible connue, ce qui correspond au supervisé.

### 22. Regrouper des images sans connaître à l’avance leur catégorie correspond typiquement à :

- A. Du regroupement non supervisé
- B. Une régression supervisée obligatoire
- C. Une preuve mathématique
- D. De la synthèse vocale

> [!success]- Correction
> **A.** Le clustering cherche des groupes dans des données sans étiquettes de groupe fournies pour la tâche.

### 23. Dans l’apprentissage par renforcement, l’agent apprend notamment grâce :

- A. À des récompenses et aux conséquences de ses actions
- B. À une étiquette correcte obligatoire pour chaque action
- C. À une liste fixe d’horaires
- D. À l’absence de tout environnement

> [!success]- Correction
> **A.** L’agent interagit avec un environnement et cherche une stratégie avec une bonne récompense cumulée.

### 24. Prédire « garde » ou « ami » est un problème de :

- A. Classification
- B. Régression uniquement
- C. Compression d’image obligatoire
- D. Synthèse vocale

> [!success]- Correction
> **A.** La sortie attendue est une catégorie.

### 25. Prédire le nombre de minutes d’un trajet est un problème de :

- A. Classification nécessairement
- B. Régression
- C. Clustering uniquement
- D. Logique propositionnelle uniquement

> [!success]- Correction
> **B.** La sortie attendue est une valeur numérique. On pourrait reformuler le problème en classes, mais ce n’est pas le cas ici.

### 26. Avec k = 5, trois voisins sont des gardes et deux sont des amis. Que prédit un vote majoritaire ?

- A. Ami
- B. Garde
- C. Toujours inconnu
- D. Une durée de cinq minutes

> [!success]- Correction
> **B.** Les gardes sont majoritaires parmi les cinq voisins. La distance choisie influence quels voisins sont retenus.

### 27. Dans un SVM de classification, les vecteurs de support :

- A. Jouent un rôle déterminant dans la frontière et la marge
- B. Sont nécessairement des images de véhicules
- C. Suppriment le besoin d’évaluer le modèle
- D. Sont les règles d’un système expert

> [!success]- Correction
> **A.** Les observations proches de la frontière sont déterminantes pour la solution du SVM.

### 28. Quel est le rôle général d’un noyau dans certains SVM ?

- A. Permettre certaines séparations non linéaires via un espace de représentation implicite
- B. Garantir une précision parfaite
- C. Éviter toute donnée d’entraînement
- D. Transformer automatiquement toute tâche en régression

> [!success]- Correction
> **A.** L’astuce du noyau permet de travailler implicitement dans un espace transformé. Elle ne garantit pas une performance parfaite.

## 🟥 E. Évaluation et éthique

### 29. Un modèle réussit très bien sur les données d’entraînement mais mal sur des données nouvelles. Quel problème est plausible ?

- A. Surapprentissage
- B. Généralisation parfaite
- C. Absence d’entraînement garantie
- D. Réussite du test de Turing

> [!success]- Correction
> **A.** Le modèle peut avoir trop appris les particularités des données d’entraînement et mal généraliser.

### 30. Un modèle reconnaît surtout les gardes à cause du fond sombre présent dans les exemples. C’est :

- A. Un raccourci potentiellement trompeur
- B. Une garantie qu’il reconnaît les gardes partout
- C. Une preuve que le fond est la cause de leur présence
- D. Une règle de logique toujours valide

> [!success]- Correction
> **A.** Le modèle utilise un indice corrélé à la classe dans les données. Il peut échouer si cette corrélation change.

### 31. Un biais dans un système d’aide au recrutement peut provenir :

- A. De données historiques qui reflètent des pratiques inéquitables
- B. Uniquement de la couleur de l’ordinateur
- C. De l’existence même d’un clavier
- D. Seulement d’un virus informatique

> [!success]- Correction
> **A.** Les données et les décisions passées peuvent contenir des déséquilibres ou des discriminations reproduits par le modèle.

### 32. L’explicabilité consiste à :

- A. Fournir des éléments compréhensibles sur le modèle ou une décision
- B. Garantir que toutes les prédictions sont justes
- C. Interdire l’utilisation de données
- D. Remplacer tous les utilisateurs par des robots

> [!success]- Correction
> **A.** Une explication peut aider à comprendre une décision, sans garantir à elle seule sa justesse ou son équité.

### 33. Qu’affirme le cours au sujet de la singularité technologique ?

- A. C’est un événement dont la date est prouvée
- B. C’est une hypothèse théorique dont la réalité n’est pas prouvée
- C. C’est un autre nom du test de Turing
- D. C’est une technique de regroupement de données

> [!success]- Correction
> **B.** Le support présente la singularité comme un scénario théorique et discute la solidité de cette hypothèse.

### 34. Quelle pratique aide à évaluer un système avant son déploiement ?

- A. Étudier ses erreurs sur des données adaptées et dans différents groupes ou contextes
- B. Examiner uniquement ses résultats sur les données d’entraînement
- C. Supposer qu’une bonne moyenne garantit l’équité
- D. Éviter de regarder ses limites

> [!success]- Correction
> **A.** Une moyenne globale peut cacher des erreurs importantes dans certaines situations. Il faut examiner la généralisation et la répartition des erreurs.

## 📌 Après le QCM

- **0 à 17 bonnes réponses** : reprends les résumés et les exemples avant de recommencer.
- **18 à 27 bonnes réponses** : relis les chapitres correspondant aux erreurs.
- **28 à 34 bonnes réponses** : refais les questions quelques jours plus tard et explique les réponses avec tes propres mots.

Ces seuils sont des repères personnels, ce ne sont pas les règles de notation de l’université. Pense à ajouter les sujets de TP lorsqu’ils seront disponibles.
