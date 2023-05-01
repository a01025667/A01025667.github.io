// Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
function norep(cad)
{
    let cont = {};
    for (let i = 0; i < cad.length; i ++)
    {
        if (cont[cad[i]])
        {
            cont[cad[i]]++;
        }   
        else
        {
            cont[cad[i]] = 1;
        }
        if (cont[cad[i]] === 1)
        {
            console.log(cad[i]);
        }
    }
}
console.log(norep('abacddbec'));