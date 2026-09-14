# Optimisation non linéaire

> [!abstract] Chapitre 1 — Introduction et bases mathématiques
> Cours retranscrit à partir des photos du tableau et des diapositives.

## Bases mathématiques

Les domaines de base sont les suivants :

- l'analyse, notamment les fonctions de plusieurs variables
- l'algèbre des matrices

## Notion de programme mathématique

### Définition

Un **programme mathématique** est un problème de la forme :

$$
\begin{aligned}
\text{(Max)} \quad \min \quad & f(x) \\
\text{sous contraintes} \quad & g_i(x) \leq 0 \quad \text{pour } i = 1, \ldots, m \\
& x \in S \subset \mathbb{R}^n
\end{aligned}
$$

avec :

$$
\begin{aligned}
f : \mathbb{R}^n &\longrightarrow \mathbb{R}, & x &\longmapsto f(x) \\
g_i : \mathbb{R}^n &\longrightarrow \mathbb{R}, & x &\longmapsto g_i(x).
\end{aligned}
$$

> [!info] Vocabulaire
> La fonction $f$ est la fonction objectif. Les fonctions $g_i$ représentent les contraintes. L'ensemble $S$ représente l'ensemble dans lequel la solution $x$ doit se trouver.

### Exemple de programme linéaire

Le cours donne l'exemple suivant :

$$
\begin{aligned}
\min \quad & f(x) = 5x_1 + 5x_2 \\
\text{sous contraintes} \quad & g_1(x) = 10 - (3x_1 + 2x_2) \leq 0 \\
& g_2(x) = 15 - (2x_1 + 3x_2) \leq 0 \\
& x \in \mathbb{R}_+^2
\end{aligned}
$$

Lorsque les fonctions de l'objectif et des contraintes sont linéaires, le problème appartient à la **programmation linéaire**.

> [!note] Domaine positif
> $mathbb{R}_+^2$ désigne les couples $(x_1,x_2)$ dont les deux composantes sont positives ou nulles.

### Exemples de programmes non linéaires

#### Premier exemple

$$
\begin{aligned}
\min \quad & f(x) = 2x_1^2 + 4x_2^3 \\
\text{sous contraintes} \quad & x_1^2 + x_2^2 \leq 4 \\
& x \in \mathbb{R}_+^2
\end{aligned}
$$

#### Exemple résolu au tableau

$$
\begin{aligned}
\min \quad & f(x) = 2x_1^2 + 4x_2^2 \\
\text{sous contraintes} \quad & x_1^2 + x_2^2 \leq 4 \\
& x \in \mathbb{R}_+^2
\end{aligned}
$$

La solution optimale indiquée dans le cours est :

$$
x^\star = (0,0)
\qquad \text{et} \qquad
f(x^\star) = 0.
$$

## Typologie des programmes mathématiques

| Hypothèses sur le problème | Type de programme |
| --- | --- |
| $f$ et $g_i$ sont non linéaires et continues, $S$ est compact | Programmation mathématique continue |
| $f$ est non linéaire, $m = 0$ et $S = \mathbb{R}^n$ | Optimisation non linéaire sans contraintes |
| $f$ et $g_i$ sont convexes | Programmation mathématique convexe |
| $f$ et $g_i$ sont linéaires, $S$ est continu | Programmation linéaire continue |
| $f$ et $g_i$ sont linéaires, $S$ est discret | Programmation linéaire en nombres entiers |

### Cas d'une fonction linéaire sans contrainte

Le cours présente le cas suivant :

$$
\begin{aligned}
\min \quad & f(x) \\
\text{sous contraintes} \quad & x \in \mathbb{R}^n
\end{aligned}
$$

Exemple :

$$
\begin{aligned}
\min \quad & 4x_1 + 5x_2 \\
\text{sous contraintes} \quad & x_1, x_2 \in \mathbb{R}
\end{aligned}
$$

## Produit scalaire et normes vectorielles

On travaille dans $\mathbb{R}^n$, l'espace des vecteurs de dimension $n$.

### Produit scalaire euclidien

Pour $x, y \in \mathbb{R}^n$, le produit scalaire euclidien est défini par :

$$
\langle x,y \rangle = \sum_{i=1}^{n} x_i y_i = x^\mathsf{T}y.
$$

avec :

$$
x^\mathsf{T} = (x_1, x_2, \ldots, x_n)
$$

et :

$$
x^\mathsf{T}y = x_1y_1 + x_2y_2 + \ldots + x_ny_n.
$$

### Normes usuelles

Pour $x \in \mathbb{R}^n$ :

$$
\lVert x \rVert_1 = \sum_{i=1}^{n} \lvert x_i \rvert
$$

$$
\lVert x \rVert_2 = \sqrt{\sum_{i=1}^{n} x_i^2} = \sqrt{\langle x,x \rangle}
$$

$$
\lVert x \rVert_\infty = \max_{1 \leq i \leq n} \lvert x_i \rvert.
$$

### Exemple graphique

Pour les vecteurs $x = (2,0)$ et $y = (0,1)$, le cours indique :

$$
\langle x,y \rangle = 0.
$$

Le schéma correspondant est conservé ci-dessous.

![[assets/Pasted image 20260914133837.png|700]]

## Dérivation et différentiabilité

Pour la fonction suivante :

$$
f(x) = 2x^2 - 3
\qquad \text{avec} \qquad x \in \mathbb{R}
$$

sa dérivée est :

$$
f'(x) = 4x.
$$

> [!tip] Condition nécessaire au point optimal
> Dans le cadre différentiable présenté en cours, la dérivée est nulle à l'optimum.

La tangente à la courbe de $f$ au point d'abscisse $a$ est donnée par :

$$
t_a(x) = f(a) + f'(a)(x-a).
$$

Pour $a = 2$ :

$$
f(2) = 5.
$$

Les intersections avec l'axe des abscisses sont obtenues en résolvant :

$$
2x^2 - 3 = 0.
$$

Ainsi :

$$
2x^2 = 3
\qquad \Longleftrightarrow \qquad
x^2 = \frac{3}{2}
\qquad \Longleftrightarrow \qquad
x = \pm\sqrt{\frac{3}{2}}.
$$

## Gradient et Hessienne

> [!info] Gradient
> Le gradient est la généralisation de la notion de dérivée en dimension $n$ quelconque.

Le gradient de $f$ en $x$ est :

$$
\nabla f(x) = \left(\frac{\partial f}{\partial x_i}(x)\right)_{i=1,\ldots,n}.
$$

### Exemple de calcul du gradient

Pour :

$$
f(x) = x_1^2 + 4x_2^3
$$

on obtient :

$$
\nabla f(x) =
\begin{pmatrix}
2x_1 \\
12x_2^2
\end{pmatrix}.
$$

### Matrice Hessienne

Si chaque dérivée partielle $\frac{\partial f}{\partial x_i}$ est différentiable, la matrice Hessienne est :

$$
\nabla^2 f(x) =
\left(
\frac{\partial^2 f}{\partial x_i \partial x_j}(x)
\right)_{i,j=1,\ldots,n}.
$$

Si $f$ est de classe $C^2$, alors $\nabla^2 f(x)$ est symétrique, d'après le théorème de Schwarz.

### Illustration des conditions nécessaires

Le cours considère :

$$
f : \mathbb{R}^2 \longrightarrow \mathbb{R}
\qquad \text{avec} \qquad
f(x_1,x_2) = x_1^2 + x_2^4.
$$

Le point étudié est :

$$
x^\star = (0,0).
$$

Le gradient de cette fonction est :

$$
\nabla f(x_1,x_2) =
\begin{pmatrix}
2x_1 \\
4x_2^3
\end{pmatrix}.
$$

Au point $x^\star$ :

$$
\nabla f(0,0) =
\begin{pmatrix}
0 \\
0
\end{pmatrix}.
$$

La première condition nécessaire est donc satisfaite : le point $(0,0)$ est stationnaire.

La Hessienne est :

$$
\nabla^2 f(x_1,x_2) =
\begin{pmatrix}
2 & 0 \\
0 & 12x_2^2
\end{pmatrix}.
$$

En $(0,0)$, elle devient :

$$
\nabla^2 f(0,0) =
\begin{pmatrix}
2 & 0 \\
0 & 0
\end{pmatrix}.
$$

Pour tout vecteur $u=(u_1,u_2)^T$, on obtient :

$$
u^T \nabla^2 f(0,0) u = 2u_1^2 \geq 0.
$$

La Hessienne est donc semi-définie positive. Enfin, comme $x_1^2 \geq 0$ et $x_2^4 \geq 0$, on a :

$$
f(x_1,x_2) \geq 0 = f(0,0).
$$

> [!success] Conclusion de l'illustration
> Le point $(0,0)$ vérifie les deux conditions nécessaires et c'est bien un minimum global de $f$.

![[assets/IMG_7341.jpeg|800]]

## Développement de Taylor-Young à l'ordre 2

> [!note] Formule de Taylor-Young
> Soit $f : \mathbb{R}^n \longrightarrow \mathbb{R}$ une fonction de classe $C^2$. Au voisinage de $x^\star$, son développement limité à l'ordre $2$ est :

$$
\begin{aligned}
f(x) ={}& f(x^\star)
+ \nabla f(x^\star)^T(x-x^\star) \\
&+ \frac{1}{2}(x-x^\star)^T \nabla^2 f(x^\star)(x-x^\star) \\
&+ \lVert x-x^\star \rVert^2 \varepsilon(x-x^\star),
\end{aligned}
$$

avec :

$$
\lim_{x \to x^\star} \varepsilon(x-x^\star) = 0.
$$

Ce développement est la base des conditions d'optimalité et de la caractérisation de la convexité.

### Lecture de la formule

En posant $h=x-x^\star$, la formule compare la valeur de $f$ en un point proche $x$ avec sa valeur au point de référence $x^\star$.

- Le terme $f(x^\star)$ est la valeur au point étudié
- Le terme $\nabla f(x^\star)^T h$ est l'approximation de premier ordre
- Le terme $\frac{1}{2}h^T\nabla^2f(x^\star)h$ décrit la courbure de la fonction
- Le dernier terme devient négligeable quand $x$ se rapproche de $x^\star$

Si $x^\star$ est un minimum local, il ne doit exister aucune petite direction qui fasse diminuer $f$. Cela impose que le gradient soit nul et que la courbure ne soit pas négative.

## Conditions nécessaires d'optimalité locale

> [!important] Théorème
> Soit $f$ de classe $C^2$ sur $\mathbb{R}^n$. Si $x^\star$ est un minimum local ou global, alors :
>
> 1. $\nabla f(x^\star) = 0$  
>    C'est la condition de **stationnarité**
>
> 2. $\nabla^2 f(x^\star) \succeq 0$  
>    La Hessienne est **semi-définie positive**

Pour une fonction d'une seule variable, ces deux conditions deviennent :

$$
f'(x^\star) = 0
\qquad \text{et} \qquad
f''(x^\star) \geq 0.
$$

> [!warning] Sens logique du théorème
> Minimum local ou global implique stationnarité et Hessienne semi-définie positive. La réciproque n'est pas toujours vraie.

### Sens de « semi-définie positive »

> [!definition] Définition
> Une matrice symétrique $A \in \mathbb{R}^{m \times m}$ est semi-définie positive si et seulement si :

$$
\forall x \in \mathbb{R}^m,
\qquad
x^T A x \geq 0.
$$

### Pourquoi ces conditions sont seulement nécessaires

Elles permettent d'écarter certains points, mais elles ne garantissent pas à elles seules qu'un point est un minimum.

#### Contre-exemple 1 — un maximum

Soit :

$$
f(x) = -x^2.
$$

Au point $x^\star = 0$ :

$$
f'(x) = -2x
\qquad \text{donc} \qquad
f'(0) = 0,
$$

mais :

$$
f''(x) = -2 < 0.
$$

Le point $0$ est donc un **maximum local**, et non un minimum.

![[assets/IMG_7347.jpeg|800]]

#### Contre-exemple 2 — un point qui n'est ni minimum ni maximum

Soit :

$$
f(x) = x^3.
$$

Au point $x^\star = 0$ :

$$
f'(x) = 3x^2
\qquad \text{et} \qquad
f''(x) = 6x,
$$

d'où :

$$
f'(0) = 0
\qquad \text{et} \qquad
f''(0) = 0.
$$

Les deux conditions nécessaires sont satisfaites, mais $0$ n'est ni un minimum local ni un maximum local car la fonction change de signe autour de $0$.

![[assets/IMG_7349 1.jpeg|800]]

## Notion d'optimum global

> [!success] Définition
> La solution $x^\star \in D$ est dite **optimum global** du problème $(P)$ si :
>
> $$
> f(x^\star) \leq f(x) \qquad \forall x \in D.
> $$

Un optimum global est meilleur que tous les points autorisés de $D$.

Un optimum local est seulement meilleur que les points suffisamment proches. Il existe un rayon $r>0$ tel que :

$$
f(x^\star) \leq f(x)
\qquad
\forall x \in D \cap B(x^\star,r).
$$

Un optimum global est donc toujours un optimum local. L'inverse n'est pas forcément vrai.

![[assets/Pasted image 20260914134407.png|850]]
