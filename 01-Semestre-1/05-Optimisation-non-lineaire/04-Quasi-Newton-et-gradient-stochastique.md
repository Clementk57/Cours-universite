# Quasi-Newton et gradient stochastique

> [!info] Continuité
> Cette partie poursuit [[03-Dichotomie-et-Newton|la méthode de Newton]] et les [[00-Optimisation-non-lineaire#Principe de la méthode du gradient|méthodes de gradient]]. Les fiches sont découpées pour faciliter la lecture, mais correspondent à la suite du même cours.

## 1. Pourquoi une méthode quasi-Newton ?

Newton utilise la Hessienne et résout un système à chaque itération. Lorsqu'il y a beaucoup de variables, cela peut coûter cher. Une méthode quasi-Newton construit une approximation $H_k$ de l'inverse de la Hessienne à partir des changements observés entre les itérations.

On utilise :

$$
d^k=-H_k\nabla f(x^k)
\qquad
x^{k+1}=x^k+\alpha_kd^k.
$$

Si $H_k$ est symétrique définie positive et si le gradient n'est pas nul, $d^k$ est une direction de descente car :

$$
\nabla f(x^k)^Td^k=-\nabla f(x^k)^TH_k\nabla f(x^k)<0.
$$

Pour $H_k=I$, on retrouve la direction opposée au gradient.

## 2. Condition de sécante

On note :

$$
s_k=x^{k+1}-x^k
\qquad
y_k=\nabla f(x^{k+1})-\nabla f(x^k).
$$

Par approximation locale, $y_k\approx\nabla^2f(x^k)s_k$. On souhaite donc que la nouvelle approximation de l'inverse de la Hessienne vérifie :

$$
H_{k+1}y_k=s_k.
$$

Cette relation est appelée condition de sécante. Elle exploite la variation du gradient entre deux points sans nécessiter le calcul exact de la Hessienne.

## 3. Mise à jour du tableau

La formule du tableau est la mise à jour DFP de l'approximation inverse :

$$
H_{k+1}=H_k+\frac{s_ks_k^T}{s_k^Ty_k}
-\frac{H_ky_ky_k^TH_k}{y_k^TH_ky_k}.
$$

Elle est définie lorsque les dénominateurs sont non nuls. Si $H_k$ est symétrique définie positive et $s_k^Ty_k>0$, la mise à jour conserve la symétrie et la définie positivité. Cette condition de courbure n'est pas automatique pour tout choix de pas.

En multipliant la formule par $y_k$ :

$$
\begin{aligned}
H_{k+1}y_k
&=H_ky_k+s_k-H_ky_k\\
&=s_k.
\end{aligned}
$$

On retrouve bien la condition de sécante. Le tableau écrit aussi $s_k=\alpha_kd^k$ et initialise $H_0=I$.

### Écriture utilisée au tableau

Le professeur décompose la mise à jour en $H_{k+1}=H_k+A_k+B_k$ avec :

$$
A_k=\alpha_k\frac{d^k(d^k)^T}{(d^k)^Ty_k}
\qquad
B_k=-\frac{H_ky_k(H_ky_k)^T}{y_k^TH_ky_k}.
$$

Comme $s_k=\alpha_kd^k$, la première expression est équivalente à $s_ks_k^T/(s_k^Ty_k)$ lorsque les dénominateurs sont définis. Si $H_k$ est symétrique, $(H_ky_k)^T=y_k^TH_k$ et la seconde expression coïncide avec celle ci-dessus.

La vérification développée au tableau est :

$$
\begin{aligned}
H_{k+1}y_k
&=H_ky_k+A_ky_k+B_ky_k\\
&=H_ky_k+\alpha_kd^k-H_ky_k\\
&=\alpha_kd^k=s_k.
\end{aligned}
$$

Le tableau amorce une preuve par récurrence de la positivité. L'initialisation est $H_0=I\succ0$. La photographie s'arrête à l'annonce de l'étape de récurrence. La préservation de la positivité nécessite en particulier une condition comme $s_k^Ty_k>0$.

> [!tip] Lire les produits
> $s_ks_k^T$ et $H_ky_ky_k^TH_k$ sont des matrices. Les quantités $s_k^Ty_k$ et $y_k^TH_ky_k$ sont des nombres.

## 4. Algorithme résumé

1. Choisir $x^0$ et initialiser $H_0=I$
2. Calculer $d^k=-H_k\nabla f(x^k)$
3. Choisir un pas $\alpha_k$ et poser $x^{k+1}=x^k+\alpha_kd^k$
4. Calculer $s_k$ et $y_k$
5. Si les conditions nécessaires sont satisfaites, mettre à jour $H_k$ avec la formule DFP
6. Recommencer jusqu'à ce que le gradient soit assez petit ou qu'un critère d'arrêt soit atteint

## 5. Gradient stochastique

En apprentissage automatique, une fonction de coût peut être la moyenne des coûts associés à $M$ exemples :

$$
F(w)=\frac1M\sum_{i=1}^{M}\ell_i(w).
$$

Le gradient complet utilise tous les exemples :

$$
\nabla F(w)=\frac1M\sum_{i=1}^{M}\nabla\ell_i(w).
$$

Le gradient stochastique ou par mini-lot utilise un sous-ensemble $B_k$ :

$$
w^{k+1}=w^k-\alpha_k\frac1{|B_k|}\sum_{i\in B_k}\nabla\ell_i(w^k).
$$

Pour un seul exemple, $|B_k|=1$. Pour tout le jeu, on retrouve le gradient complet. Si l'objectif est écrit comme une somme plutôt que comme une moyenne, le facteur d'échelle doit être adapté.

| Méthode | Données utilisées à chaque mise à jour | Effet |
| --- | --- | --- |
| Gradient complet | Tous les exemples | Direction exacte pour le jeu mais calcul potentiellement coûteux |
| Stochastique | Un exemple | Mise à jour peu coûteuse mais plus variable |
| Mini-lot | Une partie des exemples | Compromis entre coût et variabilité |

> [!example] Lien avec l'intelligence artificielle
> Pour entraîner un modèle sur beaucoup d'images, on peut calculer une correction à partir d'un petit groupe d'images. Le groupe suivant donnera généralement une direction légèrement différente. Voir aussi le [[CH3-Perceptron-et-apprentissage|cours sur le perceptron]].

### Exemple du tableau : entropie croisée binaire

La dernière photographie donne, pour l'exemple $n$ :

$$
f_n(w)=-\frac1N\left[t_n\ln y_n+(1-t_n)\ln(1-y_n)\right].
$$

La quantité $t_n$ désigne la cible binaire et $y_n$ la sortie du modèle pour l'exemple considéré. La dépendance de $y_n$ à $w$ est sous-entendue dans l'écriture du tableau. Pour que les logarithmes soient définis, on prend $0<y_n<1$.

Le coût et son gradient s'écrivent :

$$
E(w)=\sum_{n=1}^{N}f_n(w)
\qquad
\nabla E(w)=\sum_{n=1}^{N}\nabla f_n(w).
$$

> [!example] Comprendre la perte
> Si la cible vaut $1$, seul le terme $-\ln y_n$ subsiste. Plus la prédiction $y_n$ est proche de $1$, plus la perte est petite. Si la cible vaut $0$, c'est le terme $-\ln(1-y_n)$ qui subsiste.

Le facteur $1/N$ est déjà inclus dans chaque $f_n$ tel que le professeur l'écrit. Si l'on utilise un mini-lot, il faut tenir compte de cette convention dans l'échelle du gradient et du pas. La diapositive exprime aussi le gradient d'un mini-lot sous forme de moyenne. La somme et la moyenne diffèrent d'un facteur constant.

> [!warning] À retenir
> Une mise à jour stochastique peut augmenter la fonction totale sur une itération. Ses propriétés de convergence dépendent notamment du choix du pas, de l'échantillonnage et des hypothèses sur la fonction.

Pour s'entraîner depuis les bases : [[01-Exercices-et-exemples]].
