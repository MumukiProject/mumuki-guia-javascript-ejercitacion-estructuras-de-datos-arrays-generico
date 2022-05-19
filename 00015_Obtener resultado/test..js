it("Si hacemos obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3]) debería retornar Ada", function() {
let resultado = obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3])
assert.deepEqual(resultado, 'Ada',`obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3]) debería retornar 'Ada' pero fue ${resultado}`);
})

it("Si hacemos obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9]) debería retornar Empate", function() {
let resultado = obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9])
assert.deepEqual(resultado, 'Empate',`obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9]) debería retornar 'Empate' pero fue ${resultado}`);
})

it("Si hacemos obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]) debería retornar Grace", function() {
let resultado = obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])
assert.deepEqual(resultado, 'Grace',`obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]) debería retornar 'Grace' pero fue ${resultado}`);
})