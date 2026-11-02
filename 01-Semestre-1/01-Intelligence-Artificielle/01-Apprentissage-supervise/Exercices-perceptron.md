# Exercices corrigés — Perceptron

Essaie chaque question avant d'ouvrir la correction. Les exemples sont des compléments pédagogiques.

## 1. Changer de notation

Convertis les états $(-1,+1,-1,+1)$ en notation $0$ ou $1$ grâce à $s_i=(\sigma_i+1)/2$. Combien de configurations existe-t-il pour quatre neurones binaires ?

> [!success]- Correction
> Les états deviennent $(0,1,0,1)$. Il existe $2^4=16$ configurations.

## 2. Calculer la sortie

Un neurone utilise $x=(1,-1)$, $w=(2,3)$ et $\theta=1$. Il renvoie $+1$ si le champ corrigé est positif ou nul, sinon $-1$. Calcule le champ et la sortie.

> [!success]- Correction
> Le champ vaut $2(1)+3(-1)-1=-2$. La sortie est donc $-1$.
>
> Avec le biais, on pose $x_0=1$ et $w_0=-1$. On retrouve $-1+2-3=-2$.

## 3. Sly et la frontière de décision

Sly évalue une situation avec deux indicateurs $x_1$ et $x_2$. Le modèle utilise le score $h=2x_1-x_2-1$ et décide $+1$ si $h\geq0$.

1. Donne l'équation de la frontière
2. Classe les points $(2,1)$ et $(0,1)$
3. Calcule la distance de $(2,1)$ à la frontière

> [!success]- Correction
> La frontière est $2x_1-x_2-1=0$, soit $x_2=2x_1-1$.
>
> Pour $(2,1)$, $h=4-1-1=2$ et la classe est $+1$.
>
> Pour $(0,1)$, $h=0-1-1=-2$ et la classe est $-1$.
>
> La distance du premier point est $|2|/\sqrt{2^2+(-1)^2}=2/\sqrt5$.

## 4. Champ aligné et stabilité

Dans l'espace élargi, on donne $\vec w=(1,2,2)$, $\vec x=(1,1,-1)$ et $\tau=-1$. Calcule le champ, la prédiction, le champ aligné et la stabilité. Prends $\operatorname{signe}(0)=+1$.

> [!success]- Correction
> Le champ vaut $h=1+2-2=1$, donc la prédiction est $+1$. Elle diffère de l'étiquette $-1$.
>
> Le champ aligné vaut $y=\tau h=-1$. La norme des poids élargis est $\sqrt{1+4+4}=3$. La stabilité vaut donc $\gamma=-1/3$. Son signe négatif confirme l'erreur.

## 5. NAND et XOR

1. Combien existe-t-il de fonctions booléennes de deux variables ?
2. Une seule droite sépare-t-elle les classes de XOR ?
3. Pourquoi plusieurs couches peuvent-elles être utiles ?

> [!success]- Correction
> Il existe $2^{2^2}=16$ fonctions. XOR place les éléments d'une même classe sur des coins opposés du carré. Une seule droite ne peut pas séparer les deux classes. Plusieurs neurones et couches permettent de combiner plusieurs frontières pour représenter des décisions non linéaires.

## 6. Règle de Hebb

On donne trois exemples :

| $\mu$ | $x_1^\mu$ | $x_2^\mu$ | $\tau^\mu$ |
| --- | ---: | ---: | ---: |
| 1 | 1 | 1 | 1 |
| 2 | 1 | -1 | 1 |
| 3 | -1 | 1 | -1 |

Calcule $w_1$ et $w_2$ avec $w_j=\sum_\mu x_j^\mu\tau^\mu$. Classe ensuite les trois exemples avec $\operatorname{signe}(w\cdot x)$.

> [!success]- Correction
> $w_1=1(1)+1(1)+(-1)(-1)=3$.
>
> $w_2=1(1)+(-1)(1)+1(-1)=-1$.
>
> Les champs sont $2$, $4$ et $-4$. Leurs signes sont respectivement $+1$, $+1$ et $-1$. Les trois exemples sont bien classés, donc l'erreur empirique vaut $0$.

## 7. Erreur empirique

Sur 20 exemples, un modèle se trompe 3 fois. Calcule son erreur et sa proportion de prédictions correctes. Peut-on en déduire directement ses performances sur de nouvelles données ?

> [!success]- Correction
> L'erreur empirique est $3/20=0{,}15$, soit 15 %. La proportion correcte est $17/20=85$ %.
>
> Non. Pour évaluer la généralisation, il faut examiner des données qui n'ont pas servi à ajuster le modèle.

## 8. Comprendre le terme propre dans Hebb

En utilisant $x_j^1\in\{-1,+1\}$ et $\tau^1\in\{-1,+1\}$, simplifie :

$$
\sum_{j=1}^N \tau^1\tau^1 x_j^1x_j^1.
$$

> [!success]- Correction
> Chaque carré vaut 1. Chaque terme de la somme vaut donc 1. La somme vaut $N$.
