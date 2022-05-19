it("Si hacemos contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) debería retornar true", function() {
let resultado = contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])
assert.equal(resultado, true,`contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) debería retornar true pero fue ${resultado}`);
})

it("Si hacemos contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) debería retornar false ", function() {
let resultado = contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])
assert.equal(resultado, false,`contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) debería retornar false pero fue ${resultado}`);
})