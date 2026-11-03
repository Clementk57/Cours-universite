# 🧠 Cours 4 — Capacité du perceptron et généralisation

> [!info] Place dans le cours
> Cette note retranscrit les photos du **3 novembre 2026**. Elle continue [[CH3-Perceptron-et-apprentissage|le cours sur le perceptron et la règle de Hebb]]. Les explications et exemples ajoutés sont signalés. Les [[Archives photographiques - capacite et generalisation|23 photos originales]] restent disponibles.

## 🗺️ Sommaire

1. [[#Rappels sur les notations|Notations et règle de Hebb]]
2. [[#Capacité et bruit dû aux autres patrons|Capacité et variance]]
3. [[#Probabilité d'erreur et loi normale|Probabilité d'erreur et fonction d'erreur]]
4. [[#Capacité annoncée sur le support|Capacité annoncée sur le support]]
5. [[#Généralisation et perceptron professeur|Perceptron professeur et généralisation]]
6. [[#Expérience humaine sur XOR|Expérience sur XOR]]
7. [[#La règle Minerror|Minerror]]
8. [[#Exercices rapides|Exercices rapides]]

> [!abstract] L'idée du cours
> On étudie d'abord combien de patrons un perceptron peut mémoriser avec la règle de Hebb, puis sa capacité à retrouver la règle sur de nouveaux exemples. Les deux notions sont différentes.

## Rappels sur les notations

| Symbole | Signification |
|---|---|
| $N$ | Nombre d'entrées |
| $P$ | Nombre de patrons ou exemples |
| $\mu,\nu$ | Indices des patrons, les lettres grecques se lisent « mu » et « nu » |
| $j,k$ | Indices des entrées |
| $x_j^\mu$ | Entrée $j$ du patron $\mu$, ici $+1$ ou $-1$ |
| $\tau^\mu$ | Étiquette attendue du patron $\mu$ |
| $w_j$ | Poids associé à l'entrée $j$ |
| $\alpha=P/N$ | Rapport entre le nombre de patrons et le nombre d'entrées |
| $\gamma^\mu$ | Stabilité ou champ aligné normalisé |

La règle de Hebb présentée précédemment est :

$$
w_j=\sum_{\mu=1}^{P}x_j^\mu\tau^\mu
\qquad
h^\mu=\sum_{j=1}^{N}w_jx_j^\mu
\qquad
\gamma^\mu=\frac{\tau^\mu h^\mu}{\lVert w\rVert}.
$$

Lorsque $\lVert w\rVert>0$, le signe de $\gamma^\mu$ est celui du champ aligné $\tau^\mu h^\mu$. Une valeur strictement négative indique une erreur. À zéro, la décision dépend de la convention choisie pour $\operatorname{signe}(0)$.

## Capacité et bruit dû aux autres patrons

### 1. Développer la stabilité du premier patron

Le tableau choisit $\mu=1$. En remplaçant chaque poids $w_j$ par sa formule :

$$
\gamma^1
=\frac{\tau^1}{\lVert w\rVert}
 \sum_{j=1}^{N}
 \left(\sum_{\mu=1}^{P}x_j^\mu\tau^\mu\right)x_j^1.
$$

On sépare la contribution du premier patron des contributions des autres patrons :

$$
\gamma^1
=\frac{1}{\lVert w\rVert}
\left[
N+
\sum_{j=1}^{N}\sum_{\mu=2}^{P}
\tau^1\tau^\mu x_j^1x_j^\mu
\right].
$$

**Pourquoi $N$ ?** Pour $\mu=1$, chaque terme vaut $(\tau^1)^2(x_j^1)^2=1$. Il y a $N$ valeurs de $j$, donc leur somme vaut $N$.

> [!example] Interprétation ajoutée
> Bentley veut mémoriser plusieurs codes. Pour reconnaître le premier, sa propre contribution renforce le bon signal. Les autres codes créent des interférences qui peuvent aider ou gêner. Le premier terme est le signal, le second représente les interférences.

### 2. Calculer la variance de la somme d'interférences

Pour simplifier l'écriture, posons :

$$
B=\sum_{j=1}^{N}\sum_{\mu=2}^{P}
\tau^1\tau^\mu x_j^1x_j^\mu.
$$

Dans le modèle de patrons et d'étiquettes aléatoires indépendants et équilibrés, le tableau développe le carré avec une seconde copie des indices :

$$
B^2=
\sum_{j=1}^{N}\sum_{k=1}^{N}
\sum_{\mu=2}^{P}\sum_{\nu=2}^{P}
(\tau^1)^2
\tau^\mu\tau^\nu
x_j^1x_k^1x_j^\mu x_k^\nu.
$$

Les termes dont les indices ne se correspondent pas ont une moyenne nulle sous ces hypothèses. Les termes avec $j=k$ et $\mu=\nu$ valent 1. Il y a $N$ choix de $j$ et $P-1$ choix de $\mu$. Ainsi :

$$
\mathbb E[B]=0
\qquad
\operatorname{Var}(B)=N(P-1).
$$

Pour $P$ grand, le tableau remplace $P-1$ par $P$ :

$$
\operatorname{Var}(B)\simeq NP.
$$

Le cours écrit ensuite, pour la stabilité normalisée, une variance approchée $NP/\lVert w\rVert^2$ et un écart type approché $\sqrt{NP}/\lVert w\rVert$.

> [!warning] Attention à l'approximation
> Les résultats exacts ci-dessus concernent $B$, la somme **non normalisée**. La norme $\lVert w\rVert$ dépend elle-même des exemples aléatoires. La traiter comme une constante ou une quantité concentrée est une approximation supplémentaire, pas une identité générale pour la variance de $\gamma^1$.

### 3. Quand les interférences augmentent

Dans l'approximation du cours, le signal a pour moyenne $m\simeq N/\lVert w\rVert$ et l'écart type est $\sigma\simeq\sqrt{NP}/\lVert w\rVert$. Leur rapport devient :

$$
\frac{m}{\sigma}
\simeq\frac{N/\lVert w\rVert}{\sqrt{NP}/\lVert w\rVert}
=\sqrt{\frac NP}
=\frac{1}{\sqrt\alpha}
\qquad
\alpha=\frac PN.
$$

Si $\alpha$ augmente, le signal devient moins grand relativement aux fluctuations dans ce modèle. La probabilité de classement incorrect augmente.

![[assets/COUR-4/hebb-stabilite-et-erreur.jpg|700]]

*Graphiques du support. La zone à gauche de zéro représente les stabilités négatives. Le deuxième dessin illustre l'erreur selon la charge $\alpha$.*

## Probabilité d'erreur et loi normale

Le cours approxime la stabilité par une variable gaussienne de moyenne $m$ et d'écart type $\sigma>0$ :

$$
p(\gamma)=\frac{1}{\sqrt{2\pi}\sigma}
\exp\left[-\frac{(\gamma-m)^2}{2\sigma^2}\right].
$$

La probabilité que la stabilité soit négative est l'aire sous la courbe entre $-\infty$ et $0$ :

$$
P(\gamma<0)=\int_{-\infty}^{0}p(\gamma)\,d\gamma.
$$

### Changement de variable détaillé

Le tableau pose $s=(\gamma-m)/\sigma$, d'où $d\gamma=\sigma\,ds$. Quand $\gamma=0$, la nouvelle borne est $s=-m/\sigma$. On obtient :

$$
P(\gamma<0)
=\int_{-\infty}^{-m/\sigma}
\frac{1}{\sqrt{2\pi}}e^{-s^2/2}\,ds
=\Phi\left(-\frac m\sigma\right).
$$

Ici $\Phi$ est la fonction de répartition de la loi normale centrée réduite. Pour le cas aléatoire et les approximations du tableau :

$$
\boxed{\varepsilon_{\mathrm{train}}\simeq
\Phi\left(-\frac1{\sqrt\alpha}\right).}
$$

Cette formule concerne un **patron d'entraînement** dans le modèle aléatoire décrit. Elle ne s'applique pas automatiquement à toutes les données ni à tous les algorithmes.

### Fonction d'erreur

La définition mathématique usuelle est :

$$
\operatorname{erf}(x)=\frac{2}{\sqrt\pi}
\int_0^x e^{-u^2}\,du
\qquad
\Phi(z)=\frac12\left[1+\operatorname{erf}\left(\frac z{\sqrt2}\right)\right].
$$

> [!warning] Différence avec la photo
> Le tableau et la diapositive semblent afficher $2/\pi$. La définition standard utilise **$2/\sqrt\pi$**. On conserve ici la formule corrigée.

## Capacité annoncée sur le support

La diapositive indique pour la règle de Hebb $\alpha_{\mathrm{critique}}\approx0{,}14$ et illustre $P\lesssim0{,}14N$. Elle donne l'exemple $N=100$ et $P\lesssim14$ patrons.

Elle mentionne aussi $\alpha_{\max}^{\mathrm{perceptron}}=2$, soit $P_{\max}\approx2N$, dans le cadre théorique considéré pour des patrons aléatoires et une séparation linéaire.

> [!warning] Comment interpréter ces nombres ?
> Ce sont des repères du modèle et des hypothèses du cours, pas une garantie pour n'importe quel jeu de données. La formule gaussienne $\Phi(-1/\sqrt\alpha)$ n'est pas exactement nulle pour tout $\alpha>0$. Le critère précis qui conduit à $0{,}14$ n'est pas expliqué sur les photos. Il ne faut donc pas présenter ce nombre comme un seuil universel d'erreur exactement nulle. Le résultat proche de $2N$ concerne la capacité de séparation dans un cadre asymptotique, pas une réussite garantie pour toute configuration finie.

## Généralisation et perceptron professeur

### 1. Apprendre une règle plutôt que retenir des réponses

Le support introduit un **perceptron professeur** dont les poids sont $T=(T_1,\ldots,T_N)$. Il attribue à chaque patron une étiquette :

$$
\tau^\mu=\operatorname{signe}(T\cdot x^\mu).
$$

L'ensemble d'apprentissage contient des couples $(x^\mu,\tau^\mu)$. Le perceptron élève utilise ces couples pour construire ses poids $w$. On l'évalue ensuite sur un exemple nouveau issu de la distribution considérée.

> [!example] Exemple ajouté avec Sly
> Bentley classe des passages comme sûrs ou dangereux à partir d'une règle. Sly observe quelques exemples et essaie d'appliquer la règle à un passage jamais vu. Répéter les exemples connus mesure sa mémorisation. Réussir sur des passages nouveaux mesure sa généralisation.

### 2. Cas particulier du premier neurone

Le support choisit $T=(1,0,\ldots,0)$. Alors :

$$
\tau^\mu
=\operatorname{signe}\left(\sum_jT_jx_j^\mu\right)
=\operatorname{signe}(x_1^\mu)
=x_1^\mu,
$$

car les entrées sont égales à $+1$ ou $-1$. La bonne étiquette dépend seulement de la première entrée.

Le cours obtient alors, pour un patron d'apprentissage dans l'approximation de grande taille :

$$
\varepsilon_{\mathrm{train}}
\simeq\Phi\left(-\frac{1+\alpha}{\sqrt{\alpha}}\right).
$$

**Pourquoi apparaît $1+\alpha$ ?** Dans ce cas, le signal du patron étudié apporte environ $N$, et la structure commune à tous les exemples ajoute environ $P$. Leur somme, divisée par $\sqrt{NP}$, donne $(N+P)/\sqrt{NP}=(1+\alpha)/\sqrt\alpha$.

> [!note] Complément de calcul
> Avec les entrées indépendantes équilibrées et la règle de Hebb, le champ aligné non normalisé du premier exemple a une moyenne $N+P-1$ et une variance $(N-1)(P-1)$. La formule du support utilise une approximation gaussienne quand $N$ et $P$ sont grands. La normalisation par une norme positive ne change pas le signe du champ.

![[assets/COUR-4/enseignant-erreur-apprentissage.jpg|650]]

*Schéma du support comparant les comportements selon que les étiquettes sont aléatoires ou produites par une règle simple.*

### 3. Erreur de généralisation

L'erreur de généralisation mesure la probabilité d'une mauvaise prédiction sur un **nouvel exemple** :

$$
\varepsilon_g
=P_{(x,\tau)\ \mathrm{nouveau}}
\left(\operatorname{signe}(w\cdot x)\neq\tau\right).
$$

Dans le cas particulier $T=(1,0,\ldots,0)$, le tableau trouve pour le champ aligné de test une moyenne $P$ et une variance $P(N-1)$ avant normalisation. En utilisant l'approximation gaussienne, puis $N\gg1$ et $\alpha=P/N$ :

$$
\boxed{\varepsilon_g\simeq\Phi(-\sqrt\alpha).}
$$

Le rapport signal sur écart type vaut approximativement $\sqrt\alpha$. Il augmente ici avec le nombre de patrons par entrée.

![[assets/COUR-4/generalisation-et-apprentissage.jpg|750]]

*Graphique du support. Les courbes illustrent le modèle et ses hypothèses. Les annotations « apprendre par cœur » et « généraliser » ne constituent pas une règle universelle valable pour tous les jeux de données.*

> [!important] Entraînement et test
> Une faible erreur d'apprentissage ne garantit pas une faible erreur de généralisation. Les formules diffèrent selon que les étiquettes sont aléatoires ou produites par un professeur.

## Expérience humaine sur XOR

Le support présente une expérience attribuée à S. J. Thorpe, K. O. Regan et A. Pouget, Paris, 1989. Des configurations de carrés lumineux dans une grille $4\times4$ sont présentées et les participants cherchent la règle.

| Règle présentée | Description |
|---|---|
| Simple | Un carré est allumé |
| ET ou AND | Une paire de carrés est allumée |
| OU exclusif ou XOR | L'un ou l'autre est allumé, mais pas les deux |

Le graphique montre le pourcentage de règles trouvées en fonction du nombre de présentations. Dans cette expérience, la règle simple et la règle AND sont davantage trouvées que XOR.

![[assets/COUR-4/experience-xor.jpg|700]]

*Graphique photographié dans le cours. Il décrit cette expérience, pas une impossibilité générale pour les humains de résoudre XOR.*

## La règle Minerror

Le support introduit une fonction de coût construite à partir de la stabilité de chaque patron :

$$
\langle n\rangle=\sum_{\mu=1}^{P}V(\gamma^\mu,\beta)
\qquad
V(\gamma,\beta)=\frac12
\left[1-\tanh\left(\frac{\beta\gamma}{2}\right)\right].
$$

Le support appelle $\beta$ un taux de bruit et introduit une température $T=1/\beta$. Dans cette convention, $\beta$ est donc l'inverse de la température.

Pour $\beta>0$ :

- si $\gamma$ est très négative, $V$ est proche de 1
- si $\gamma=0$, $V=1/2$
- si $\gamma$ est très positive, $V$ est proche de 0

Minerror cherche à minimiser cette somme pour ajuster les poids. La fonction donne une version lissée de la pénalité liée aux erreurs. Le support présenté s'arrête à la fonction de coût et ne donne pas ici toutes les étapes de l'algorithme.

![[assets/COUR-4/minimerror-potentiel.jpg|650]]

*Graphique du cours illustrant la fonction de coût et une courbe centrée sur la frontière de décision.*

> [!tip] Détail mathématique ajouté
> La dérivée exacte est $\frac{\partial V}{\partial\gamma}=-\frac{\beta}{4}\operatorname{sech}^2(\beta\gamma/2)$. Sa valeur est négative. Une courbe positive en cloche peut représenter son opposé ou une version normalisée, pas cette dérivée signée telle quelle.

## Exercices rapides

### Exercice 1 — Calculer la charge

Un perceptron dispose de $N=100$ entrées et apprend $P=14$ exemples. Calcule $\alpha$.

> [!success]- Correction
> $\alpha=P/N=14/100=0{,}14$. Cela correspond au repère indiqué sur la diapositive pour Hebb, sous les hypothèses du cours.

### Exercice 2 — Signal propre

Pour chaque $j$, on sait que $x_j^1$ et $\tau^1$ valent $+1$ ou $-1$. Simplifie $\sum_{j=1}^{N}(\tau^1)^2(x_j^1)^2$.

> [!success]- Correction
> Chaque carré vaut 1. La somme contient $N$ fois 1, donc vaut $N$.

### Exercice 3 — Entraînement ou généralisation ?

Un modèle classe correctement tous les exemples qu'il a étudiés, mais se trompe souvent sur de nouveaux exemples. Quelles erreurs sont faibles et élevées ?

> [!success]- Correction
> L'erreur d'apprentissage est faible ou nulle. L'erreur de généralisation est élevée. Mémoriser les exemples ne suffit pas à garantir une bonne performance sur de nouveaux cas.

### Exercice 4 — Professeur simple

Avec $T=(1,0,0)$ et $x=(-1,+1,-1)$, quelle est l'étiquette donnée par le professeur ?

> [!success]- Correction
> $T\cdot x=1(-1)+0(+1)+0(-1)=-1$. L'étiquette est donc $\tau=-1$.

Pour d'autres exercices, voir [[Exercices-perceptron]].
