it("Si hacemos germinar('π·π±π»π±πΈπ±π·π±π»π±πΈπ±') deberΓ­a retornar 'π·π·π»π»πΈπΈπ·π·π»π»πΈπΈ'", function() {
let resultado = germinar('π·π±π»π±πΈπ±π·π±π»π±πΈπ±')
assert.deepEqual(resultado,'π·π·π»π»πΈπΈπ·π·π»π»πΈπΈ',`germinar deberΓ­a retornar 'π·π·π»π»πΈπΈπ·π·π»π»πΈπΈ' pero fue ${resultado}`);
})

it("Si hacemos germinar('π·π±π±π±π»π±π±πΈπ±π±π±π±') deberΓ­a retornar 'π·π·π·π·π»π»π»πΈπΈπΈπΈπΈ'", function() {
let resultado = germinar('π·π±π±π±π»π±π±πΈπ±π±π±π±')
assert.deepEqual(resultado, 'π·π·π·π·π»π»π»πΈπΈπΈπΈπΈ',`Μ£germinar deberΓ­a retornar'π·π·π·π·π»π»π»πΈπΈπΈπΈπΈ' pero fue ${resultado}`);
})


