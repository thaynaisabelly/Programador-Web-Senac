function Teste()
{
    var num = Number(window.prompt(`Digíte um número:`));
    var tipo
    if (num % 2 == 0) 
    {
        tipo = `<strong>
                    Par
                </strong>`
    }
    else
    {
        tipo = `<strong>
                    Ímpar
                </strong>`
    }
    var res = document.querySelector(`section#Resultado`)
    res.innerHTML = 
    `<p>
        O número ${num} que foi digítado é ${tipo}!
    </p>`
}
