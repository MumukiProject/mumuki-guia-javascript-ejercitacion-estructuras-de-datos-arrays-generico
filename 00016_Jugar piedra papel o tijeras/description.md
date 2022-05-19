> Definí una función `jugarPiedraPapelTijeras` que reciba como argumentos dos strings `jugadoraA` y `jugadoraB` con los nombres de cada jugadora respectivamente, y dos arrays de strings `jugadasA` y `jugadasB` con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o `Empate` en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:
>
```javascript
const jugadasA = ['piedra', 'piedra', 'tijera']
const jugadasB = ['papel', 'tijera', 'tijera']
>
// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate
>
// Resultado final: Empate
```
>
```javascript
ム jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) 
Grace
ム jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']) Empate
ム jugarPiedraPapelTijeras(
  'Ada','Grace',
  ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel']
)
Ada
```