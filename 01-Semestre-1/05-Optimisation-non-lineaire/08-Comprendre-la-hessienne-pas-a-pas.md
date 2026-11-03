# 🧩 Comprendre la Hessienne et les matrices pas à pas

[[00-Optimisation-non-lineaire 1|⬅ Sommaire du cours]] · [[02-Calculs-gradient-et-hessienne|Calculs du tableau]] · [[01-Exercices-et-exemples|Exercices]]

> [!abstract] Le but de cette fiche
> On part d'une fonction, on calcule chaque dérivée et on explique d'où viennent les nombres de la matrice, du déterminant et des valeurs propres. Les exemples complètent le cours.

## 1. Gradient et Hessienne en mots simples

Pour une fonction $f(x,y)$, le **gradient** regroupe les dérivées premières. La **Hessienne** regroupe les dérivées secondes, c'est-à-dire les dérivées des éléments du gradient.

$$
\nabla f(x,y)=
\begin{pmatrix}
\frac{\partial f}{\partial x}\\
\frac{\partial f}{\partial y}
\end{pmatrix}
\qquad
H_f(x,y)=
\begin{pmatrix}
\frac{\partial^2 f}{\partial x^2} & \frac{\partial^2 f}{\partial y\partial x}\\
\frac{\partial^2 f}{\partial x\partial y} & \frac{\partial^2 f}{\partial y^2}
\end{pmatrix}
$$

Dans cette fiche, la **ligne** indique la composante du gradient qu'on dérive et la **colonne** indique la variable utilisée pour cette deuxième dérivation. Quand les dérivées secondes sont continues, les deux dérivées croisées sont égales.

> [!tip] Une dérivée partielle
> Pour dériver par rapport à $x$, on considère $y$ comme une constante. Pour dériver par rapport à $y$, on considère $x$ comme une constante.

## 2. Exemple du cours, calcul de chaque case

Dans [[02-Calculs-gradient-et-hessienne]], on étudie :

$$
Q=\begin{pmatrix}1&2\\3&1\end{pmatrix}
\qquad
c=\begin{pmatrix}1\\2\end{pmatrix}
\qquad
f(x)=x^TQx+c^Tx+r.
$$

### Étape A — Multiplier la matrice par le vecteur

Posons $x=(x_1,x_2)^T$. Chaque ligne de $Q$ est multipliée par la colonne $x$ :

$$
Qx=
\begin{pmatrix}
1x_1+2x_2\\
3x_1+1x_2
\end{pmatrix}.
$$

Ensuite, on multiplie la ligne $x^T=(x_1,x_2)$ par cette colonne :

$$
\begin{aligned}
x^TQx
&=x_1(x_1+2x_2)+x_2(3x_1+x_2)\\
&=x_1^2+2x_1x_2+3x_1x_2+x_2^2\\
&=x_1^2+5x_1x_2+x_2^2.
\end{aligned}
$$

Comme $c^Tx=x_1+2x_2$, la fonction complète devient :

$$
f=x_1^2+5x_1x_2+x_2^2+x_1+2x_2+r.
$$

> [!important] D'où vient le 5 ?
> Les deux termes croisés valent $2x_1x_2$ et $3x_1x_2$. Ensemble ils donnent $(2+3)x_1x_2=5x_1x_2$.

### Étape B — Calculer le gradient

En dérivant par rapport à $x_1$, on traite $x_2$ comme une constante :

$$
\frac{\partial f}{\partial x_1}
=2x_1+5x_2+0+1+0+0
=2x_1+5x_2+1.
$$

En dérivant par rapport à $x_2$, on traite $x_1$ comme une constante :

$$
\frac{\partial f}{\partial x_2}
=0+5x_1+2x_2+0+2+0
=5x_1+2x_2+2.
$$

On range les résultats dans une colonne :

$$
\nabla f(x)=\begin{pmatrix}2x_1+5x_2+1\\5x_1+2x_2+2\end{pmatrix}.
$$

### Étape C — Remplir les quatre cases de la Hessienne

On dérive la première ligne du gradient par rapport à $x_1$, puis à $x_2$ :

$$
\frac{\partial}{\partial x_1}(2x_1+5x_2+1)=2
\qquad
\frac{\partial}{\partial x_2}(2x_1+5x_2+1)=5.
$$

On dérive la deuxième ligne du gradient de la même manière :

$$
\frac{\partial}{\partial x_1}(5x_1+2x_2+2)=5
\qquad
\frac{\partial}{\partial x_2}(5x_1+2x_2+2)=2.
$$

On obtient :

$$
\boxed{H_f=\begin{pmatrix}2&5\\5&2\end{pmatrix}.}
$$

Les termes linéaires et la constante disparaissent après deux dérivations. La Hessienne est constante car la fonction est quadratique.

### Étape D — Retrouver la même matrice avec $Q+Q^T$

La transposée échange lignes et colonnes :

$$
Q^T=\begin{pmatrix}1&3\\2&1\end{pmatrix}.
$$

On additionne les nombres situés dans les mêmes cases :

$$
Q+Q^T=
\begin{pmatrix}1+1&2+3\\3+2&1+1\end{pmatrix}
=\begin{pmatrix}2&5\\5&2\end{pmatrix}.
$$

Le raccourci général est $\nabla(x^TQx)=(Q+Q^T)x$. Lorsque $Q$ est symétrique, $Q^T=Q$, donc la Hessienne est $2Q$. **Ici $Q$ n'est pas symétrique**, donc il faut utiliser $Q+Q^T$.

## 3. D'où viennent les valeurs propres ?

Une valeur propre $\lambda$ est une valeur pour laquelle il existe un vecteur non nul $v$ tel que $Hv=\lambda v$. Pour la trouver, on résout :

$$
\det(H-\lambda I)=0.
$$

Pour la matrice précédente :

$$
H-\lambda I=
\begin{pmatrix}2-\lambda&5\\5&2-\lambda\end{pmatrix}.
$$

Pour une matrice $2\times2$, $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$. Ici :

$$
\begin{aligned}
\det(H-\lambda I)
&=(2-\lambda)(2-\lambda)-5\times5\\
&=(2-\lambda)^2-25\\
&=(2-\lambda-5)(2-\lambda+5).
\end{aligned}
$$

Un produit est nul si l'un des facteurs est nul. Donc $2-\lambda-5=0$ donne $\lambda=-3$, et $2-\lambda+5=0$ donne $\lambda=7$.

> [!warning] Conclusion pour cette matrice
> Les valeurs propres ont des signes opposés. La Hessienne est **indéfinie**. Sur $\mathbb R^2$, cette fonction n'est pas convexe et un point stationnaire éventuel est un point selle, pas un minimum local.

On peut aussi le voir avec les directions $v=(1,1)$ et $u=(1,-1)$. On trouve $v^THv=14>0$ et $u^THu=-6<0$. La courbure change donc de signe suivant la direction.

## 4. Test rapide pour une Hessienne symétrique 2 × 2

Pour $H=\begin{pmatrix}a&b\\b&c\end{pmatrix}$, calcule $\Delta=ac-b^2$.

| Résultat | Conclusion |
|---|---|
| $\Delta>0$ et $a>0$ | Définie positive |
| $\Delta>0$ et $a<0$ | Définie négative |
| $\Delta<0$ | Indéfinie |
| $\Delta=0$ | Ce test rapide ne suffit pas à classer dans tous les cas |

> [!example] Exemple simple
> Si $H=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, alors $\Delta=2\times2-1^2=3>0$ et $a=2>0$. Elle est définie positive. Ses valeurs propres sont $1$ et $3$.

> [!warning] Cas $\Delta=0$
> On ne peut pas conclure automatiquement « minimum ». Par exemple $H=\operatorname{diag}(2,0)$ est semi-définie positive, tandis que $H=\operatorname{diag}(-2,0)$ est semi-définie négative.

## 5. Faire le lien avec un point stationnaire

Pour une fonction $C^2$ sans contrainte, au point **intérieur** $x^\star$ :

1. Résoudre $\nabla f(x^\star)=0$ pour trouver les candidats.
2. Calculer $H_f(x^\star)$.
3. Si elle est définie positive, $x^\star$ est un minimum local strict.
4. Si elle est définie négative, $x^\star$ est un maximum local strict.
5. Si elle est indéfinie, $x^\star$ est un point selle.
6. Si elle est seulement semi-définie, le test du second ordre peut être non concluant.

Par exemple $x^4$ et $-x^4$ ont une dérivée seconde nulle en $0$, mais la première a un minimum et la seconde un maximum. Une Hessienne positive **en un seul point** ne suffit pas à prouver que toute la fonction est convexe.

## 6. Autre exemple avec une Hessienne qui dépend du point

Soit $f(x,y)=x^2+xy+y^4$. Alors :

$$
\nabla f(x,y)=\begin{pmatrix}2x+y\\x+4y^3\end{pmatrix}
\qquad
H_f(x,y)=\begin{pmatrix}2&1\\1&12y^2\end{pmatrix}.
$$

Pourquoi $12y^2$ ? On dérive d'abord $y^4$ en $4y^3$, puis $4y^3$ en $12y^2$. Au point $(1,2)$ :

$$
H_f(1,2)=\begin{pmatrix}2&1\\1&48\end{pmatrix}
\qquad
\det H_f(1,2)=2\times48-1=95>0.
$$

Le coefficient en haut à gauche est positif. La matrice est donc définie positive **en ce point**. Cela ne classe pas le point comme minimum, car il faut d'abord vérifier que son gradient est nul.

## 7. À faire toi-même

Pour $g(x,y)=3x^2+2xy+2y^2-6x$, calcule le gradient, la Hessienne, son déterminant et ses valeurs propres.

> [!success]- Correction détaillée
> $\nabla g=(6x+2y-6,\ 2x+4y)^T$.
>
> $H_g=\begin{pmatrix}6&2\\2&4\end{pmatrix}$ et $\det H_g=6\times4-2^2=20>0$. Comme $6>0$, la Hessienne est définie positive.
>
> $\det(H_g-\lambda I)=(6-\lambda)(4-\lambda)-4=\lambda^2-10\lambda+20$. Ses racines sont $\lambda=(10\pm\sqrt{100-80})/2=5\pm\sqrt5$. Elles sont toutes deux positives.
>
> Pour aller plus loin, le système $6x+2y=6$ et $2x+4y=0$ donne $x=6/5$ et $y=-3/5$. La Hessienne est définie positive partout, donc c'est l'unique minimum global.
