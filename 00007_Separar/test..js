it("Si hacemos separar(['πΆ','π±','πΆ','π±','π±','πΆ','πΆ']) deberΓ­a retornar 'πΆπΆπΆπΆπ±π±π±']", function() {
let resultado = separar(['πΆ','π±','πΆ','π±','π±','πΆ','πΆ'])
assert.deepEqual(resultado, 'πΆπΆπΆπΆπ±π±π±',`separar deberΓ­a retornar 'πΆπΆπΆπΆπ±π±π±' pero fue ${resultado}`);
})

