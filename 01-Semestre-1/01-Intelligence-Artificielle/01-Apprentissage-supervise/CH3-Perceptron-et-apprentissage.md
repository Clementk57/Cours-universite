# Perceptron, apprentissage et généralisation

> [!info] Origine
> Transcription des photographies du cours du 2 novembre. Les exemples pédagogiques sont signalés comme des compléments.

## 1. Neurones binaires

Un neurone binaire possède deux états. Le cours utilise deux notations équivalentes :

$$
\sigma_i\in\{-1,+1\}
\qquad
s_i\in\{0,1\}
\qquad
s_i=\frac{\sigma_i+1}{2}.
$$

Ainsi $\sigma_i=-1$ correspond à $s_i=0$ et $\sigma_i=+1$ à $s_i=1$. La lettre $N$ désigne le nombre de neurones.

Le poids $w_{ij}$ représente l'efficacité de la synapse allant du neurone $j$ vers le neurone $i$. Une synapse est dite excitatrice si $w_{ij}>0$ et inhibitrice si $w_{ij}<0$. Le vecteur des états décrit l'état du réseau.

Le **champ** est une somme pondérée des entrées. Par exemple, si le neurone 4 reçoit les états des neurones 2 et 3 :

$$
h_4=w_{42}\sigma_2+w_{43}\sigma_3.
$$

Plus généralement, $h_i=\sum_j w_{ij}\sigma_j$ et la dynamique peut être écrite $\sigma_i=\operatorname{signe}(h_i)$. La dynamique concerne l'évolution des états. L'apprentissage adapte les poids synaptiques à partir d'exemples.

## 2. Seuil et biais

![[assets/perceptron-entrees.jpg|650]]

*Schéma du cours : les entrées sont reliées au neurone par des poids. L'entrée fictive $x_0$ sert à représenter le biais.*

Pour des entrées $x_1,\ldots,x_N$ et un seuil $\theta$, la sortie du neurone est :

$$
\sigma=\operatorname{signe}\left(\sum_{i=1}^N w_ix_i-\theta\right).
$$

Dans la convention du cours, la sortie vaut $+1$ lorsque le champ corrigé est positif ou nul et $-1$ lorsqu'il est strictement négatif.

On introduit une entrée fictive $x_0=1$ avec $w_0=-\theta$. Le seuil devient alors un **biais** dans la somme :

$$
\widetilde h=\sum_{i=1}^N w_ix_i+w_0x_0
=\sum_{i=1}^N w_ix_i-\theta.
$$

Avec les vecteurs élargis $\vec x=(x_0,x_1,\ldots,x_N)$ et $\vec w=(w_0,w_1,\ldots,w_N)$ :

$$
\widetilde h=\vec w\cdot\vec x
\qquad
\sigma=\operatorname{signe}(\vec w\cdot\vec x).
$$

> [!example] Exemple ajouté
> Si $x=(1,-1)$, $w=(2,1)$ et $\theta=0{,}5$, le champ vaut $2(1)+1(-1)-0{,}5=0{,}5$. La sortie vaut donc $+1$.

## 3. États possibles et séparabilité linéaire

Pour $N$ entrées binaires, il existe $2^N$ configurations d'entrée. Pour deux entrées bipolaires, elles sont $(-1,-1)$, $(-1,+1)$, $(+1,-1)$ et $(+1,+1)$.

![[assets/etats-binaires.jpg|600]]

*Les quatre points représentent les configurations possibles pour deux entrées bipolaires.*

Un perceptron simple représente une séparation par un hyperplan. Il peut donc représenter les classifications **linéairement séparables**. Dans un plan, une droite doit pouvoir séparer les deux classes.

La fonction NAND est linéairement séparable. XOR ne l'est pas, car ses deux classes occupent des coins opposés du carré. Un seul perceptron ne suffit donc pas pour représenter XOR avec ces entrées.

![[assets/nand-xor.jpg|800]]

*À gauche, une droite sépare les classes. À droite, les classes de XOR occupent des coins opposés.*

Le nombre total de fonctions booléennes à $N$ variables vaut $2^{2^N}$. Le cours donne les nombres suivants :

| Nombre d'entrées | Fonctions booléennes | Fonctions linéairement séparables |
| --- | ---: | ---: |
| 2 | 16 | 14 |
| 3 | 256 | 104 |
| 4 | 65 536 | 1 882 |

Pour $N=8$, on obtient $2^{256}\approx10^{77}$. La proportion des fonctions linéairement séparables tend vers zéro quand $N$ grandit.

## 4. Géométrie de la classification

Dans l'espace élargi, la frontière est l'hyperplan $\vec w\cdot\vec x=0$. Le vecteur $\vec w$ lui est normal. Le signe du produit scalaire indique le côté de la frontière.

![[assets/hyperplan-espace-elargi.jpg|600]]

*Représentation du cours dans l'espace élargi avec la coordonnée supplémentaire $x_0$.*

Dans l'espace initial, avec $a=(w_1,\ldots,w_N)$ et $b=w_0$, la frontière est $a\cdot x+b=0$. Pour $a\neq0$, la distance géométrique d'un point $x$ à cette frontière est :

$$
\operatorname{dist}(x,H)=\frac{|a\cdot x+b|}{\lVert a\rVert}.
$$

![[assets/hyperplan-vecteur-normal.jpg|550]]

*Dans le plan, le vecteur des poids est perpendiculaire à la droite de séparation.*

> [!warning] Deux espaces à distinguer
> Le cours donne aussi $\vec w\cdot\vec x/\lVert\vec w\rVert$ dans l'espace élargi. Sa valeur absolue est une distance dans cet espace. Dans l'espace initial, le dénominateur utilise uniquement les poids des variables, sans le biais.

Multiplier tous les coefficients, biais compris, par un même nombre strictement positif conserve les prédictions. Un facteur négatif inverse les signes des classes.

## 5. Champ aligné et stabilité

On dispose de $P$ exemples $x^\mu$ avec les étiquettes voulues $\tau^\mu\in\{-1,+1\}$, pour $\mu=1,\ldots,P$. Le champ aligné est :

$$
y^\mu=\tau^\mu(\vec w\cdot\vec x^\mu)=\tau^\mu h^\mu.
$$

Si $y^\mu>0$, le champ et l'étiquette ont le même signe et l'exemple est correctement classé. Si $y^\mu<0$, il est mal classé. Le cas nul dépend de la convention retenue pour le seuil.

La stabilité du cours est :

$$
\gamma^\mu(\vec w)=\frac{\tau^\mu(\vec w\cdot\vec x^\mu)}{\lVert\vec w\rVert}
=\frac{y^\mu}{\lVert\vec w\rVert}.
$$

Une stabilité positive signifie que l'exemple est du bon côté. Une grande stabilité indique qu'il est plus éloigné de la frontière dans la géométrie considérée, donc moins sensible à de petites perturbations.

![[assets/stabilite-classification.jpg|650]]

*Illustration du cours : deux exemples se trouvent de part et d'autre de la frontière et leurs stabilités sont indiquées.*

## 6. Capacité et règle de Hebb

L'apprentissage cherche à adapter les poids pour classer correctement les patrons. La capacité pose la question du nombre d'exemples que le réseau peut apprendre. Elle dépend notamment des données et de la règle d'apprentissage, avec des limites liées au modèle.

Au tableau, l'ensemble aléatoire contient $P$ patrons à $N$ entrées. Chaque composante $x_j^\mu$ et chaque étiquette $\tau^\mu$ prend $+1$ ou $-1$ avec probabilité $1/2$ dans le modèle considéré.

La règle de Hebb présentée fixe :

$$
w_j=\sum_{\mu=1}^P x_j^\mu\tau^\mu.
$$

Chaque poids additionne les produits entre l'entrée correspondante et la sortie désirée. Il exprime ainsi une corrélation accumulée sur les exemples.

### Développement pour le premier exemple

Pour $\vec w\neq0$ :

$$
\gamma^1=\frac{\tau^1}{\lVert\vec w\rVert}\sum_{j=1}^N w_jx_j^1.
$$

En remplaçant $w_j$ par la règle de Hebb et en isolant le terme $\mu=1$ :

$$
\gamma^1=\frac{1}{\lVert\vec w\rVert}
\left[N+\sum_{j=1}^N\sum_{\mu=2}^P
\tau^1\tau^\mu x_j^1x_j^\mu\right].
$$

Le premier terme vaut $N$ car les variables bipolaires ont un carré égal à 1. Le second terme représente les contributions croisées des autres patrons. Le tableau indique que, pour un grand nombre de termes, leur somme peut être approchée par une loi gaussienne.

> [!warning] Attention à la normalisation
> Le tableau écrit une moyenne $N/\lVert\vec w\rVert$. Cette expression traite la norme comme fixe ou approximativement concentrée. Si les poids sont aléatoires, la norme est elle-même aléatoire. Cette égalité ne doit donc pas être interprétée comme une espérance exacte sans hypothèse supplémentaire.

### Loi normale et variance

La densité d'une variable gaussienne de moyenne $m$ et d'écart type $\sigma>0$ est :

$$
f(s)=\frac{1}{\sigma\sqrt{2\pi}}
\exp\left[-\frac12\left(\frac{s-m}{\sigma}\right)^2\right].
$$

Sa variance est $\sigma^2=\mathbb E[(S-\mathbb E[S])^2]$. Ici $\sigma$ désigne l'écart type, pas l'état du neurone. Les dernières photos demandent de développer la variance et ne montrent pas de résultat final.

### Erreur d'apprentissage

Pour un ensemble de $P$ exemples équiprobables, une définition pratique de l'erreur empirique est :

$$
\varepsilon_{\mathrm{train}}=\frac1P\sum_{\mu=1}^P
\mathbf 1\{\widehat\tau^\mu\neq\tau^\mu\}.
$$

Elle vaut 0 si tous les exemples sont correctement classés et 1 s'ils sont tous mal classés. Le tableau considère aussi la probabilité d'un champ aligné négatif. Le traitement des exemples exactement sur la frontière dépend de la convention choisie.

> [!tip] À retenir
> Les poids définissent une frontière. Le signe du champ donne une classe. La stabilité mesure de quel côté se trouve l'exemple et son éloignement dans l'espace considéré.
