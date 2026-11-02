# 🌍 1. Repères, histoire et enjeux de l’IA

[[CH1-Introduction-a-l-IA|⬅ Sommaire]] · [[02-Fonctions-cognitives-et-applications|Chapitre suivant ➡]] · [[04-Revision-et-QCM|📝 QCM]]

> [!abstract] L’idée générale
> L’IA est un domaine ancien et varié. Ses progrès alternent avec des périodes de ralentissement. Ses résultats doivent être évalués en tenant compte de leurs limites et de leurs effets sur les personnes.

## 1. Qu’appelle-t-on intelligence artificielle ?

Le support présente l’IA comme une branche de l’informatique qui vise à reproduire ou simuler certaines fonctions cognitives humaines. Selon une définition attribuée à Marvin Minsky, elle s’intéresse notamment à des tâches demandant des processus mentaux de haut niveau comme la perception, la mémoire et le raisonnement.

**Il n’existe pas une seule technique d’IA.** Certaines approches manipulent des symboles et des règles, d’autres apprennent à partir de données.

### Automatisation, IA, apprentissage automatique et apprentissage profond

| Terme | Idée | Exemple |
|---|---|---|
| Automatisation | Exécuter une tâche sans intervention humaine directe | Déclencher une alarme chaque soir à heure fixe |
| IA | Concevoir des systèmes pour des tâches associées à l’intelligence | Chercher un chemin ou raisonner avec des règles |
| Apprentissage automatique ou *machine learning* | Ajuster un modèle à partir d’exemples ou d’expériences | Apprendre à classer des images |
| Apprentissage profond ou *deep learning* | Apprentissage avec des réseaux de neurones à plusieurs couches | Reconnaître des objets dans une image |

> [!important] Piège classique
> Une automatisation ne repose pas forcément sur l’IA. Le machine learning est une **partie** de l’IA, et le deep learning est une **famille** du machine learning. Un système d’IA n’apprend pas forcément à partir de données.

### Le test de Turing

Un évaluateur échange à distance avec un humain et une machine sans savoir qui est qui. Il cherche à les distinguer à partir de leurs réponses. Ce test porte sur la capacité à produire une conversation difficile à distinguer de celle d’un humain. Il ne démontre pas à lui seul une conscience ou une compréhension identique à celle d’une personne.

## 2. Des origines multiples

| Repère | Contribution présentée dans le support |
|---|---|
| Antiquité | Les philosophes étudient le raisonnement et la logique |
| XVIIe siècle | Pascal construit une machine à calculer. Leibniz imagine un raisonnement manipulant des symboles |
| XIXe siècle | George Boole formalise une algèbre de la logique |
| 1936 | Alan Turing étudie la calculabilité et décrit la machine de Turing |
| 1943 | Warren McCulloch et Walter Pitts proposent un modèle de neurones formels |
| Années 1940 | Von Neumann travaille sur l’architecture des ordinateurs. Wiener développe la cybernétique. Shannon contribue à la théorie de l’information |
| 1956 | Le séminaire de Dartmouth, associé notamment à John McCarthy et Marvin Minsky, marque la naissance du domaine sous le nom d’IA |

Le domaine réunit donc des idées issues des **mathématiques, de la logique, de l’informatique et des sciences du cerveau**. Les réseaux de neurones sont inspirés de manière abstraite par les neurones biologiques, ils ne reproduisent pas fidèlement un cerveau humain.

## 3. Premiers résultats et cycles de développement

- **Jeux** : des recherches concernent les échecs dès les années 1950. En 1997, Deep Blue d’IBM bat le champion du monde Garry Kasparov.
- **Raisonnement sur les formes** : ANALOGY, d’Evans, cherche des relations entre figures.
- **Langage** : ELIZA de Weizenbaum simule une conversation. SHRDLU de Winograd traite des instructions dans un monde simplifié.
- **Robotique** : Shakey associe perception, déplacement et raisonnement, avec des capacités limitées par la technologie de son époque.
- **Jeu de go** : en 2016, AlphaGo bat Lee Sedol, joueur professionnel de premier plan.

> [!note] Les hivers de l’IA
> Un « hiver de l’IA » désigne une période de baisse de l’enthousiasme et des financements. Des promesses trop ambitieuses, une puissance de calcul insuffisante ou des résultats difficiles à généraliser ont contribué à ces ralentissements. Le premier commence au début des années 1970.

### Les systèmes experts

Dans les années 1970 et 1980, les systèmes experts codifient des connaissances d’un domaine sous forme de faits et de règles. Le moteur d’inférence applique les règles pour produire des conclusions. Le support cite **DENDRAL** en chimie et **MYCIN** en médecine.

Leur construction et leur maintenance peuvent devenir difficiles lorsque les règles se multiplient, se contredisent ou doivent évoluer. L’amélioration des processeurs, de la mémoire et des données disponibles a ensuite favorisé d’autres approches, notamment l’apprentissage profond.

## 4. Singularité et autonomie

La **singularité technologique** désigne ici un scénario théorique dans lequel des machines pourraient créer des machines plus performantes, entraînant une accélération du progrès. Le support souligne que sa réalité n’est pas prouvée et que sa démonstration théorique est contestée.

L’**autonomie** dépend de la tâche et de l’environnement. Un système capable d’agir sans intervention permanente n’est pas nécessairement capable de tout faire ni de prendre de bonnes décisions dans toutes les situations.

## 5. Limites, raccourcis et biais

### Généralisation et raccourcis

La **généralisation** est la capacité à fonctionner correctement sur des données nouvelles. Un modèle peut apprendre un raccourci présent dans les exemples d’entraînement et échouer dès que le contexte change.

> [!example] Exemple inventé avec Sly
> Bentley entraîne un détecteur de gardes. Sur les images d’entraînement, tous les gardes sont photographiés de nuit et tous les amis de jour. Le modèle peut apprendre la luminosité plutôt que l’apparence des gardes. Une bonne note sur des images construites de la même façon ne garantit pas sa réussite en plein jour.

### Biais et discrimination

Un **biais** peut se traduire par des erreurs systématiquement plus fréquentes pour certaines catégories de personnes ou situations. Le support évoque la reconnaissance faciale et l’aide au recrutement. Les données historiques peuvent refléter des inégalités existantes. Corriger le jeu de données peut aider, sans garantir à lui seul une solution complète.

> [!warning] Deux sens du mot biais
> Le biais lié à des décisions discriminatoires ou à des données déséquilibrées n’est pas la même notion que le **biais du compromis biais-variance** en apprentissage statistique, même si les deux concernent des erreurs systématiques.

### Robustesse et explicabilité

- **Robustesse** : capacité à conserver un comportement satisfaisant lorsque les conditions changent ou que les données sont perturbées.
- **Explicabilité** : possibilité de fournir aux humains des éléments compréhensibles sur le fonctionnement ou une décision du modèle.
- Une explication utile et la meilleure performance mesurée ne coïncident pas toujours. Le compromis dépend de la méthode et du contexte.

## 6. Enjeux sociaux, politiques et éthiques

Le support aborde les effets sur les emplois et l’économie, la surveillance, la manipulation de l’information et les usages politiques. Il mentionne aussi des usages d’aide aux citoyens, comme la traduction ou l’assistance à la compréhension de documents administratifs.

Les principes cités comprennent le bien humain, la prudence, la robustesse, la vie privée, la transparence, l’équité, l’inclusion et la responsabilité. Le support évoque la Déclaration de Montréal de 2018 et le cadre européen de l’IA. Pour les règles applicables et leur calendrier, consulter les sources officielles à jour.

> [!tip] Méthode pour analyser un système
> Demande-toi à quoi il sert, quelles données il utilise, qui peut être affecté, comment il est évalué, où il échoue et qui prend la décision finale.

## ✅ À retenir

1. IA, machine learning et deep learning ne sont pas synonymes.
2. Dartmouth en 1956 est un repère fondateur, avec des racines bien antérieures.
3. Les systèmes experts s’appuient sur des connaissances et des règles.
4. Une bonne performance peut cacher des raccourcis, des erreurs systématiques ou une mauvaise généralisation.
5. Les bénéfices et les risques dépendent de l’usage et du contexte.
