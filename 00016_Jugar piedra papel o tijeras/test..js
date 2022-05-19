it("Si hacemos jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) debería retornar Grace", function() {
let resultado = jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra'])
assert.equal(resultado, 'Grace',`jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) debería retornar 'Grace' pero fue ${resultado}`);
})

it("Si hacemos jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']) debería retornar Empate", function() {
let resultado = jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel'])
assert.equal(resultado, 'Empate',`'jugarPiedraPapelTijeras(Ada', 'Grace', ['papel'], ['papel']) debería retornar 'Empate' pero fue ${resultado}`);
})

