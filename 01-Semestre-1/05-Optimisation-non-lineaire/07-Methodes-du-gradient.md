# 3 — Méthodes du gradient

> [!info] Parcours
> [[05-Bases-et-optimalite|Bases et optimalité]] → [[06-Convexite-et-valeurs-propres|Convexité]] → [[07-Methodes-du-gradient|Gradient]] → [[02-Calculs-gradient-et-hessienne|Calculs du cours]] → [[03-Dichotomie-et-Newton|Newton]] → [[04-Quasi-Newton-et-gradient-stochastique|Quasi-Newton]]

## Direction de descente

> [!definition] Définition du cours
> Soient $x\in\mathbb{R}^n$ et $d\in\mathbb{R}^n\setminus\{0\}$. Le vecteur $d$ est une **direction de descente** de $f$ au point $x$ s'il existe $\nu>0$ tel que :
>
> $$
> f(x+\alpha d)<f(x)
> \qquad
> \forall\alpha\in(0,\nu].
> $$

Autrement dit, si l'on part de $x$ et que l'on avance d'un petit pas positif dans la direction $d$, la valeur de la fonction diminue.

Pour une fonction différentiable, on utilise l'approximation :

$$
f(x+\alpha d)
=f(x)+\alpha\nabla f(x)^Td+o(\alpha).
$$

On en déduit le critère pratique suivant.

> [!important] Critère de descente
> Si :
>
> $$
> \nabla f(x)^Td<0,
> $$
>
> alors $d$ est une direction de descente de $f$ en $x$.

### Direction de plus forte descente

Lorsque $\nabla f(x)\neq0$, le choix naturel est :

$$
d=-\nabla f(x).
$$

En effet :

$$
\nabla f(x)^Td
=\nabla f(x)^T\bigl(-\nabla f(x)\bigr)
=-\lVert\nabla f(x)\rVert^2
<0.
$$

Le vecteur $-\nabla f(x)$ indique donc la direction de plus forte diminution locale de la fonction pour la norme euclidienne.

### Principe de la méthode du gradient

À partir d'un point initial $x_0$, on construit une suite :

$$
x_{k+1}=x_k-\alpha_k\nabla f(x_k),
$$

où $\alpha_k>0$ est le pas de déplacement.

```mermaid
flowchart LR
    A[Point actuel xₖ] --> B[Calculer le gradient ∇f(xₖ)]
    B --> C[Prendre la direction opposée]
    C --> D[Choisir un pas αₖ]
    D --> E[Calculer xₖ₊₁]
    E --> F{Gradient assez petit}
    F -- Non --> B
    F -- Oui --> G[Arrêt]
```

> [!warning] Rôle du pas
> Un pas trop grand peut dépasser la vallée et faire augmenter la fonction. Un pas trop petit fait progresser très lentement. Le choix de $\alpha_k$ est donc essentiel.

## Méthode de résolution à retenir

Pour un problème sans contrainte, on peut suivre l'ordre suivant :

1. Calculer le gradient $\nabla f(x)$
2. Résoudre $\nabla f(x)=0$
3. Calculer la Hessienne $\nabla^2f(x)$
4. Étudier ses valeurs propres
5. Conclure sur la nature de chaque point stationnaire
6. Vérifier si la convexité permet de transformer le minimum local en minimum global

> [!abstract] Résumé express
> Gradient nul donne un candidat.
>
> Hessienne définie positive au candidat donne un minimum local strict.
>
> Hessienne semi-définie positive partout donne une fonction convexe.
>
> Fonction convexe et gradient nul donnent un minimum global.
>
> Le vecteur opposé au gradient fournit une direction de descente.

---

# Chapitre 2 — Méthodes de gradient

## Pourquoi l'opposé du gradient fait descendre

Le critère précédent permet déjà de vérifier rapidement que $-\nabla f(x)$ est une direction de descente. Le cours donne aussi une justification plus détaillée à partir du développement de Taylor.

Supposons que $f$ soit de classe $C^2$ au voisinage de $x^*$ et que $\nabla f(x^*)\neq0$. Pour $x$ proche de $x^*$, on écrit :

$$
\begin{aligned}
f(x)
={}&f(x^*)+\nabla f(x^*)^T(x-x^*)\\
&+\frac12(x-x^*)^T\nabla^2f(x^*)(x-x^*)\\
&+\lVert x-x^*\rVert^2\varepsilon(x-x^*)
\end{aligned}
$$

avec $\varepsilon(h)\to0$ lorsque $h\to0$.

On choisit maintenant un déplacement opposé au gradient :

$$
x=x^*-\alpha\nabla f(x^*)
$$

où $\alpha>0$. Alors :

$$
\begin{aligned}
f(x)-f(x^*)
={}&-\alpha\lVert\nabla f(x^*)\rVert^2\\
&+\frac{\alpha^2}{2}\nabla f(x^*)^T\nabla^2f(x^*)\nabla f(x^*)\\
&+\alpha^2\lVert\nabla f(x^*)\rVert^2
\varepsilon\bigl(-\alpha\nabla f(x^*)\bigr)
\end{aligned}
$$

Le premier terme est strictement négatif et il est d'ordre $\alpha$. Les deux autres termes sont d'ordre $\alpha^2$. Pour $\alpha$ suffisamment petit, le terme négatif domine donc les autres et :

$$
f\bigl(x^*-\alpha\nabla f(x^*)\bigr)<f(x^*).
$$

> [!success] Conclusion
> Lorsque $\nabla f(x^*)\neq0$, le vecteur $-\nabla f(x^*)$ est bien une direction de descente en $x^*$.

> [!warning] Ce que la preuve ne dit pas
> Elle garantit la descente pour un pas suffisamment petit. Elle ne garantit pas qu'un pas arbitrairement grand fera diminuer la fonction.

## Courbes et ensembles de niveau

Soient $f:\mathbb{R}^n\to\mathbb{R}$ et $c\in\mathbb{R}$. L'ensemble de niveau associé à $c$ est :

$$
N_c=\left\{x\in\mathbb{R}^n\mid f(x)=c\right\}.
$$

Dans le plan, on parle souvent de **courbe de niveau**. Tous les points d'une même courbe donnent exactement la même valeur de $f$.

### Lien entre le gradient et une courbe de niveau

Considérons une courbe $\gamma(t)$ qui reste dans $N_c$. On a :

$$
f\bigl(\gamma(t)\bigr)=c.
$$

En dérivant par rapport à $t$ :

$$
\nabla f\bigl(\gamma(t)\bigr)^T\gamma'(t)=0.
$$

Le vecteur $\gamma'(t)$ est tangent à la courbe de niveau. Le gradient lui est donc orthogonal.

> [!important] Propriété géométrique
> Si $f$ est différentiable et si $\nabla f(x)\neq0$, alors le gradient est perpendiculaire à la courbe de niveau qui passe par $x$.
>
> $$
> \nabla f(x)\perp N_{f(x)}
> $$
>
> Le gradient pointe vers la plus forte augmentation locale. Son opposé pointe vers la plus forte diminution locale.

### Exemple avec $f(x_1,x_2)=x_1^2+x_2^4$

Les courbes de niveau vérifient :

$$
x_1^2+x_2^4=c.
$$

Le gradient vaut :

$$
\nabla f(x_1,x_2)=
\begin{pmatrix}
2x_1\\
4x_2^3
\end{pmatrix}.
$$

Au point considéré, le gradient est normal à la courbe de niveau. Le vecteur $-\nabla f$ pointe vers des niveaux plus faibles et donc vers le minimum global $(0,0)$.

![[assets/IMG_7441.jpeg|800]]

> [!tip] Image mentale
> Les courbes de niveau ressemblent aux lignes d'altitude d'une carte. Le gradient monte la pente la plus raide. L'opposé du gradient descend la pente la plus raide.

### Exemple au tableau avec $f(x_1,x_2)=x_1^2+x_2^2$

Pour cette fonction :

$$
\nabla f(x_1,x_2)=
\begin{pmatrix}
2x_1\\
2x_2
\end{pmatrix}.
$$

Les ensembles de niveau sont :

$$
N_c
=\left\{(x_1,x_2)\in\mathbb{R}^2
\mid x_1^2+x_2^2=c\right\}.
$$

Pour $c\geq0$, ce sont des cercles de centre $(0,0)$ et de rayon $\sqrt c$. Au point :

$$
x^0=
\begin{pmatrix}
x_1^0\\
x_2^0
\end{pmatrix}
$$

le gradient vaut :

$$
\nabla f(x^0)=
\begin{pmatrix}
2x_1^0\\
2x_2^0
\end{pmatrix}.
$$

Ce vecteur est radial et pointe vers l'extérieur du cercle, donc vers des valeurs plus grandes de $f$. Son opposé pointe vers l'origine, qui est le minimum global.

## Algorithme de descente de gradient

La méthode transforme le principe géométrique en une suite de calculs.

> [!example] Algorithme général
> **Entrée** : un point initial $x^0$
>
> 1. Poser $k=0$
> 2. Calculer $d^k=-\nabla f(x^k)$
> 3. Choisir un pas $\alpha_k>0$
> 4. Calculer $x^{k+1}=x^k+\alpha_kd^k$
> 5. Remplacer $k$ par $k+1$
> 6. Recommencer tant que le critère d'arrêt n'est pas satisfait

Comme $d^k=-\nabla f(x^k)$, la mise à jour s'écrit aussi :

$$
x^{k+1}=x^k-\alpha_k\nabla f(x^k).
$$

### Critères d'arrêt

Le cours propose plusieurs critères possibles.

#### Gradient presque nul avec la norme euclidienne

$$
\lVert\nabla f(x^k)\rVert_2<\varepsilon
$$

#### Gradient presque nul avec la norme infinie

$$
\lVert\nabla f(x^k)\rVert_\infty<\varepsilon
$$

avec :

$$
\lVert v\rVert_\infty=\max_i|v_i|.
$$

#### Variation de la fonction presque nulle

$$
\left|f(x^{k+1})-f(x^k)\right|<\varepsilon.
$$

#### Nombre maximal d'itérations atteint

$$
k\geq k_{\max}.
$$

> [!warning] Bon usage
> Une très petite variation de $f$ peut aussi venir d'un pas beaucoup trop petit. En pratique, on combine souvent un test sur le gradient avec un nombre maximal d'itérations.

## Choix du pas

Le pas $\alpha_k$ détermine la distance parcourue dans la direction de descente. Son choix influence fortement la vitesse et la stabilité de la méthode.

### Heuristique d'augmentation et de réduction

La règle présentée dans le cours part d'une valeur initiale $\alpha_0>0$.

À l'itération $k$ :

1. Calculer $d^k=-\nabla f(x^k)$
2. Former $x^{k+1}=x^k+\alpha_kd^k$
3. Si $f(x^{k+1})>f(x^k)$, prendre $\alpha_{k+1}=0{,}5\alpha_k$
4. Sinon, prendre $\alpha_{k+1}=1{,}2\alpha_k$

L'idée est simple. Un pas qui fait monter la fonction est réduit. Un pas qui réussit à faire descendre la fonction peut être légèrement agrandi pour progresser plus vite.

> [!warning] Précision d'implémentation
> Dans une version robuste, si le nouvel essai fait augmenter $f$, on rejette généralement cet essai puis on recalcule le point avec le pas réduit. Cela évite d'accepter une itération qui dégrade la valeur de la fonction.

### Pas décroissant avec gradient normalisé

Une autre variante normalise le gradient :

$$
x^{k+1}
=x^k-\alpha_k
\frac{\nabla f(x^k)}{\lVert\nabla f(x^k)\rVert}.
$$

La norme du déplacement est alors exactement $\alpha_k$. La grandeur du gradient ne modifie plus directement la longueur du pas.

Le résultat attribué à Polyak dans le cours utilise :

$$
\alpha_0=1
$$

et, pour $k\geq1$ :

$$
\alpha_k=\frac1k.
$$

La diapositive annonce une convergence vers un point stationnaire sans préciser les hypothèses nécessaires. Le choix des pas seul ne suffit pas à garantir cette conclusion pour toute fonction. Il faut vérifier les hypothèses du théorème avant de l'appliquer.

> [!info] Intuition
> Au début, les pas sont grands pour explorer rapidement. Ensuite, ils deviennent plus petits pour stabiliser l'approche du point stationnaire.

## Méthode de la plus forte pente avec recherche exacte

Dans cette méthode, on utilise toujours la direction $-\nabla f(x^k)$, mais on choisit le meilleur pas possible sur cette demi-droite.

$$
x^{k+1}=x^k-\alpha_k\nabla f(x^k)
$$

avec :

$$
\alpha_k
\in\operatorname*{argmin}_{\alpha\geq0}
f\bigl(x^k-\alpha\nabla f(x^k)\bigr).
$$

On ramène donc le problème à plusieurs variables à un problème en une seule variable. On définit :

$$
g_k(\alpha)=f\bigl(x^k-\alpha\nabla f(x^k)\bigr).
$$

Puis on cherche un minimiseur de $g_k$ sur $\alpha\geq0$.

### Orthogonalité de deux gradients successifs

Si le minimum de $g_k$ est intérieur et si $g_k$ est dérivable, alors :

$$
g_k'(\alpha_k)=0.
$$

Par la règle de dérivation en chaîne :

$$
g_k'(\alpha)
=-\nabla f(x^k)^T
\nabla f\bigl(x^k-\alpha\nabla f(x^k)\bigr).
$$

Or :

$$
x^{k+1}=x^k-\alpha_k\nabla f(x^k).
$$

Donc :

$$
\nabla f(x^k)^T\nabla f(x^{k+1})=0.
$$

> [!important] Conséquence
> Avec une recherche exacte, deux gradients successifs sont orthogonaux. Les deux directions de descente successives le sont également.

### Exemple complet

Considérons :

$$
f(x_1,x_2)=x_1^2+x_2^2
$$

avec :

$$
x^0=
\begin{pmatrix}
1\\
2
\end{pmatrix}.
$$

Le gradient est :

$$
\nabla f(x)=
\begin{pmatrix}
2x_1\\
2x_2
\end{pmatrix}
$$

donc :

$$
\nabla f(x^0)=
\begin{pmatrix}
2\\
4
\end{pmatrix}.
$$

On cherche le minimum de :

$$
\begin{aligned}
g_0(\alpha)
&=f\bigl(x^0-\alpha\nabla f(x^0)\bigr)\\
&=(1-2\alpha)^2+(2-4\alpha)^2.
\end{aligned}
$$

Sa dérivée vaut :

$$
\begin{aligned}
g_0'(\alpha)
&=-2(1-2\alpha)-4(2-4\alpha)\\
&=20\alpha-10.
\end{aligned}
$$

Ainsi :

$$
g_0'(\alpha)=0
\quad\Longrightarrow\quad
\alpha_0=\frac12.
$$

La nouvelle position est :

$$
x^1
=
\begin{pmatrix}
1\\
2
\end{pmatrix}
-\frac12
\begin{pmatrix}
2\\
4
\end{pmatrix}
=
\begin{pmatrix}
0\\
0
\end{pmatrix}.
$$

Le minimum global est atteint en une seule itération.

## Zigzag dans une vallée étroite

Considérons la fonction quadratique :

$$
q(x_1,x_2)=x_1^2+20x_2^2.
$$

Ses courbes de niveau sont les ellipses :

$$
x_1^2+20x_2^2=c
$$

avec $c>0$. Sa Hessienne vaut :

$$
\nabla^2q=
\begin{pmatrix}
2&0\\
0&40
\end{pmatrix}.
$$

Les deux directions n'ont donc pas la même courbure. La fonction varie vingt fois plus fortement suivant $x_2$ que suivant $x_1$.

![[assets/IMG_7462.jpeg|800]]

La recherche exacte donne des directions successives orthogonales. Dans une vallée très allongée, les itérés rebondissent d'un bord à l'autre. La méthode descend, mais elle avance lentement vers le minimum.

> [!warning] Phénomène de zigzag
> La direction choisie est la meilleure localement, mais elle ne tient pas compte de la forme générale de la vallée. Une forte différence entre les valeurs propres de la Hessienne peut donc ralentir la descente de gradient.

## Descente de gradient avec momentum

Le momentum ajoute une partie du déplacement précédent à la nouvelle mise à jour. Il joue le rôle d'une inertie.

On note :

$$
\Delta x^0=0
$$

et, pour $k\geq1$ :

$$
\Delta x^k=x^k-x^{k-1}.
$$

La mise à jour avec momentum est :

$$
x^{k+1}
=x^k-\alpha_k\nabla f(x^k)+\beta\Delta x^k
$$

avec :

$$
\beta\in[0,1).
$$

- Si $\beta=0$, on retrouve la descente de gradient classique
- Si $\beta$ est proche de $1$, le déplacement précédent influence fortement le nouveau mouvement
- Dans une direction stable, les déplacements s'accumulent et accélèrent la progression
- Dans une direction où le signe alterne, les oscillations tendent à se compenser

> [!tip] Intuition
> Une bille qui descend une vallée conserve une partie de sa vitesse. Elle accélère dans la direction générale de la vallée et évite de repartir entièrement de zéro à chaque étape.

### Momentum de Nesterov

La variante de Nesterov calcule le gradient légèrement en avant, au point prédit par le momentum :

$$
x^{k+1}
=x^k
-\alpha_k\nabla f\bigl(x^k+\beta\Delta x^k\bigr)
+\beta\Delta x^k.
$$

La différence essentielle est donc le point où le gradient est évalué.

| Méthode | Point d'évaluation du gradient |
| --- | --- |
| Gradient avec momentum | $x^k$ |
| Momentum de Nesterov | $x^k+\beta\Delta x^k$ |

> [!abstract] Résumé du chapitre 2
> Le gradient est orthogonal aux courbes de niveau et pointe vers la montée la plus forte.
>
> Son opposé est une direction de descente lorsque le gradient est non nul.
>
> Le pas peut être ajusté par heuristique, rendu décroissant ou obtenu par recherche exacte.
>
> La recherche exacte rend les gradients successifs orthogonaux.
>
> Une vallée très allongée produit souvent un zigzag lent.
>
> Le momentum réutilise une partie du déplacement précédent pour accélérer et réduire certaines oscillations.
