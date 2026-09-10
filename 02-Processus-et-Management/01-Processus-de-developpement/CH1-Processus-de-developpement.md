# Chapitre 1 — Processus de développement

> [!info] Organisation du cours
> **Enseignant :** daniel.salas@aiway.fr  
> **Cours magistral :** 2 × 3 h  
> **Projet :** 5 × 3 h — **50 %**  
> **Évaluation orale :** **25 %**  
> **Examen :** 1 h 30 — **25 %**

## Objectifs du chapitre

> [!abstract] À retenir
> Comparer les modèles, comprendre l’effet du feedback et savoir transformer un besoin en élément testable.

- Comparer les modèles **cascade**, **modèle en V**, **spirale**, **Scrum** et **Kanban**.
- Expliquer pourquoi la vitesse du feedback influence le risque.
- Formuler une **user story** et des critères d’acceptation testables.
- Structurer le démarrage du projet : objectifs, responsabilités...

## Un processus organise le travail

Un processus organise le travail. Il organise aussi l’apprentissage.

> [!tip] Boucle d’apprentissage
> **Formuler une hypothèse** → **construire** → **observer** → **adapter**

Le cours s’articule autour de deux axes :

- **Première partie :** rechercher la prédictibilité.
- **Seconde partie :** réduire le délai de feedback.

## Pourquoi le logiciel résiste-t-il à la planification ?

### Développer un logiciel

Développer un logiciel consiste à concevoir, construire, exploiter et faire évoluer un système logiciel.

**Comprendre** → **concevoir** → **fabriquer** → **valider** → **exploiter** → **faire évoluer**

> [!important] Un développement commence avant le code
> Le développement commence avant la première ligne de code et continue après la première mise en production.

### Une activité d’ingénierie singulière

#### Invisible

La progression réelle et les défauts sont difficiles à observer.

#### Copiable

Produire le deuxième exemplaire coûte presque zéro. Concevoir le premier reste difficile.

#### Malléable

Le logiciel se modifie, mais ses dépendances et ses usages créent un coût.

> [!quote] Idée clé
> **La complexité est moins dans la matière que dans les relations.**

## De la rareté à la complexité d’échelle

> [!question] Évolution du contexte
> Plus les logiciels deviennent vastes, interconnectés et utilisés par de nombreuses parties prenantes, plus les relations entre les éléments deviennent complexes.

### Aux origines : un monde plus contenu

#### Contraintes dominantes

- Mémoire et calcul rares
- accès limité aux machines
- programmation très technique.

#### Organisation

- Périmètres applicatifs restreints
- équipes et communautés réduites
- utilisations souvent proches des concepteurs.

### Démocratisation : la complexité change d’échelle

#### Puissance et coût

- Multiplication des domaines d’application
- logiciels plus vastes et interconnectés
- davantage d’utilisateurs et de parties prenantes
- enjeux économiques croissants
- pression sur les délais et la productivité.

## La « crise du logiciel »

> [!danger] Risques récurrents
> Délais dépassés, budgets difficiles à prévoir, besoins mal compris et logiciels inachevés.

| Dimension | Manifestations |
|---|---|
| **Délais** | Dépassements et projets abandonnés. |
| **Coûts** | Budgets difficiles à prévoir. |
| **Besoins** | Exigences mal comprises ou non satisfaites. |
| **Qualité** | Logiciels inachevés. |

### Toujours en crise ?

Les capacités ont radicalement progressé. Pourtant, les symptômes persistent.

Nous savons mieux construire : **langages**, **bibliothèques**, **cloud**, **tests**, **automatisation**, **observabilité**...

Mais la cible bouge : usages, concurrence, réglementation, équipe, technologie et compréhension du besoin.

## Les activités du cycle de vie

**Analyse** → **conception** → **fabrication** → **validation** → **exploitation** → **maintenance et évolution** → **retrait**

## L’activité clé : analyser le besoin

> [!success] Réflexe d’ingénierie
> Comprendre les personnes, leurs objectifs et le contexte avant de concevoir la solution.

### Comprendre

- Les personnes concernées
- leurs objectifs et contraintes
- le contexte réel d’utilisation.

### Arbitrer

- Désirable ↔ faisable
- valeur ↔ coût
- qualité ↔ délai
- besoins parfois contradictoires.

> [!warning] Point essentiel
> **Une excellente exécution du mauvais besoin reste un échec.**

### Construire le bon produit, correctement

| Situation | Description | Question associée |
|---|---|---|
| **Exact mais peu précis** | La moyenne vise la bonne cible. | **Validation :** construisons-nous le bon produit ? |
| **Précis mais inexact** | Résultats répétables, mais sur la mauvaise cible. | **Vérification :** construisons-nous correctement le produit ? |

## Du besoin exprimé au logiciel réalisé

### Que signifie « réserver rapidement » ?

> « L’étudiant doit pouvoir réserver rapidement une salle de travail disponible. »

#### Ce que la phrase semble dire

Un acteur, une action et un résultat attendu.

#### Ce qu’elle ne définit pas

- Délai acceptable
- règles
- conflits
- droits
- accessibilité
- actualisation des données.

### Le piège de la traduction

**Ce que la personne VIT** → **ce qu’elle EXPRIME** → **ce que l’équipe COMPREND** → **ce que le logiciel FAIT**

> [!note] Documenter ne suffit pas
> Documenter réduit certaines ambiguïtés. Cela ne remplace ni la conversation, ni l’observation, ni le feedback.

## La quête de prédictibilité

> [!abstract] Deux stratégies
> Les processus planifiés cherchent la prédictibilité. Les approches agiles cherchent surtout à réduire le délai de feedback.

Les modèles étudiés sont : **cascade**, **modèle en V** et **spirale**. Ils mettent en évidence les limites du feedback tardif.

### Processus dirigés par la planification

> [!info] Principe
> Les activités, livrables, responsabilités et jalons sont largement définis à l’avance.

**Mesure :** la progression est comparée au plan de référence : périmètre, budget, calendrier.

Les familles étudiées — cascade, modèle en V et spirale — ne sont ni identiques ni toujours appliquées « à la lettre ».

### Architecture 1 — Modèle en cascade

#### Organisation

Le modèle en cascade fait partie des processus dirigés par la planification. Il organise le passage des intentions aux opérations en plusieurs étapes :

1. Faisabilité et besoins
2. exigences et plan
3. architecture et détail
4. code et intégration
5. tests et recette
6. déploiement et exploitation.

À gauche, le modèle réduit l’incertitude par l’étude et la conception. À droite, il matérialise puis vérifie la solution.

![[IMG_7273 1.jpeg]]

*Figure — Modèle en cascade.*

#### Ce que la cascade rend possible

| Élément | Information |
|---|---|
| **Lisibilité** | Phases, responsabilités et jalons explicites. |
| **Contractualisation** | Livrables et décisions formalisés. |
| **Prévision** | Budget et calendrier détaillés à partir d’hypothèses connues. |

> [!note] Limite de la prévision
> Une prévision détaillée n’est pas nécessairement une prévision exacte.

![[IMG_7275.jpeg]]

*Figure — Ce que la cascade rend possible.*

### Architecture 2 — Modèle en V

#### Organisation et correspondance entre les niveaux

Le modèle en V fait partie des processus dirigés par la planification. Il met en correspondance chaque niveau de définition avec un niveau de test :

| Définition | Test correspondant |
|---|---|
| **Besoins** — résultat attendu | **Recette** — besoins |
| **Architecture** — conception générale | **Tests d’intégration** — architecture |
| **Conception détaillée** — composants | **Tests unitaires** — composants |
| **Implémentation** | Point de convergence des activités de conception et de test |

Chaque niveau de définition prépare un niveau de test correspondant.

![[IMG_7276.jpeg]]

*Figure — Correspondance entre les niveaux de définition et de test dans le modèle en V.*

### La limite : l’effet tunnel

**Décisions tôt.**  
**Validation tardive.**

Ce qui peut s’accumuler :

- Hypothèses erronées
- intégrations non testées
- évolution du contexte
- travail conforme au plan, mais inutile.

Plus le feedback arrive tard, plus une erreur a eu le temps de contaminer la conception, le code, les tests, les données et les contrats.

### Architecture 3 — Modèle en spirale

Le modèle en spirale fait partie des modèles étudiés dans la quête de prédictibilité. Le document source le cite, mais ne fournit pas d’explication textuelle détaillée dans les éléments conservés ici.

## Exemple : une règle change à six semaines de la livraison

L’université impose désormais une validation par un enseignant pour toute réservation après 18 h.

### Impacts directs

**Besoins** → **UX** → **sécurité** → **tests** → **support**

### Effet du feedback tardif

Une seule règle remet en cause plusieurs décisions déjà conçues, implémentées et validées.

## Validation à plusieurs granularités

La validation peut être réalisée à plusieurs niveaux :

- **Tests unitaires :** une unité isolée respecte son comportement attendu
- **intégration :** les composants coopèrent correctement
- **système :** le système répond aux exigences
- **recette :** le client ou l’utilisateur accepte le résultat dans son contexte.

> [!important] Préciser « correct »
> Préparer un test tôt oblige à préciser ce que « correct » signifie.

![[IMG_7277.jpeg]]

*Figure — Validation à plusieurs granularités. La partie « recette » de la photographie est partiellement coupée. L’image est conservée pour ne perdre aucune information.*

## Modèle en V : bilan

### Forces

- Traçabilité exigences ↔ tests
- rigueur et responsabilités explicites
- adapté à certains environnements réglementés.

### Vigilances

- Rigidité si les phases sont cloisonnées
- intégration globale potentiellement tardive
- coût élevé d’une mauvaise cible initiale.


## Mode Agile

> [!success] Idée directrice
> Livrer régulièrement un incrément utilisable permet d’apprendre plus tôt et d’adapter la suite.

Les méthodes agiles réduisent le délai de feedback grâce à trois idées principales

- l’agilité
- les incréments
- l’apprentissage continu

### La posture agile

#### Planifier progressivement

Décider en fonction des connaissances disponibles, puis réviser lorsque ces connaissances évoluent.

#### Livrer par incréments

Produire régulièrement quelque chose d’utilisable afin d’obtenir du feedback concret.

> [!important] L’agilité ne signifie pas « sans plan »
> Cela signifie de ne pas confondre le plan avec la réalité.

### Le Manifeste pour le développement Agile de logiciels

Le Manifeste comporte **4 valeurs** et **12 principes**. Il a été formulé en 2001 par 17 praticiens à partir d’approches déjà expérimentées.

Source indiquée dans le cours : [agilemanifesto.org/iso/fr/](https://agilemanifesto.org/iso/fr/)

#### Les quatre valeurs

| Préférence | Plutôt que |
|---|---|
| **Individus et interactions** | processus et outils |
| **Logiciels opérationnels** | documentation exhaustive |
| **Collaboration avec les clients** | négociation contractuelle |
| **Adaptation au changement** | suivi d’un plan |

Les éléments de droite ont de la valeur, mais les équipes agiles valorisent davantage ceux de gauche.

### Une boucle courte pour toutes les activités

Le cycle agile suit une boucle courte

**Analyser** un petit besoin → **concevoir** juste assez → **fabriquer** un incrément → **valider** pour obtenir du feedback → **apprendre, adapter et recommencer**.

La durée peut être de quelques jours ou de quelques semaines selon le produit. Elle ne correspond pas obligatoirement à deux semaines.

### Agile, Scrum et pratiques d’ingénierie

Ces notions ne sont pas équivalentes

| Élément | Rôle |
|---|---|
| **Agile** | Valeurs et principes pour agir dans l’incertitude |
| **Scrum et Kanban** | Cadres pour organiser les décisions, la collaboration et le flux |
| **Ingénierie** | Tests automatisés, intégration continue, revue de code, refactoring et observabilité |

> [!warning] Point d’attention
> Un bon processus ne compense pas durablement de mauvaises pratiques techniques, et inversement.


## Scrum et l’ingénierie des exigences

Cette partie porte sur la valeur, le backlog, les user stories, les Sprints et le feedback.

> [!info] Fil conducteur
> Valeur → Product Backlog → user stories → Sprint → incrément → feedback.

> [!note] Référence
> *The Scrum Guide*, Schwaber et Sutherland, 2020.

### Scrum, un cadre léger et structuré

#### Fondements

- Empirisme
- pensée Lean
- transparence
- inspection
- adaptation

#### Finalité

Scrum aide une petite équipe auto-gérée à produire de la valeur face à un problème complexe.

Scrum est un cadre. Ce n’est ni une procédure complète ni une méthode de programmation.

### Le fonctionnement général de Scrum

**Product Backlog** ordonné et émergent → **Sprint Planning** avec objectif et sélection → **Sprint Backlog** avec objectif et plan → **Sprint** pour construire, inspecter et adapter chaque jour → **incrément utilisable**.

Le review et le feedback servent ensuite à adapter le Product Backlog.

- **Transparence** : rendre le travail et son état compréhensibles
- **Feedback** : inspecter le résultat et adapter la suite

![[IMG_7289.jpeg]]

*Figure — Flux entre le Product Backlog, le Sprint et l’incrément.*

### Le Product Backlog

Le Product Backlog est une liste ordonnée et émergente de ce qui est nécessaire pour améliorer le produit.

| Caractéristique | Description |
|---|---|
| **Unique** | Une source de travail pour l’équipe Scrum |
| **Évolutif** | Les éléments apparaissent, changent et disparaissent |
| **Orienté objectif** | Le Product Goal donne une direction à long terme |

### Les user stories

Une user story est un support de conversation.

> En tant que **[rôle]**, je veux **[capacité]** afin de **[bénéfice ou valeur]**.

Elle exprime une intention du point de vue d’une personne. Elle ne remplace pas automatiquement toute spécification utile.

#### Une story, trois C

| Élément | Rôle |
|---|---|
| **Card** | Une formulation courte, mémorable et visible |
| **Conversation** | Les détails se découvrent avec les parties prenantes |
| **Confirmation** | Des exemples ou critères rendent le résultat vérifiable |

La carte n’est pas le besoin complet. Elle en est le rappel partageable.

#### Exemple : réserver une salle

> En tant qu’**étudiant**, je veux **voir les salles disponibles pour un créneau donné**, afin de **trouver rapidement un espace de travail**.

Ce que l’on sait : acteur, capacité et bénéfice attendu.

Ce qu’il faut encore discuter : droits, fuseau horaire, capacité, actualisation, accessibilité et conflits.

### Les critères d’acceptation

> [!example] Formule utile
> **Étant donné** un contexte, **quand** une action est réalisée, **alors** un résultat observable doit être vérifiable.

Les critères d’acceptation rendent le besoin observable.

> **Étant donné** que des salles existent mardi de 14 h à 16 h,  
> **quand** je recherche une salle sur ce créneau,  
> **alors** seules les salles disponibles sont affichées.

Ils servent à clarifier, valider et tester le besoin.

Du besoin flou à l’élément testable

1. **Intention** : « réserver rapidement une salle »
2. **Conversation** : acteur, créneau, droits, disponibilité et valeur attendue
3. **Confirmation** : exemples observables sous forme de critères d’acceptation

Chaque étape réduit l’ambiguïté sans prétendre décrire définitivement tout le besoin.

### Le Sprint

> [!tip] Rythme de travail
> Le Sprint crée une cadence de décision courte, avec un objectif cohérent et un périmètre adaptable.

Un Sprint est un cycle de travail de durée fixe d’un mois ou moins, souvent de 1 à 3 semaines selon le contexte.

Le Sprint Goal donne une intention cohérente. Le périmètre peut être clarifié et renégocié sans mettre l’objectif en danger.

> [!important] Principe de décision
> On s’engage sur la poursuite de l’objectif et la qualité, pas sur un périmètre arbitrairement figé.

#### Les quatre temps du Sprint

1. Sprint Planning
2. Daily Scrum
3. Sprint Review
4. Sprint Retrospective

Le Sprint Review sert à inspecter le produit avec les parties prenantes. La rétrospective sert à inspecter la manière de travailler.

Tous ces temps ont lieu pendant le Sprint. Ils servent à prendre des décisions, pas à ajouter des réunions décoratives.

### Les trois responsabilités Scrum

| Responsabilité | Rôle |
|---|---|
| **Product Owner** | Maximise la valeur et gère efficacement le Product Backlog |
| **Scrum Master** | Établit Scrum et améliore l’efficacité de l’équipe et de l’organisation |
| **Developers** | Créent l’incrément, adaptent leur plan et répondent de sa qualité |

Une seule équipe Scrum fonctionne sans sous-équipe ni hiérarchie interne.

### La Definition of Done

La Definition of Done est une barre de qualité commune. Elle décrit formellement l’état de l’incrément lorsqu’il satisfait les mesures de qualité requises.

Un élément est terminé lorsque les critères d’acceptation passent, les tests automatisés pertinents passent, le code a été relu, la documentation utile est à jour et l’incrément est intégré et déployable.

Ce qui ne constitue pas une Definition of Done suffisante

- « le développeur a fini »
- « cela marche sur mon poste »
- « les tests seront faits plus tard »
- une checklist impossible à appliquer

La transparence signifie que tout le monde comprend ce que « terminé » signifie. Si la Definition of Done n’est pas satisfaite, le travail ne fait pas partie de l’incrément.

## Kanban : optimiser le flux

> [!success] Principe du flux
> Terminer le travail en cours produit de la valeur et accélère le feedback.

Kanban vise à visualiser le travail, fluidifier l’avancement et améliorer progressivement.

### Kanban ne prescrit ni rôles ni itérations

Kanban part de l’existant. Les responsabilités, réunions et processus actuels peuvent rester en place.

On améliore le flux en observant où le travail attend, ralentit ou se bloque.

Kanban s’applique à un service existant sans imposer de remplacer immédiatement son organisation.

### Les pratiques essentielles de Kanban

| Pratique | Objectif |
|---|---|
| **Visualiser** | Rendre le workflow et le travail visibles |
| **Limiter le WIP** | Contrôler le travail commencé |
| **Gérer le flux** | Observer les blocages, l’âge et le débit |
| **Améliorer** | Tester un changement et mesurer son effet sur le flux |

Mesures utiles : **WIP**, **débit**, **temps de cycle** et **âge des éléments en cours**.

#### Exemple de tableau Kanban

| À faire | En cours · WIP 2 | À valider · WIP 2 | Terminé |
|---|---|---|---|
| Recherche par date | Filtrer les salles | Annulation | Connexion étudiante |
| Accessibilité | Gestion des droits | Notifications |  |
|  |  | Conflit de réservation |  |

Le problème visible est que la colonne « À valider » dépasse sa limite. Commencer encore du travail aggrave le goulot.

![[IMG_7302.jpeg]]

*Figure — Visualisation du travail et des goulots d’étranglement.*

### Commencer plus ou terminer mieux ?

Un exemple compare deux situations

- **8 éléments commencés** et **1 terminé**
- **3 éléments commencés** et **3 terminés**

Terminer davantage produit de la valeur et accélère le feedback.

### Une remarque honnête

Le code est souvent considéré comme « OK ». Les difficultés les plus probables concernent

- **Besoin** : comprendre ce qu’il faut réellement produire
- **Découpage** : créer de petits incréments qui restent utiles
- **Qualité** : définir et vérifier ce que « terminé » signifie
- **Coordination** : partager les décisions et lever les blocages
- **Flux** : terminer avant de commencer davantage

## Organisation du projet pratique

> [!info] Cadre du projet
> Une petite équipe, des responsabilités explicites, des séances de 3 h et une évaluation portant sur le résultat comme sur la manière de travailler.

- **Personnes** : une petite équipe avec des responsabilités explicites
- **Séances × 3 h** : un cycle de produit simulé avec feedback régulier
- **50 % de la note** : le résultat et la manière de travailler comptent

L’encadrant de TP est Product Owner par défaut. Un étudiant peut reprendre cette responsabilité s’il souhaite réellement porter le projet.

### Kick-off : prochaines actions

1. **Équipe** : finaliser les groupes
2. **Product Owner** : encadrant de TP, sauf étudiant volontaire pour porter le projet
3. **Scrum Master** : attribuer cette responsabilité à un étudiant
4. **Backlog** : formuler l’objectif et ordonner les premières stories

> [!tip] Démarrage du projet
> Ne cherchez pas un backlog totalement complet. Cherchez le prochain incrément qui vous apprendra quelque chose.































