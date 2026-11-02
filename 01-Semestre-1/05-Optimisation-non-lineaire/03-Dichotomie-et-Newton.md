# Recherche du pas, dichotomie et méthode de Newton

> [!info] Continuité du cours
> Ces méthodes prolongent les [[00-Optimisation-non-lineaire#Méthode de la plus forte pente avec recherche exacte|méthodes de gradient]] déjà étudiées. Pour choisir un pas, on résout souvent un problème à une seule variable. Les calculs de Hessienne sont détaillés dans [[02-Calculs-gradient-et-hessienne]].

## 1. Recherche du pas

Une méthode de descente construit :

$$
x^{k+1}=x^k+\alpha_kd^k
\qquad
\nabla f(x^k)^Td^k<0.
$$

Avec $d^k=-\nabla f(x^k)$ et une recherche exacte :

$$
\alpha_k\in\operatorname*{argmin}_{\alpha\geq0}f(x^k+\alpha d^k).
$$

On pose $g(\alpha)=f(x^k+\alpha d^k)$. Un minimum intérieur différentiable vérifie $g'(\alpha)=0$. Si le minimum est au bord $\alpha=0$, cette égalité n'est pas nécessaire.

### Retour sur le momentum

Avec $\Delta x^k=x^k-x^{k-1}$, le cours rappelle :

$$
x^{k+1}=x^k-\alpha_k\nabla f(x^k)+\beta\Delta x^k.
$$

Une recherche exacte de $\alpha$ pour cette expression peut utiliser $g(\alpha)=f(x^k-\alpha\nabla f(x^k)+\beta\Delta x^k)$. Au départ, $\Delta x^0=0$.

### Accélération d'ordre $p$

La diapositive propose aussi de réaliser $p\geq1$ itérations de plus forte pente depuis $x^k$. On note $y^k$ le point obtenu puis on pose $d^k=y^k-x^k$. L'idée est de rechercher ensuite un pas le long de cette direction globale et de calculer $x^{k+1}=x^k+\alpha_kd^k$.

> [!warning] Signe à vérifier sur la diapositive
> La formule photographiée minimise $f(x^k-\alpha d^k)$ alors que la mise à jour utilise $x^k+\alpha_kd^k$. Ces deux signes ne correspondent pas. Pour une recherche le long du déplacement effectivement utilisé, l'expression cohérente est $f(x^k+\alpha d^k)$. Il reste préférable de confirmer cette correction avec le professeur.

## 2. Trouver une racine

La recherche d'un optimum intérieur conduit à chercher une racine de $h=g'$. Si $h$ est continue sur $[a,b]$ et si $h(a)h(b)<0$, le théorème des valeurs intermédiaires garantit au moins une racine dans $]a,b[$.

> [!warning] Ne pas déduire trop de choses du signe
> Deux valeurs de même signe ne prouvent pas qu'il n'y a aucune racine. Un changement de signe ne garantit pas l'unicité. Une racine de $g'$ peut être un maximum ou un point stationnaire qui n'est pas un extremum.

### Exemple du tableau

Pour $h(\alpha)=e^\alpha-\alpha-2$ :

$$
h'(\alpha)=e^\alpha-1.
$$

La dérivée s'annule uniquement en $0$. La fonction décroît avant $0$ et croît après $0$. De plus :

$$
h(0)=-1
\qquad
h(1)=e-3<0
\qquad
h(2)=e^2-4>0.
$$

Une racine positive se trouve dans $]1,2[$. Comme $h(-2)=e^{-2}>0$, une autre racine se trouve dans $]-2,0[$. Les deux intervalles de monotonie assurent ici qu'il n'y en a pas d'autre.

![[assets/20261008_085224641_iOS.heic|650]]

*Schéma du tableau illustrant les deux racines de l'exemple.*

## 3. Méthode de dichotomie

On suppose $h$ continue et $h(a)h(b)<0$.

1. Calculer le milieu $m=(a+b)/2$
2. Si $h(m)=0$, on a trouvé une racine
3. Sinon conserver la moitié dont les extrémités ont des signes opposés
4. Répéter jusqu'à obtenir un intervalle suffisamment petit

Après $k$ découpages, la largeur est $(b-a)/2^k$. Pour obtenir une largeur au plus égale à $\varepsilon$, il suffit de choisir :

$$
k\geq\left\lceil\log_2\frac{b-a}{\varepsilon}\right\rceil.
$$

> [!example] Deux étapes
> Pour $h(x)=x^2-2$ sur $[1,2]$, le milieu est $1{,}5$ et $h(1{,}5)=0{,}25>0$. On conserve $[1,1{,}5]$.
>
> Le nouveau milieu est $1{,}25$ et $h(1{,}25)=-0{,}4375$. On conserve $[1{,}25,1{,}5]$ qui contient $\sqrt2$.

## 4. Newton à une variable

Pour trouver $h(\alpha)=0$, on approche la courbe par sa tangente au point $\alpha_k$ :

$$
t(\alpha)=h(\alpha_k)+h'(\alpha_k)(\alpha-\alpha_k).
$$

L'intersection de cette tangente avec l'axe horizontal donne, si $h'(\alpha_k)\neq0$ :

![[assets/20261008_090818712_iOS.heic|650]]

*La tangente fournit la prochaine approximation de la racine.*

$$
\alpha_{k+1}=\alpha_k-\frac{h(\alpha_k)}{h'(\alpha_k)}.
$$

Pour chercher un point stationnaire de $g$, on pose $h=g'$ :

$$
\alpha_{k+1}=\alpha_k-\frac{g'(\alpha_k)}{g''\left(\alpha_k\right)}.
$$

Sous des hypothèses de régularité et si le point de départ est suffisamment proche d'une racine simple, la convergence peut être quadratique. Cette garantie est locale. Une dérivée nulle ou un mauvais point initial peut faire échouer la méthode.

## 5. Newton en plusieurs variables

Au voisinage de $x^k$, le modèle quadratique est :

$$
f(x^k+d)\approx f(x^k)+\nabla f(x^k)^Td+\frac12d^T\nabla^2f(x^k)d.
$$

En annulant le gradient de ce modèle, la direction vérifie :

$$
\nabla^2f(x^k)d^k=-\nabla f(x^k).
$$

Lorsque la Hessienne est inversible :

$$
d^k=-[\nabla^2f(x^k)]^{-1}\nabla f(x^k)
\qquad
x^{k+1}=x^k+d^k.
$$

En pratique, on résout le système linéaire pour $d^k$ plutôt que de former explicitement l'inverse. Une variante amortie utilise $x^{k+1}=x^k+\alpha_kd^k$.

### Pourquoi est-ce une direction de descente ?

Si $\nabla^2f(x^k)$ est symétrique définie positive et $\nabla f(x^k)\neq0$, son inverse est aussi définie positive. Alors :

$$
\nabla f(x^k)^Td^k
=-\nabla f(x^k)^T[\nabla^2f(x^k)]^{-1}\nabla f(x^k)<0.
$$

> [!warning] Limites
> Si la Hessienne est singulière, l'inverse n'existe pas. Si elle est indéfinie, la direction de Newton n'est pas nécessairement une direction de descente. Le calcul et la résolution peuvent aussi coûter cher en grande dimension.

### Exemple simple

Pour $f(x_1,x_2)=x_1^2+2x_2^2$, $\nabla f=(2x_1,4x_2)^T$ et $H=\operatorname{diag}(2,4)$. La résolution $Hd=-\nabla f$ donne $d=(-x_1,-x_2)^T$. Avec un pas égal à 1, Newton atteint $(0,0)$ en une itération.

Suite : [[04-Quasi-Newton-et-gradient-stochastique]]. Exercices : [[01-Exercices-et-exemples]].
