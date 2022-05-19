it("Si hacemos invertirCaso('Ada Lovelace')  debería retornar 'aDA lOVELACE'", function() {
let resultado = invertirCaso('Ada Lovelace') 
assert.equal(resultado, 'aDA lOVELACE',`invertirCaso('Ada Lovelace')  debería retornar 'aDA lOVELACE' pero fue ${resultado}`);
})

it("Si hacemos invertirCaso('feliz cumple')  debería retornar 'FELIZ CUMPLE'", function() {
let resultado = invertirCaso('feliz cumple') 
assert.equal(resultado, 'FELIZ CUMPLE',`invertirCaso('feliz cumple')  debería retornar 'FELIZ CUMPLE' pero fue ${resultado}`);
})