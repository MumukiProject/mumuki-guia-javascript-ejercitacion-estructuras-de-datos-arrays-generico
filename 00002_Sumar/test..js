it("Si hacemos sumar([5, 7, 10, 12, 24]) debería retornar 58", function() {
let resultado = sumar([5, 7, 10, 12, 24])
assert.equal(resultado, 58,`sumar([5, 7, 10, 12, 24]) debería retornar 58 pero fue ${resultado}`);
})

it("Si hacemos sumar([19, 27, 24, 8, 9, 15, 12]) debería retornar 114", function() {
let resultado = sumar([19, 27, 24, 8, 9, 15, 12])
assert.equal(resultado, 114,`sumar([19, 27, 24, 8, 9, 15, 12]) debería retornar 114 pero fue ${resultado}`);
})